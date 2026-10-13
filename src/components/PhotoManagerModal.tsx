import React, { useState } from 'react';
import {
  X,
  Upload,
  CheckCircle2,
  Trash2,
  Camera,
  FolderOpen,
  AlertCircle,
  HelpCircle,
  Download,
  Info,
  Search,
  Layers,
} from 'lucide-react';
import {
  PHOTO_SLOTS,
  useAllModalityPhotos,
  saveStoredPhoto,
  removeStoredPhoto,
  resetAllStoredPhotos,
} from '../utils/photoManager';
import { MODALITIES } from '../data/modalities';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({ isOpen, onClose }) => {
  const customPhotos = useAllModalityPhotos();
  const [activeTab, setActiveTab] = useState<'upload' | 'instructions'>('upload');
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'jiu-jitsu' | 'outras'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileSelect = (slug: string, file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem válido (.jpg, .png, .webp).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        saveStoredPhoto(slug, dataUrl);
        setFeedbackMsg(`Foto atualizada com sucesso para esta modalidade!`);
        setTimeout(() => setFeedbackMsg(null), 3000);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDownloadTemplate = (slug: string, targetName: string) => {
    const current = customPhotos[slug];
    if (!current) return;
    const a = document.createElement('a');
    a.href = current;
    a.download = targetName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const filteredSlots = PHOTO_SLOTS.filter((slot) => {
    const matchesCategory =
      categoryFilter === 'all' || slot.category === categoryFilter;
    const matchesSearch =
      !searchQuery.trim() ||
      slot.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.targetFileName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const jiuJitsuCount = PHOTO_SLOTS.filter((s) => s.category === 'jiu-jitsu').length;
  const outrasCount = PHOTO_SLOTS.filter((s) => s.category === 'outras').length;
  const totalConfigured = Object.keys(customPhotos).length;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-[#141416] border border-white/10 rounded-2xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-manager-title"
      >
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gb-red/20 border border-gb-red/30 flex items-center justify-center text-gb-red">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 id="photo-manager-title" className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 flex-wrap">
                Gerenciador de Fotos Oficiais
                <span className="text-xs bg-gb-red/20 text-gb-red px-2.5 py-0.5 rounded-full font-semibold">
                  Todas as {PHOTO_SLOTS.length} Modalidades
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Selecione ou troque as fotos reais de cada turma (Jiu-Jitsu, Muay Thai, Karatê, MMA, Krav Maga e Hapkido).
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-5 pt-3 pb-0 border-b border-white/5 flex items-center justify-between bg-black/20 text-xs flex-wrap gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('upload')}
              className={`pb-2.5 px-3 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'upload'
                  ? 'border-gb-red text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              Enviar / Trocar Fotos ({totalConfigured}/{PHOTO_SLOTS.length})
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`pb-2.5 px-3 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'instructions'
                  ? 'border-gb-red text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              Nomes dos Arquivos na Pasta
            </button>
          </div>

          {totalConfigured > 0 && activeTab === 'upload' && (
            <button
              onClick={() => {
                if (confirm('Deseja remover todas as fotos personalizadas e restaurar as imagens padrão?')) {
                  resetAllStoredPhotos();
                }
              }}
              className="text-xs text-slate-400 hover:text-red-400 flex items-center gap-1.5 pb-2 transition-colors"
            >
              <Trash2 className="w-3 h-3" />
              Restaurar todas as fotos
            </button>
          )}
        </div>

        {/* Notification pill */}
        {feedbackMsg && (
          <div className="bg-emerald-950/80 border-b border-emerald-500/30 px-5 py-2 text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span>{feedbackMsg}</span>
          </div>
        )}

        {/* Body content */}
        <div className="p-5 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'upload' ? (
            <div className="space-y-4">
              {/* Informative banner */}
              <div className="bg-blue-950/30 border border-blue-500/20 rounded-xl p-3 text-xs text-blue-200 flex items-start gap-2.5">
                <Info className="w-4 h-4 shrink-0 text-blue-400 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Como funciona:</p>
                  <p className="text-slate-300">
                    Clique em <strong>"Selecionar Foto"</strong> na modalidade desejada. Ao escolher a imagem no celular ou computador, o site é atualizado <strong>instantaneamente</strong> na vitrine da Home e na página da modalidade.
                  </p>
                </div>
              </div>

              {/* Filter pills & search */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
                  <button
                    onClick={() => setCategoryFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                      categoryFilter === 'all'
                        ? 'bg-gb-red text-white shadow-sm'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    Todas ({PHOTO_SLOTS.length})
                  </button>
                  <button
                    onClick={() => setCategoryFilter('jiu-jitsu')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                      categoryFilter === 'jiu-jitsu'
                        ? 'bg-gb-red text-white shadow-sm'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    🥋 Jiu-Jitsu GB ({jiuJitsuCount})
                  </button>
                  <button
                    onClick={() => setCategoryFilter('outras')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap ${
                      categoryFilter === 'outras'
                        ? 'bg-gb-red text-white shadow-sm'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    🥊 Outras Modalidades ({outrasCount})
                  </button>
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filtrar modalidade..."
                    className="w-full bg-black/40 border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gb-red"
                  />
                </div>
              </div>

              {/* Grid of slots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSlots.map((slot) => {
                  const mod = MODALITIES.find((m) => m.slug === slot.slug);
                  const hasCustom = Boolean(customPhotos[slot.slug]);
                  const currentImgSrc = customPhotos[slot.slug] || mod?.fallbackHeroImage || mod?.heroImage;
                  const inputId = `file-input-${slot.slug.replace('/', '')}`;

                  return (
                    <div
                      key={slot.slug}
                      className={`border rounded-xl p-4 flex flex-col justify-between transition-all ${
                        hasCustom
                          ? 'border-emerald-500/40 bg-emerald-950/10'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        {/* Thumbnail preview */}
                        <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-black/60 shrink-0 border border-white/10">
                          {currentImgSrc ? (
                            <img
                              src={currentImgSrc}
                              alt={slot.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-500">
                              <Camera className="w-6 h-6" />
                            </div>
                          )}
                          {hasCustom && (
                            <div className="absolute top-1 right-1 bg-emerald-500 text-black text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
                              NO AR
                            </div>
                          )}
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-anton text-sm tracking-wider text-white">
                              {slot.name}
                            </span>
                            <span className="text-[10px] uppercase font-semibold px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                              {slot.categoryLabel}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                            {slot.description}
                          </p>
                          <div className="mt-2 text-[11px] text-slate-400 font-mono bg-black/40 px-2 py-0.5 rounded inline-block">
                            Arquivo: <span className="text-slate-200">/public/images/{slot.targetFileName}</span>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                        <input
                          id={inputId}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileSelect(slot.slug, file);
                            e.target.value = '';
                          }}
                        />

                        <label
                          htmlFor={inputId}
                          className="cursor-pointer bg-gb-red hover:bg-gb-red-hover text-white text-xs font-semibold px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          {hasCustom ? 'Trocar Foto' : 'Selecionar Foto'}
                        </label>

                        {hasCustom && (
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleDownloadTemplate(slot.slug, slot.targetFileName)}
                              title="Baixar imagem com nome correto para a pasta public/images/"
                              className="text-xs text-slate-400 hover:text-white p-2 rounded hover:bg-white/5 transition-colors"
                            >
                              <Download className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => removeStoredPhoto(slot.slug)}
                              title="Remover foto personalizada e voltar ao padrão"
                              className="text-xs text-red-400 hover:text-red-300 p-2 rounded hover:bg-red-500/10 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredSlots.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Nenhuma modalidade encontrada com o filtro "{searchQuery}".
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-4 text-amber-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">
                    Como o site localiza as fotos das modalidades?
                  </h3>
                  <p className="mt-1 text-slate-300 leading-relaxed">
                    O código do site está programado para verificar primeiro as fotos carregadas pelo gerenciador interativo (aba "Enviar / Trocar Fotos"). Se não houver upload, ele procura automaticamente os arquivos na pasta <code className="bg-black/40 px-1 py-0.5 rounded text-amber-300">/public/images/</code>. Caso o arquivo ainda não exista, mantém uma imagem profissional de proteção para o site nunca ficar quebrado.
                  </p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 space-y-3">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-gb-red" />
                  Opção A (Mais Prática): Use a aba "Enviar / Trocar Fotos"
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Basta clicar na primeira aba deste modal e escolher os arquivos salvos no seu computador ou celular. As fotos vão para o ar <strong>na mesma hora</strong> no site, sem precisar mexer em pastas ou linhas de código!
                </p>
              </div>

              <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4 space-y-3">
                <h4 className="font-bold text-white flex items-center gap-2">
                  <FolderOpen className="w-4 h-4 text-gb-red" />
                  Opção B: Salvar direto na pasta public/images/ do projeto
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  Se você tiver acesso à árvore de arquivos do projeto, basta arrastar as fotos para a pasta <code className="bg-black/50 px-1.5 py-0.5 rounded text-red-300 font-mono">public/images/</code> com os seguintes nomes oficiais:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  <div className="bg-black/40 p-3 rounded-lg border border-white/5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-gb-red block border-b border-white/10 pb-1">
                      🥋 Turmas de Jiu-Jitsu (5)
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs">
                      <li className="text-slate-200">Foto 1: <span className="text-emerald-400">pequenos-campeoes.jpg</span></li>
                      <li className="text-slate-200">Foto 2: <span className="text-emerald-400">jiu-jitsu-kids.jpg</span></li>
                      <li className="text-slate-200">Foto 3: <span className="text-emerald-400">jiu-jitsu-juniores.jpg</span></li>
                      <li className="text-slate-200">Foto 4: <span className="text-emerald-400">jiu-jitsu-adulto.jpg</span></li>
                      <li className="text-slate-200">Foto 5: <span className="text-emerald-400">jiu-jitsu-feminino.jpg</span></li>
                    </ul>
                  </div>

                  <div className="bg-black/40 p-3 rounded-lg border border-white/5 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-400 block border-b border-white/10 pb-1">
                      🥊 Outras Modalidades & Defesa (5)
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs">
                      <li className="text-slate-200">Foto 6: <span className="text-emerald-400">muay-thai.jpg</span></li>
                      <li className="text-slate-200">Foto 7: <span className="text-emerald-400">karate.jpg</span></li>
                      <li className="text-slate-200">Foto 8: <span className="text-emerald-400">mma.jpg</span></li>
                      <li className="text-slate-200">Foto 9: <span className="text-emerald-400">krav-maga.jpg</span></li>
                      <li className="text-slate-200">Foto 10: <span className="text-emerald-400">hapkido.jpg</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {totalConfigured} de {PHOTO_SLOTS.length} fotos personalizadas configuradas
          </span>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
