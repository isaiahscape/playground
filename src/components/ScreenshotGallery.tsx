import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Screenshot, ProjectId } from '../types';
import { PROJECTS_DATA } from '../data/projectsData';
import { MdUpload as MdUpload, MdDelete as MdDelete, MdFullscreen as MdFullscreen, MdClose as MdClose, MdImage as ImageIcon, MdAdd as MdAdd, MdAutoAwesome as Sparkles, MdLayers as Layers, MdTerminal as Terminal, MdWallet as Wallet, MdCheckCircleOutline as CheckCircle2 } from 'react-icons/md';

interface ScreenshotGalleryProps {
  selectedProjectId?: ProjectId | 'all';
}

export const ScreenshotGallery: React.FC<ScreenshotGalleryProps> = ({ selectedProjectId = 'all' }) => {
  const [activeTab, setActiveTab] = useState<ProjectId | 'all'>(selectedProjectId);
  const [userScreenshots, setUserScreenshots] = useState<Screenshot[]>(() => {
    const saved = localStorage.getItem('isaiah_user_screenshots');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });

  const [activeLightbox, setActiveLightbox] = useState<Screenshot | null>(null);
  const [uploadTitle, setMdUploadTitle] = useState('');
  const [uploadCaption, setMdUploadCaption] = useState('');
  const [uploadTargetProject, setMdUploadTargetProject] = useState<ProjectId>('anchor');
  const [uploadPreview, setMdUploadPreview] = useState<string | null>(null);
  const [showMdUploadModal, setShowMdUploadModal] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  useEffect(() => {
    localStorage.setItem('isaiah_user_screenshots', JSON.stringify(userScreenshots));
  }, [userScreenshots]);

  // Combine default screenshots with user uploaded screenshots
  const allScreenshots: Screenshot[] = [
    ...Object.values(PROJECTS_DATA).flatMap((p) => p.defaultScreenshots),
    ...userScreenshots,
  ];

  const filteredScreenshots = activeTab === 'all' 
    ? allScreenshots 
    : allScreenshots.filter((s) => s.projectId === activeTab);

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMdUploadPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddScreenshot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadPreview) return;

    const newSS: Screenshot = {
      id: `user-ss-${Date.now()}`,
      projectId: uploadTargetProject,
      title: uploadTitle.trim() || `${PROJECTS_DATA[uploadTargetProject].name} Screenshot`,
      caption: uploadCaption.trim() || 'User uploaded application preview screenshot.',
      url: uploadPreview,
      isUserUploaded: true,
      timestamp: new Date().toLocaleDateString(),
    };

    setUserScreenshots((prev) => [newSS, ...prev]);
    setShowMdUploadModal(false);
    setMdUploadTitle('');
    setMdUploadCaption('');
    setMdUploadPreview(null);

    setNotification(`Successfully added new screenshot for ${PROJECTS_DATA[uploadTargetProject].name}!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDeleteScreenshot = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setUserScreenshots((prev) => prev.filter((s) => s.id !== id));
    setNotification('Screenshot removed.');
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Toast notification */}
      {notification && (
        <div className="fixed bottom-5 right-5 z-50 bg-purple-600 text-white font-medium text-xs px-4 py-2.5 rounded-xl shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4" />
          <span>{notification}</span>
        </div>
      )}

      {/* Filter Tabs & MdUpload Trigger */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-3 shadow-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'all'
                ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            All Screenshots ({allScreenshots.length})
          </button>
          <button
            onClick={() => setActiveTab('anchor')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'anchor'
                ? 'bg-purple-600 text-white'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            <Wallet className="w-3.5 h-3.5" />
            <span>Anchor (Expense Tracker)</span>
          </button>
          <button
            onClick={() => setActiveTab('bedrock')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'bedrock'
                ? 'bg-purple-600 text-white'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Bedrock</span>
          </button>
          <button
            onClick={() => setActiveTab('materialexp')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition shrink-0 ${
              activeTab === 'materialexp'
                ? 'bg-purple-600 text-white'
                : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>MaterialExp</span>
          </button>
        </div>

        <button
          onClick={() => setShowMdUploadModal(true)}
          className="inline-flex items-center justify-center gap-1.5 bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2 rounded-xl transition shadow-xs shrink-0"
        >
          <MdAdd className="w-4 h-4" />
          <span>Add Custom Screenshot</span>
        </button>
      </div>

      {/* Screenshot Grid in Browser Device Frames */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredScreenshots.map((item) => {
          const project = PROJECTS_DATA[item.projectId];
          return (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-200 shadow-sm hover:shadow-lg cursor-pointer flex flex-col justify-between"
            >
              {/* Browser Header Chrome */}
              <div className="bg-zinc-100 dark:bg-black border-b border-zinc-200 dark:border-zinc-800/80 px-3 py-2 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-zinc-500 dark:text-zinc-400 truncate max-w-[200px]">
                    play.isaiahthings.me/{item.projectId}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {item.isUserUploaded && (
                    <span className="text-[10px] font-bold bg-purple-500/10 text-purple-600 dark:text-purple-400 px-1.5 py-0.5 rounded border border-purple-500/20">
                      User MdUploaded
                    </span>
                  )}
                  <span className="text-[10px] font-semibold uppercase bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded">
                    {project?.name}
                  </span>
                </div>
              </div>

              {/* Image Canvas Container */}
              <div className="relative aspect-video bg-zinc-950 overflow-hidden flex items-center justify-center">
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <span className="bg-white/90 text-zinc-900 font-semibold text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg">
                    <MdFullscreen className="w-3.5 h-3.5" /> Fullscreen Preview
                  </span>
                  {item.isUserUploaded && (
                    <button
                      onClick={(e) => handleDeleteScreenshot(item.id, e)}
                      className="bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs p-2 rounded-lg transition"
                      title="Delete uploaded screenshot"
                    >
                      <MdDelete className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Caption Footer */}
              <div className="p-4 bg-white dark:bg-zinc-900 border-t border-zinc-100 dark:border-zinc-800/80">
                <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 mb-1 flex items-center justify-between">
                  <span>{item.title}</span>
                </h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {filteredScreenshots.length === 0 && (
        <div className="text-center py-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
          <ImageIcon className="w-12 h-12 text-zinc-400 mx-auto mb-3" />
          <h3 className="font-bold text-zinc-900 dark:text-zinc-100 text-base">No screenshots uploaded for this category yet</h3>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md mx-auto mt-1 mb-4">
            MdUpload your screenshots for {activeTab !== 'all' ? PROJECTS_DATA[activeTab]?.name : 'your apps'} using the upload button above.
          </p>
          <button
            onClick={() => setShowMdUploadModal(true)}
            className="inline-flex items-center gap-1.5 bg-purple-600 text-white font-semibold text-xs px-4 py-2 rounded-xl"
          >
            <MdAdd className="w-4 h-4" /> MdUpload Screenshot
          </button>
        </div>
      )}

      {/* Upload Modal */}
      <AnimatePresence>
        {showMdUploadModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMdUploadModal(false)}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 font-mono flex items-center gap-2">
                  <MdUpload className="w-4 h-4 text-purple-500" />
                  <span>Upload Local Screenshot</span>
                </h3>
                <button 
                  onClick={() => setShowMdUploadModal(false)}
                  className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
                >
                  <MdClose className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddScreenshot} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                    Target FOSS Project
                  </label>
                  <select
                    value={uploadTargetProject}
                    onChange={(e) => setMdUploadTargetProject(e.target.value as ProjectId)}
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs font-mono text-zinc-900 dark:text-zinc-100"
                  >
                    <option value="anchor">Anchor: Budget & Expense Tracker</option>
                    <option value="bedrock">Bedrock: Offline-First Knowledge Engine</option>
                    <option value="materialexp">Material Explorer: Android Jetpack Previewer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                    Title / Feature Name
                  </label>
                  <input
                    type="text"
                    required
                    value={uploadTitle}
                    onChange={(e) => setMdUploadTitle(e.target.value)}
                    placeholder="e.g., Transactions Dashboard"
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                    Caption / Summary
                  </label>
                  <textarea
                    rows={2}
                    value={uploadCaption}
                    onChange={(e) => setMdUploadCaption(e.target.value)}
                    placeholder="Short description of the UI layout..."
                    className="w-full bg-zinc-50 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-900 dark:text-zinc-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-1">
                    Image File (PNG / JPG)
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleImageFileChange}
                    className="w-full text-xs text-zinc-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-semibold file:bg-purple-500/10 file:text-purple-600 hover:file:bg-purple-500/20"
                  />
                </div>

                {uploadPreview && (
                  <div className="aspect-video bg-zinc-950 rounded-xl overflow-hidden border border-zinc-700">
                    <img src={uploadPreview} alt="MdUpload preview" className="w-full h-full object-cover" />
                  </div>
                )}

                <div className="pt-3 flex justify-end gap-2 border-t border-zinc-200 dark:border-zinc-800">
                  <button
                    type="button"
                    onClick={() => setShowMdUploadModal(false)}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!uploadPreview}
                    className="px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 disabled:opacity-50"
                  >
                    Save Screenshot
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-5xl w-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="bg-zinc-950 p-3 px-4 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-300 font-mono">
                <span className="font-bold text-purple-400">{activeLightbox.title}</span>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="p-1 hover:bg-zinc-800 rounded text-zinc-400 hover:text-white"
                >
                  <MdClose className="w-5 h-5" />
                </button>
              </div>
              <div className="p-2 max-h-[75vh] flex items-center justify-center bg-black">
                <img
                  src={activeLightbox.url}
                  alt={activeLightbox.title}
                  className="max-h-[70vh] object-contain rounded-lg"
                />
              </div>
              <div className="p-4 bg-zinc-900 border-t border-zinc-800 text-xs text-zinc-400">
                <p className="font-medium text-zinc-200">{activeLightbox.caption}</p>
                <span className="text-[10px] text-zinc-500 font-mono mt-1 block">
                  Project: {PROJECTS_DATA[activeLightbox.projectId]?.name}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
