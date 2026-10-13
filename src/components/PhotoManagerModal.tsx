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
  Sparkles,
  MapPin,
  Building,
  MessageSquare,
  Shield,
  Loader2,
} from 'lucide-react';
import {
  PHOTO_SLOTS,
  PhotoCategory,
  useAllModalityPhotos,
  saveStoredPhoto,
  removeStoredPhoto,
  resetAllStoredPhotos,
  compressImage,
} from '../utils/photoManager';

interface PhotoManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoManagerModal: React.FC<PhotoManagerModalProps> = ({ isOpen, onClose }) => {
  const customPhotos = useAllModalityPhotos();
  const [activeTab, setActiveTab] = useState<'upload' | 'instructions'>('upload');
  const [categoryFilter, setCategoryFilter] = useState<PhotoCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);
  const [processingSlug, setProcessingSlug] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleFileSelect = async (slug: string, file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Por favor, selecione um arquivo de imagem válido (.jpg, .png, .webp).');
      return;
    }

    try {
      setProcessingSlug(slug);
      // Automatically compress and resize to optimal web format
      const dataUrl = await compressImage(file, 1920, 0.88);
      saveStoredPhoto(slug, dataUrl);
      const slot = PHOTO_SLOTS.find((s) => s.slug === slug);
      setFeedbackMsg(`"${slot?.name || 'Foto'}" atualizada com sucesso no site!`);
      setTimeout(() => setFeedbackMsg(null), 3500);
    } catch (e) {
      console.error('Error processing photo:', e);
      alert('Erro ao processar imagem. Tente uma foto diferente.');
    } finally {
      setProcessingSlug(null);
    }
  };

  const handleDownloadTemplate = (slug: string, targetName: string) => {
    const slot = PHOTO_SLOTS.find((s) => s.slug === slug);
    const current = customPhotos[slug] || slot?.defaultSrc;
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
      slot.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      slot.targetFileName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const countForCategory = (cat: PhotoCategory) =>
    PHOTO_SLOTS.filter((s) => s.category === cat).length;

  const totalConfigured = Object.keys(customPhotos).length;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div
        className="bg-[#121214] border border-white/10 rounded-2xl w-full max-w-5xl max-h-[94vh] flex flex-col shadow-2xl overflow-hidden text-slate-100"
        role="dialog"
        aria-modal="true"
        aria-labelledby="photo-manager-title"
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-black/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gb-red/20 border border-gb-red/40 flex items-center justify-center text-gb-red shrink-0 shadow-sm">
              <Camera className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h2 id="photo-manager-title" className="text-base sm:text-xl font-bold text-white flex items-center gap-2 flex-wrap font-anton tracking-wide">
                GERENCIADOR DE FOTOS DO SITE
                <span className="text-[11px] font-sans font-semibold bg-gb-red text-white px-2.5 py-0.5 rounded-full shadow-sm">
                  {PHOTO_SLOTS.length} Fotos Presentes
                </span>
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Troque literalmente qualquer foto do site: Modalidades, Banners Heros, Estrutura, Depoimentos e Logo.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selector */}
        <div className="px-4 sm:px-6 pt-3 pb-0 border-b border-white/10 flex items-center justify-between bg-black/25 text-xs flex-wrap gap-2">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('upload')}
              className={`pb-3 px-3 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'upload'
                  ? 'border-gb-red text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Trocar Fotos Online ({totalConfigured}/{PHOTO_SLOTS.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('instructions')}
              className={`pb-3 px-3 font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'instructions'
                  ? 'border-gb-red text-white'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Nomes dos Arquivos na Pasta (/public/images/)</span>
            </button>
          </div>

          {totalConfigured > 0 && activeTab === 'upload' && (
            <button
              onClick={() => {
                if (confirm('Deseja remover todas as fotos personalizadas e restaurar as fotos originais do site?')) {
                  resetAllStoredPhotos();
                  setFeedbackMsg('Todas as fotos foram restauradas para os padrões originais!');
                  setTimeout(() => setFeedbackMsg(null), 3000);
                }
              }}
              className="text-xs text-slate-400 hover:text-red-400 flex items-center gap-1.5 pb-2 transition-colors cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>Restaurar todas as fotos padrão</span>
            </button>
          )}
        </div>

        {/* Notification Banner */}
        {feedbackMsg && (
          <div className="bg-emerald-950/90 border-b border-emerald-500/40 px-5 py-2.5 text-xs text-emerald-200 flex items-center gap-2 animate-fade-in">
            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
            <span className="font-medium">{feedbackMsg}</span>
          </div>
        )}

        {/* Content Body */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4">
          {activeTab === 'upload' ? (
            <div className="space-y-4">
              {/* Informative Instructions Alert */}
              <div className="bg-gradient-to-r from-blue-950/40 to-neutral-900 border border-blue-500/20 rounded-xl p-3.5 text-xs text-blue-200 flex items-start gap-3">
                <Info className="w-4 h-4 shrink-0 text-blue-400 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-semibold text-white">
                    Como trocar qualquer foto em segundos:
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Localize a foto desejada abaixo e clique em <strong>"Selecionar Foto"</strong>. O site redimensiona e otimiza a imagem automaticamente, atualizando o site na mesma hora tanto no celular quanto no computador!
                  </p>
                </div>
              </div>

              {/* Category Filter Pills & Search */}
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 pt-1">
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1.5 md:pb-0 scrollbar-none">
                  <button
                    onClick={() => setCategoryFilter('all')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      categoryFilter === 'all'
                        ? 'bg-gb-red text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Todas ({PHOTO_SLOTS.length})</span>
                  </button>

                  <button
                    onClick={() => setCategoryFilter('jiu-jitsu')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      categoryFilter === 'jiu-jitsu'
                        ? 'bg-gb-red text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    🥋 Jiu-Jitsu GB ({countForCategory('jiu-jitsu')})
                  </button>

                  <button
                    onClick={() => setCategoryFilter('outras')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      categoryFilter === 'outras'
                        ? 'bg-gb-red text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    🥊 Outras Modalidades ({countForCategory('outras')})
                  </button>

                  <button
                    onClick={() => setCategoryFilter('banners')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      categoryFilter === 'banners'
                        ? 'bg-gb-red text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    🖼️ Banners & Capas ({countForCategory('banners')})
                  </button>

                  <button
                    onClick={() => setCategoryFilter('estrutura')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      categoryFilter === 'estrutura'
                        ? 'bg-gb-red text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    🏢 Estrutura ({countForCategory('estrutura')})
                  </button>

                  <button
                    onClick={() => setCategoryFilter('depoimentos')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      categoryFilter === 'depoimentos'
                        ? 'bg-gb-red text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    ⭐ Depoimentos ({countForCategory('depoimentos')})
                  </button>

                  <button
                    onClick={() => setCategoryFilter('identidade')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap cursor-pointer ${
                      categoryFilter === 'identidade'
                        ? 'bg-gb-red text-white shadow-md'
                        : 'bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    🔺 Logo Oficial ({countForCategory('identidade')})
                  </button>
                </div>

                <div className="relative w-full md:w-64 shrink-0">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filtrar foto ou página..."
                    className="w-full bg-black/50 border border-white/15 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gb-red transition-colors"
                  />
                </div>
              </div>

              {/* Grid of Slots */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredSlots.map((slot) => {
                  const hasCustom = Boolean(customPhotos[slot.slug]);
                  const currentImgSrc = customPhotos[slot.slug] || slot.defaultSrc;
                  const inputId = `file-input-${slot.slug.replace(/[^a-zA-Z0-9_-]/g, '')}`;
                  const isProcessing = processingSlug === slot.slug;

                  return (
                    <div
                      key={slot.slug}
                      className={`border rounded-xl p-4 flex flex-col justify-between transition-all ${
                        hasCustom
                          ? 'border-emerald-500/50 bg-emerald-950/15 shadow-sm'
                          : 'border-white/10 bg-white/[0.02] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        {/* Thumbnail Preview */}
                        <div className="relative w-28 h-24 rounded-lg overflow-hidden bg-black/60 shrink-0 border border-white/10 flex items-center justify-center">
                          {currentImgSrc ? (
                            <img
                              src={currentImgSrc}
                              alt={slot.name}
                              className={`w-full h-full object-cover transition-transform hover:scale-105 duration-300 ${
                                slot.category === 'identidade' ? 'object-contain p-2' : ''
                              }`}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-500">
                              <Camera className="w-6 h-6" />
                            </div>
                          )}

                          {hasCustom ? (
                            <div className="absolute top-1 right-1 bg-emerald-500 text-black text-[9px] font-bold px-1.5 py-0.5 rounded shadow">
                              NO AR
                            </div>
                          ) : (
                            <div className="absolute top-1 right-1 bg-black/70 text-slate-300 text-[9px] font-medium px-1.5 py-0.5 rounded border border-white/10">
                              PADRÃO
                            </div>
                          )}

                          {isProcessing && (
                            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                              <Loader2 className="w-5 h-5 text-white animate-spin" />
                            </div>
                          )}
                        </div>

                        {/* Metadata Details */}
                        <div className="flex-1 min-w-0 space-y-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="font-anton text-sm tracking-wider text-white">
                              {slot.name}
                            </span>
                            <span className="text-[10px] uppercase font-semibold px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                              {slot.categoryLabel}
                            </span>
                          </div>

                          <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                            {slot.description}
                          </p>

                          <div className="pt-1 text-[11px] text-slate-400 space-y-0.5">
                            <p className="truncate">
                              <strong className="text-slate-300">Onde aparece:</strong> {slot.location}
                            </p>
                            <p className="font-mono text-[10px] text-slate-400">
                              Arquivo: <span className="text-emerald-400">/public/images/{slot.targetFileName}</span>
                            </p>
                            <p className="text-[10px] text-slate-500">
                              Tamanho sugerido: {slot.recommendedSize}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="mt-3.5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                        <input
                          id={inputId}
                          type="file"
                          accept="image/*"
                          className="hidden"
                          disabled={isProcessing}
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileSelect(slot.slug, file);
                            e.target.value = '';
                          }}
                        />

                        <label
                          htmlFor={inputId}
                          className="cursor-pointer bg-gb-red hover:bg-gb-red-dark text-white text-xs font-semibold px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors shadow-sm"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          <span>{hasCustom ? 'Trocar Foto' : 'Selecionar Foto'}</span>
                        </label>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => handleDownloadTemplate(slot.slug, slot.targetFileName)}
                            title="Baixar imagem atual para seu dispositivo"
                            className="text-xs text-slate-400 hover:text-white p-1.5 rounded-md hover:bg-white/10 transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                          </button>

                          {hasCustom && (
                            <button
                              onClick={() => {
                                removeStoredPhoto(slot.slug);
                                setFeedbackMsg(`Foto de "${slot.name}" restaurada para a original.`);
                                setTimeout(() => setFeedbackMsg(null), 3000);
                              }}
                              title="Restaurar para a foto padrão do site"
                              className="text-xs text-red-400 hover:text-red-300 p-1.5 rounded-md hover:bg-red-500/10 transition-colors"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {filteredSlots.length === 0 && (
                <div className="text-center py-12 text-slate-400 text-xs">
                  Nenhuma foto encontrada para a busca "{searchQuery}".
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300">
              <div className="bg-amber-950/30 border border-amber-500/20 rounded-xl p-4 text-amber-200 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white text-sm">
                    Como o site carrega e sincroniza todas as fotos?
                  </h3>
                  <p className="mt-1 text-slate-300 leading-relaxed">
                    Todas as 22 fotos do site possuem fallback inteligente. Ao selecionar uma imagem na aba <strong>"Trocar Fotos Online"</strong>, o site armazena localmente em alta resolução e exibe instantaneamente. Se preferir salvar os arquivos estáticos no repositório, basta colocar os arquivos na pasta <code className="bg-black/50 px-1.5 py-0.5 rounded text-amber-300 font-mono">/public/images/</code> com os nomes listados abaixo.
                  </p>
                </div>
              </div>

              {/* Categorized File Lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Turmas Jiu-Jitsu */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-gb-red block border-b border-white/10 pb-1.5 flex items-center gap-1.5">
                    <span>🥋 Turmas de Jiu-Jitsu GB (5)</span>
                  </span>
                  <ul className="space-y-1.5 font-mono text-xs">
                    <li className="text-slate-200">1. Pequenos Campeões: <span className="text-emerald-400">pequenos-campeoes.jpg</span></li>
                    <li className="text-slate-200">2. Jiu-Jitsu Kids: <span className="text-emerald-400">jiu-jitsu-kids.jpg</span></li>
                    <li className="text-slate-200">3. Jiu-Jitsu Juniores: <span className="text-emerald-400">jiu-jitsu-juniores.jpg</span></li>
                    <li className="text-slate-200">4. Jiu-Jitsu Adulto: <span className="text-emerald-400">jiu-jitsu-adulto.jpg</span></li>
                    <li className="text-slate-200">5. Jiu-Jitsu Feminino: <span className="text-emerald-400">jiu-jitsu-feminino.jpg</span></li>
                  </ul>
                </div>

                {/* Outras Modalidades */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block border-b border-white/10 pb-1.5 flex items-center gap-1.5">
                    <span>🥊 Outras Modalidades & Defesa (5)</span>
                  </span>
                  <ul className="space-y-1.5 font-mono text-xs">
                    <li className="text-slate-200">6. Muay Thai: <span className="text-emerald-400">muay-thai.jpg</span></li>
                    <li className="text-slate-200">7. Karatê Tradicional: <span className="text-emerald-400">karate.jpg</span></li>
                    <li className="text-slate-200">8. MMA: <span className="text-emerald-400">mma.jpg</span></li>
                    <li className="text-slate-200">9. Krav Maga: <span className="text-emerald-400">krav-maga.jpg</span></li>
                    <li className="text-slate-200">10. Hapkido: <span className="text-emerald-400">hapkido.jpg</span></li>
                  </ul>
                </div>

                {/* Banners & Capas */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block border-b border-white/10 pb-1.5 flex items-center gap-1.5">
                    <span>🖼️ Banners Principais & Capas (4)</span>
                  </span>
                  <ul className="space-y-1.5 font-mono text-xs">
                    <li className="text-slate-200">11. Hero da Home: <span className="text-emerald-400">hero-home.jpg</span></li>
                    <li className="text-slate-200">12. Capa de Horários: <span className="text-emerald-400">hero-horarios.jpg</span></li>
                    <li className="text-slate-200">13. Capa de Uniforme: <span className="text-emerald-400">hero-uniforme.jpg</span></li>
                    <li className="text-slate-200">14. Capa de Localização: <span className="text-emerald-400">hero-localizacao.jpg</span></li>
                  </ul>
                </div>

                {/* Estrutura & Depoimentos */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/10 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-purple-400 block border-b border-white/10 pb-1.5 flex items-center gap-1.5">
                    <span>🏢 Estrutura, Depoimentos & Logo (8)</span>
                  </span>
                  <ul className="space-y-1.5 font-mono text-xs">
                    <li className="text-slate-200">15. Tatame Oficial: <span className="text-emerald-400">estrutura-tatame.jpg</span></li>
                    <li className="text-slate-200">16. Vestiários: <span className="text-emerald-400">estrutura-vestiarios.jpg</span></li>
                    <li className="text-slate-200">17. Recepção/Convivência: <span className="text-emerald-400">estrutura-convivencia.jpg</span></li>
                    <li className="text-slate-200">18. Equipamentos Striking: <span className="text-emerald-400">estrutura-striking.jpg</span></li>
                    <li className="text-slate-200">19. Aluno Rodrigo: <span className="text-emerald-400">depoimento-rodrigo.jpg</span></li>
                    <li className="text-slate-200">20. Aluna Camila: <span className="text-emerald-400">depoimento-camila.jpg</span></li>
                    <li className="text-slate-200">21. Aluno/Pai Lucas: <span className="text-emerald-400">depoimento-lucas.jpg</span></li>
                    <li className="text-slate-200">22. Logo Oficial GB: <span className="text-emerald-400">logo-gb.png</span></li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10 bg-black/40 flex items-center justify-between">
          <span className="text-xs text-slate-400">
            {totalConfigured} de {PHOTO_SLOTS.length} fotos personalizadas no ar
          </span>
          <button
            onClick={onClose}
            className="bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
