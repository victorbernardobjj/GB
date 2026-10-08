import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Printer, Calendar, Clock, MessageCircle, Info, ChevronRight, Check } from 'lucide-react';
import {
  DAYS_OF_WEEK,
  TIMETABLE_SLOTS,
  SCHEDULE_FILTER_OPTIONS,
  DayOfWeek,
  TimetableSlot,
  ModalityCategory,
} from '../data/schedule';
import { getWhatsAppLink, GYM_INFO } from '../data/info';

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

  // Compute current day of week (0 = Dom, 1 = Seg, 2 = Ter, etc.)
  const currentDayIndex = new Date().getDay();
  const currentDayKey: DayOfWeek = useMemo(() => {
    const dayObj = DAYS_OF_WEEK.find((d) => d.index === currentDayIndex);
    return dayObj ? dayObj.key : 'Seg';
  }, [currentDayIndex]);

  const [activeMobileDay, setActiveMobileDay] = useState<DayOfWeek>(currentDayKey);
  const [selectedSlotForModal, setSelectedSlotForModal] = useState<TimetableSlot | null>(null);

  // If filterByModality prop changes
  useEffect(() => {
    if (filterByModality) {
      setSelectedFilter(filterByModality);
    }
  }, [filterByModality]);

  // Extract all distinct times sorted
  const sortedTimes = useMemo(() => {
    const timeSet = new Set<string>();
    TIMETABLE_SLOTS.forEach((slot) => timeSet.add(slot.time));
    return Array.from(timeSet).sort();
  }, []);

  // Filter slots
  const filteredSlots = useMemo(() => {
    return TIMETABLE_SLOTS.filter((slot) => {
      if (filterByModality) {
        return slot.category === filterByModality;
      }
      if (selectedFilter === 'all') return true;
      return slot.category === selectedFilter;
    });
  }, [selectedFilter, filterByModality]);

  // Quick lookup map: `${day}-${time}` => TimetableSlot[]
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

  // Slots for the active mobile day
  const mobileDaySlots = useMemo(() => {
    return filteredSlots
      .filter((slot) => slot.day === activeMobileDay)
      .sort((a, b) => a.time.localeCompare(b.time));
  }, [filteredSlots, activeMobileDay]);

  const handlePrint = () => {
    window.print();
  };

  const getSlotPillStyles = (slot: TimetableSlot) => {
    if (slot.accentPink) {
      return 'bg-gradient-to-r from-gb-red to-pink-600 text-white border-pink-400/40 shadow-sm shadow-pink-900/30';
    }
    if (slot.color === 'red') {
      return 'bg-gb-red text-white border-red-400/30 shadow-sm shadow-red-950/40';
    }
    if (slot.color === 'blue') {
      return 'bg-gb-blue text-white border-sky-400/30 shadow-sm shadow-blue-950/40';
    }
    // black
    return 'bg-neutral-900 text-slate-100 border-neutral-700 shadow-sm shadow-black';
  };

  return (
    <div className="w-full">
      {/* Header controls (Title, Filters, Print button) */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {title && (
          <div>
            <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase tracking-wider">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Clique em qualquer aula para agendar sua aula experimental no WhatsApp
            </p>
          </div>
        )}

        {/* Filter Chips */}
        {showFilters && !filterByModality && (
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none max-w-full">
            {SCHEDULE_FILTER_OPTIONS.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={() => setSelectedFilter(opt.id)}
                className={`text-xs px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  selectedFilter === opt.id
                    ? 'bg-gb-red text-white shadow-md shadow-red-950/50 scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
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
            onClick={handlePrint}
            className="no-print inline-flex items-center gap-2 self-start md:self-auto px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            title="Imprimir quadro de horários"
          >
            <Printer className="w-4 h-4 text-gb-red shrink-0" />
            <span className="whitespace-nowrap">Baixar / Imprimir PDF</span>
          </button>
        )}
      </div>

      {/* -------------------- MOBILE VIEW (Tabs by day) -------------------- */}
      <div className="block lg:hidden print:hidden">
        {/* Day selection tabs */}
        <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-none mb-4">
          {DAYS_OF_WEEK.map((day) => {
            const isToday = day.key === currentDayKey;
            const isSelected = day.key === activeMobileDay;
            const countForDay = filteredSlots.filter((s) => s.day === day.key).length;

            return (
              <button
                key={day.key}
                type="button"
                onClick={() => setActiveMobileDay(day.key)}
                className={`flex-1 min-w-[70px] py-2.5 px-2 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-gb-blue text-white shadow-lg shadow-blue-950/50 border border-sky-400/40'
                    : isToday
                    ? 'bg-white/10 text-white border border-gb-red/60'
                    : 'bg-white/5 text-slate-300 border border-white/10 hover:bg-white/10'
                }`}
              >
                {isToday && (
                  <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gb-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gb-red"></span>
                  </span>
                )}
                <span className="text-xs font-anton tracking-wider uppercase">{day.label}</span>
                <span className="text-[10px] opacity-75 mt-0.5">
                  {countForDay} {countForDay === 1 ? 'aula' : 'aulas'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Day List Cards */}
        <div className="space-y-3">
          {mobileDaySlots.length === 0 ? (
            <div className="text-center py-10 bg-white/5 rounded-2xl border border-white/10 text-slate-400 text-sm">
              <Calendar className="w-8 h-8 mx-auto mb-2 opacity-40 text-gb-red" />
              Nenhuma aula com o filtro selecionado para este dia.
            </div>
          ) : (
            mobileDaySlots.map((slot) => {
              const bookingMsg = `Olá! Quero agendar uma aula experimental de ${slot.modality} (${slot.day} às ${slot.time}) na GB Centro JF.`;

              return (
                <motion.div
                  key={slot.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`p-4 rounded-2xl border transition-all ${
                    slot.color === 'red'
                      ? 'bg-gradient-to-r from-red-950/40 to-neutral-900 border-red-600/30'
                      : slot.color === 'blue'
                      ? 'bg-gradient-to-r from-blue-950/40 to-neutral-900 border-blue-600/30'
                      : 'bg-gradient-to-r from-neutral-900 to-black border-neutral-700'
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 font-anton text-lg text-white tracking-wider">
                          <Clock className="w-4 h-4 text-gb-red" />
                          {slot.time} {slot.endTime ? `às ${slot.endTime}` : ''}
                        </span>
                      </div>

                      <h4 className="font-anton text-base text-white uppercase tracking-wider">
                        {slot.modality}
                      </h4>

                      {slot.ageRange && (
                        <p className="text-xs text-slate-400">Faixa etária: {slot.ageRange}</p>
                      )}
                      {slot.notes && (
                        <p className="text-xs text-amber-400/90 font-medium">{slot.notes}</p>
                      )}
                    </div>

                    <a
                      href={getWhatsAppLink(bookingMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gb-red text-white shadow-md shadow-red-950/60 hover:bg-gb-red-dark active:scale-95 transition-all"
                      aria-label={`Agendar aula experimental de ${slot.modality} às ${slot.time}`}
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>

      {/* -------------------- DESKTOP TABLE VIEW -------------------- */}
      <div className="hidden lg:block overflow-x-auto print:block print:w-full print-area">
        <div className="min-w-[860px] rounded-2xl overflow-hidden border border-white/15 bg-neutral-950 shadow-2xl">
          {/* Header row: Days of week */}
          <div className="grid grid-cols-8 bg-gb-blue border-b border-white/10 text-white font-anton text-sm sm:text-base tracking-wider uppercase text-center py-3.5">
            <div className="flex items-center justify-center text-xs text-sky-200 font-poppins font-semibold">
              HORÁRIO
            </div>
            {DAYS_OF_WEEK.map((day) => {
              const isToday = day.key === currentDayKey;
              return (
                <div
                  key={day.key}
                  className={`flex flex-col items-center justify-center relative py-1 ${
                    isToday ? 'bg-gb-red/90 text-white font-bold rounded-lg mx-1 shadow-md' : ''
                  }`}
                >
                  <span className="leading-tight">{day.label}</span>
                  {isToday && (
                    <span className="text-[10px] font-poppins font-normal text-white uppercase tracking-widest leading-none mt-0.5">
                      HOJE
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Time Rows */}
          <div className="divide-y divide-white/5">
            {sortedTimes.map((time) => {
              return (
                <div key={time} className="grid grid-cols-8 min-h-[58px] items-stretch text-xs">
                  {/* Time label column */}
                  <div className="flex items-center justify-center font-anton text-sm text-slate-300 tracking-wider bg-white/5 border-r border-white/5 px-2">
                    {time}
                  </div>

                  {/* 7 Days columns */}
                  {DAYS_OF_WEEK.map((day) => {
                    const isToday = day.key === currentDayKey;
                    const slots = slotMap.get(`${day.key}-${time}`) || [];

                    return (
                      <div
                        key={day.key}
                        className={`p-1.5 flex flex-col gap-1.5 justify-center border-r border-white/5 last:border-r-0 transition-colors ${
                          isToday
                            ? 'bg-gb-red/5 hover:bg-gb-red/10 border-gb-red/20'
                            : 'hover:bg-white/5'
                        }`}
                      >
                        {slots.map((slot) => {
                          const bookingMsg = `Olá! Quero agendar uma aula experimental de ${slot.modality} (${slot.day} às ${slot.time}) na Gracie Barra Centro JF.`;

                          return (
                            <motion.button
                              key={slot.id}
                              whileHover={{ scale: 1.04, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                              transition={{ duration: 0.2 }}
                              onClick={() => setSelectedSlotForModal(slot)}
                              className={`w-full p-2 rounded-xl text-left font-medium transition-all cursor-pointer border ${getSlotPillStyles(
                                slot
                              )} relative group`}
                              title={`Clique para agendar aula de ${slot.modality}`}
                            >
                              <div className="flex items-center justify-between gap-1 leading-tight">
                                <span className="font-anton tracking-wide text-xs truncate">
                                  {slot.modality}
                                </span>
                              </div>
                              {slot.ageRange && (
                                <span className="block text-[10px] opacity-80 leading-none mt-1">
                                  {slot.ageRange}
                                </span>
                              )}

                              {/* Tooltip on hover */}
                              <div className="hidden group-hover:flex absolute left-1/2 -bottom-9 -translate-x-1/2 z-30 bg-black/95 text-white text-[10px] py-1 px-2 rounded-md shadow-xl whitespace-nowrap border border-white/20 items-center gap-1 pointer-events-none">
                                <MessageCircle className="w-3 h-3 text-gb-red" />
                                <span>Agendar aula</span>
                              </div>
                            </motion.button>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Color Legend */}
      {showLegend && (
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-bold text-white uppercase tracking-wider">Legenda de Cores:</span>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-gb-red shadow-sm shadow-red-900" />
              <span>Jiu-Jitsu Gracie Barra</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-gb-red to-pink-500" />
              <span>Jiu-Jitsu Feminino</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-gb-blue shadow-sm shadow-blue-900" />
              <span>Muay Thai & Boxe</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-neutral-900 border border-neutral-600" />
              <span>Krav Maga & Hapkido</span>
            </div>
          </div>

          <div className="text-slate-400">
            * Horários sujeitos a confirmação de disponibilidade com a secretaria.
          </div>
        </div>
      )}

      {/* Modal for Slot Click (WhatsApp Quick Booking) */}
      <AnimatePresence>
        {selectedSlotForModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 15 }}
              className="w-full max-w-md bg-gb-blue-dark border border-white/20 rounded-3xl p-6 text-white shadow-2xl relative"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-bold text-gb-red tracking-wider">
                      Aula Experimental
                    </span>
                  </div>
                  <h4 className="font-anton text-2xl tracking-wide uppercase mt-1">
                    {selectedSlotForModal.modality}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedSlotForModal(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3 py-3 border-y border-white/10 text-sm text-slate-200">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gb-red" />
                  <span>
                    Dia: <strong>{selectedSlotForModal.day}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gb-red" />
                  <span>
                    Horário: <strong>{selectedSlotForModal.time}</strong>
                    {selectedSlotForModal.endTime ? ` às ${selectedSlotForModal.endTime}` : ''}
                  </span>
                </div>
                {selectedSlotForModal.ageRange && (
                  <p className="text-xs text-slate-400">
                    Faixa etária recomendada: {selectedSlotForModal.ageRange}
                  </p>
                )}
                {selectedSlotForModal.notes && (
                  <p className="text-xs text-amber-300 font-medium">
                    {selectedSlotForModal.notes}
                  </p>
                )}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={getWhatsAppLink(
                    `Olá! Gostaria de agendar minha aula experimental de ${selectedSlotForModal.modality} no dia de ${selectedSlotForModal.day} às ${selectedSlotForModal.time} na GB Centro JF.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-full bg-gb-red hover:bg-gb-red-dark text-white font-bold uppercase tracking-wider text-center text-sm shadow-xl glow-red flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Confirmar no WhatsApp</span>
                </a>

                <button
                  type="button"
                  onClick={() => setSelectedSlotForModal(null)}
                  className="w-full py-2.5 rounded-full text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Voltar ao quadro
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
