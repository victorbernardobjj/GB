import React, { useState, useMemo, useEffect } from 'react';
import { Printer, Calendar, Clock, ArrowUpRight, X } from 'lucide-react';
import {
  DAYS_OF_WEEK,
  TIMETABLE_SLOTS,
  SCHEDULE_FILTER_OPTIONS,
  DayOfWeek,
  TimetableSlot,
  ModalityCategory,
} from '../data/schedule';
import { getWhatsAppLink } from '../data/info';

interface ScheduleGridProps {
  initialFilter?: string;
  isCompact?: boolean;
  filterByModality?: ModalityCategory;
  showFilters?: boolean;
  showLegend?: boolean;
  showPrintButton?: boolean;
  title?: string;
}

export const ScheduleGrid: React.FC<ScheduleGridProps> = ({
  initialFilter = 'all',
  isCompact = false,
  filterByModality,
  showFilters = true,
  showLegend = true,
  showPrintButton = true,
  title,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>(
    filterByModality ? filterByModality : initialFilter
  );

  const currentDayIndex = new Date().getDay();
  const currentDayKey: DayOfWeek = useMemo(() => {
    const dayObj = DAYS_OF_WEEK.find((d) => d.index === currentDayIndex);
    return dayObj ? dayObj.key : 'Seg';
  }, [currentDayIndex]);

  const [activeMobileDay, setActiveMobileDay] = useState<DayOfWeek>(currentDayKey);
  const [selectedSlotForModal, setSelectedSlotForModal] = useState<TimetableSlot | null>(null);

  useEffect(() => {
    if (filterByModality) {
      setSelectedFilter(filterByModality);
    }
  }, [filterByModality]);

  const sortedTimes = useMemo(() => {
    const timeSet = new Set<string>();
    TIMETABLE_SLOTS.forEach((slot) => timeSet.add(slot.time));
    return Array.from(timeSet).sort();
  }, []);

  const filteredSlots = useMemo(() => {
    return TIMETABLE_SLOTS.filter((slot) => {
      if (filterByModality) {
        return slot.category === filterByModality;
      }
      if (selectedFilter === 'all') return true;
      return slot.category === selectedFilter;
    });
  }, [selectedFilter, filterByModality]);

  const slotMap = useMemo(() => {
    const map = new Map<string, TimetableSlot[]>();
    filteredSlots.forEach((slot) => {
      const key = `${slot.day}-${slot.time}`;
      const existing = map.get(key) || [];
      existing.push(slot);
      map.set(key, existing);
    });
    return map;
  }, [filteredSlots]);

  const mobileDaySlots = useMemo(() => {
    return filteredSlots
      .filter((slot) => slot.day === activeMobileDay)
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [filteredSlots, activeMobileDay]);

  const getMarkerColor = (color: string) => {
    if (color === 'red') return 'bg-[#A3181A]';
    if (color === 'blue') return 'bg-[#14284B]';
    return 'bg-[#111111]';
  };

  return (
    <div className="w-full font-inter">
      {/* Informative notice for Krav Maga */}
      <div className="mb-8 p-3.5 border border-[#D9D6CF] bg-[#EDEBE6] rounded-[2px] flex items-center justify-between text-xs text-[#111111]">
        <div className="flex items-center gap-2">
          <span className="font-semibold text-[#A3181A]">[Aviso de horário]</span>
          <span>Krav Maga: novo horário às segundas e quartas, 18h.</span>
        </div>
        <a
          href={getWhatsAppLink('Olá. Gostaria de informações sobre o novo horário de Krav Maga às 18h.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-[#A3181A] hover:underline font-medium"
        >
          <span>Consultar vagas</span>
          <ArrowUpRight className="w-3 h-3" />
        </a>
      </div>

      {/* Header controls (Title, Filter tabs, Print) */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#D9D6CF] pb-4">
        {title ? (
          <div>
            <h3 className="font-title text-2xl sm:text-3xl text-[#111111] tracking-wide uppercase">
              {title}
            </h3>
            <p className="text-xs text-[#5A5A57] mt-0.5">
              Clique em qualquer turma para agendar uma aula experimental.
            </p>
          </div>
        ) : (
          <div className="text-xs text-[#5A5A57]">
            Grade semanal de treinos
          </div>
        )}

        {/* Text tab filters (no colorful chips) */}
        {showFilters && !filterByModality && (
          <div className="flex items-center gap-4 overflow-x-auto pb-1 scrollbar-none text-xs">
            {SCHEDULE_FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedFilter(opt.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer pb-1 ${
                  selectedFilter === opt.id
                    ? 'text-[#111111] font-semibold border-b-2 border-[#111111]'
                    : 'text-[#5A5A57] hover:text-[#111111]'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

        {showPrintButton && (
          <button
            type="button"
            onClick={() => window.print()}
            className="no-print inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-[#5A5A57] hover:text-[#111111] border border-[#D9D6CF] rounded-[2px] transition-colors cursor-pointer self-start md:self-auto"
          >
            <Printer className="w-3.5 h-3.5" strokeWidth={1.5} />
            <span>Imprimir PDF</span>
          </button>
        )}
      </div>

      {/* ----------------- MOBILE SCHEDULE (Linear list with tabs) ----------------- */}
      <div className="block lg:hidden print:hidden">
        {/* Day selection tabs */}
        <div className="flex border-b border-[#D9D6CF] mb-4 overflow-x-auto scrollbar-none">
          {DAYS_OF_WEEK.map((day) => {
            const isToday = day.key === currentDayKey;
            const isSelected = day.key === activeMobileDay;

            return (
              <button
                key={day.key}
                type="button"
                onClick={() => setActiveMobileDay(day.key)}
                className={`flex-1 min-w-[50px] py-2 text-center text-xs font-inter transition-colors cursor-pointer border-b-2 ${
                  isSelected
                    ? 'border-[#111111] text-[#111111] font-semibold'
                    : 'border-transparent text-[#5A5A57] hover:text-[#111111]'
                }`}
              >
                <span>{day.label}</span>
                {isToday && <span className="block text-[9px] text-[#A3181A]">Hoje</span>}
              </button>
            );
          })}
        </div>

        {/* Linear slots list */}
        <div className="divide-y divide-[#D9D6CF] border-y border-[#D9D6CF]">
          {mobileDaySlots.length === 0 ? (
            <div className="py-8 text-center text-xs text-[#5A5A57]">
              Nenhuma aula cadastrada com este filtro para este dia.
            </div>
          ) : (
            mobileDaySlots.map((slot) => {
              const bookingMsg = `Olá. Gostaria de agendar uma aula experimental de ${slot.modality} (${slot.day} às ${slot.time}) na Gracie Barra Centro JF.`;

              return (
                <div
                  key={slot.id}
                  className="py-3 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs tabular-nums text-[#111111] font-medium pt-0.5 min-w-[42px]">
                      {slot.time}
                    </span>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-[1px] ${getMarkerColor(
                            slot.color
                          )}`}
                        />
                        <span className="text-xs font-medium text-[#111111]">
                          {slot.modality}
                        </span>
                        {slot.isNew && (
                          <span className="text-[10px] text-[#A3181A] font-semibold">
                            [Novo]
                          </span>
                        )}
                      </div>
                      {slot.ageRange && (
                        <span className="text-[11px] text-[#5A5A57] block">
                          Faixa etária: {slot.ageRange}
                        </span>
                      )}
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(bookingMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#111111] hover:text-[#A3181A] underline flex-shrink-0"
                  >
                    Agendar
                  </a>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* ----------------- DESKTOP TABLE (1px fine lines, #14284B header) ----------------- */}
      <div className="hidden lg:block overflow-x-auto print:block print:w-full print-area">
        <div className="min-w-[880px] border border-[#D9D6CF] rounded-[2px] overflow-hidden bg-white">
          {/* Header row: Days of week */}
          <div className="grid grid-cols-8 bg-[#14284B] text-white text-xs font-medium border-b border-[#D9D6CF]">
            <div className="p-3 border-r border-[#2A4474] text-[#A3B2CC] font-mono">
              Horário
            </div>
            {DAYS_OF_WEEK.map((day) => {
              const isToday = day.key === currentDayKey;
              return (
                <div
                  key={day.key}
                  className={`p-3 text-center border-r border-[#2A4474] last:border-r-0 ${
                    isToday ? 'bg-[#1C386A] font-semibold' : ''
                  }`}
                >
                  <span className="block">{day.fullLabel}</span>
                  {isToday && (
                    <span className="text-[10px] text-[#E0A8A9] block font-normal">
                      Hoje
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Time Rows */}
          <div className="divide-y divide-[#D9D6CF]">
            {sortedTimes.map((time) => (
              <div key={time} className="grid grid-cols-8 min-h-[46px] items-stretch text-xs">
                {/* Time column */}
                <div className="p-2.5 font-mono tabular-nums text-[#5A5A57] bg-[#F7F6F3] border-r border-[#D9D6CF] flex items-center justify-center">
                  {time}
                </div>

                {/* 7 Days columns */}
                {DAYS_OF_WEEK.map((day) => {
                  const isToday = day.key === currentDayKey;
                  const slots = slotMap.get(`${day.key}-${time}`) || [];

                  return (
                    <div
                      key={day.key}
                      className={`p-1.5 flex flex-col gap-1 justify-center border-r border-[#D9D6CF] last:border-r-0 ${
                        isToday ? 'bg-[#EDEBE6]/50' : 'bg-white'
                      }`}
                    >
                      {slots.map((slot) => (
                        <button
                          key={slot.id}
                          type="button"
                          onClick={() => setSelectedSlotForModal(slot)}
                          className="w-full text-left p-1.5 rounded-[1px] hover:bg-[#EDEBE6] transition-colors border border-transparent hover:border-[#D9D6CF] cursor-pointer"
                        >
                          <div className="flex items-center gap-1.5">
                            <span
                              className={`w-1.5 h-1.5 rounded-[1px] flex-shrink-0 ${getMarkerColor(
                                slot.color
                              )}`}
                            />
                            <span className="text-[11px] font-medium text-[#111111] leading-tight truncate">
                              {slot.modality}
                            </span>
                          </div>
                          {slot.ageRange && (
                            <span className="text-[10px] text-[#5A5A57] block pl-3 leading-tight truncate">
                              {slot.ageRange}
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sober Legend */}
      {showLegend && (
        <div className="mt-4 flex flex-wrap items-center justify-between text-xs text-[#5A5A57] pt-2 border-t border-[#D9D6CF] gap-4">
          <div className="flex items-center gap-5">
            <span className="font-medium text-[#111111]">Marcadores:</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[1px] bg-[#A3181A]" />
              <span>Jiu-Jitsu Gracie Barra</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[1px] bg-[#14284B]" />
              <span>Muay Thai & Boxe</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-[1px] bg-[#111111]" />
              <span>Krav Maga & Hapkido</span>
            </div>
          </div>
          <p className="text-[11px]">
            * Horários sujeitos à confirmação prévia na recepção.
          </p>
        </div>
      )}

      {/* Clean Modal for Quick Booking */}
      {selectedSlotForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
          <div className="w-full max-w-md bg-[#F7F6F3] border border-[#111111] p-6 rounded-[2px] shadow-xl text-[#111111]">
            <div className="flex items-start justify-between mb-4 border-b border-[#D9D6CF] pb-3">
              <div>
                <span className="text-xs text-[#5A5A57] uppercase tracking-wider block">
                  Agendamento de aula experimental
                </span>
                <h4 className="font-title text-2xl uppercase tracking-wide mt-1">
                  {selectedSlotForModal.modality}
                </h4>
              </div>
              <button
                type="button"
                onClick={() => setSelectedSlotForModal(null)}
                className="p-1 text-[#5A5A57] hover:text-[#111111]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-2 text-xs text-[#5A5A57] py-2">
              <p>
                <strong className="text-[#111111]">Dia:</strong> {selectedSlotForModal.day}
              </p>
              <p>
                <strong className="text-[#111111]">Horário:</strong> {selectedSlotForModal.time}
              </p>
              {selectedSlotForModal.ageRange && (
                <p>
                  <strong className="text-[#111111]">Faixa etária:</strong> {selectedSlotForModal.ageRange}
                </p>
              )}
            </div>

            <div className="mt-6 flex flex-col gap-2">
              <a
                href={getWhatsAppLink(
                  `Olá. Gostaria de agendar uma aula experimental de ${selectedSlotForModal.modality} no dia de ${selectedSlotForModal.day} às ${selectedSlotForModal.time} na Gracie Barra Centro JF.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-[#A3181A] hover:bg-[#841315] text-white text-xs font-medium text-center rounded-[2px] transition-colors"
              >
                Confirmar no WhatsApp
              </a>
              <button
                type="button"
                onClick={() => setSelectedSlotForModal(null)}
                className="w-full py-2 text-xs text-[#5A5A57] hover:text-[#111111] text-center"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
