import React, { useState, useEffect } from 'react';
import { MdSearch as Search, MdTerminal as Terminal, MdLayers as Layers, MdWallet as Wallet, MdCode as Code, MdCheck as Check, MdContentCopy as Copy, MdOpenInNew as ExternalLink, MdInsights as Activity, MdImage as Image, MdInfo as Info } from 'react-icons/md';
import { PROJECTS_DATA } from '../data/projectsData';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleSelect = (path: string) => {
    onNavigate(path);
    onClose();
  };

  const filteredProjects = Object.values(PROJECTS_DATA).filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.repo.toLowerCase().includes(query.toLowerCase()) ||
    p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-20 px-4 transition-opacity">
      <div 
        className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl shadow-2xl w-full max-w-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center border-b border-zinc-200 dark:border-zinc-800 px-3.5 py-3 gap-3">
          <Search className="w-4 h-4 text-zinc-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, repos, terminal commands, or pages..."
            className="w-full bg-transparent text-sm text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none font-mono"
            autoFocus
          />
          <kbd className="text-[10px] font-mono text-zinc-400 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-1.5 py-0.5 rounded">
            ESC
          </kbd>
        </div>

        {/* Results Body */}
        <div className="max-h-96 overflow-y-auto p-2 space-y-3">
          {/* FOSS Apps */}
          <div>
            <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Projects & Repositories ({filteredProjects.length})
            </div>
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => handleSelect(`/${project.id}`)}
                className="group flex items-center justify-between p-2.5 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 rounded-lg cursor-pointer transition"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xs">
                    {project.id === 'anchor' ? <Wallet className="w-4 h-4" /> : project.id === 'bedrock' ? <Terminal className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100">{project.name}</span>
                      <span className="text-[11px] font-mono text-zinc-400">{project.repo}</span>
                    </div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1">{project.tagline}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCopy(project.cloneUrl);
                    }}
                    className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-white"
                    title="Copy Git Clone command"
                  >
                    {copiedText === project.cloneUrl ? <Check className="w-3.5 h-3.5 text-red-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Page Links */}
          <div>
            <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
              Quick Shortcuts
            </div>
            <div
              onClick={() => handleSelect('/anchor')}
              className="flex items-center gap-2.5 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 rounded-lg cursor-pointer text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              <Wallet className="w-4 h-4 text-red-500" />
              <span>Anchor: Expense Tracker (Coming Soon)</span>
            </div>
            <div
              onClick={() => handleSelect('/status')}
              className="flex items-center gap-2.5 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 rounded-lg cursor-pointer text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              <Activity className="w-4 h-4 text-red-500" />
              <span>View Commit Status Matrix</span>
            </div>
            <div
              onClick={() => handleSelect('/about')}
              className="flex items-center gap-2.5 p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800/70 rounded-lg cursor-pointer text-xs font-medium text-zinc-700 dark:text-zinc-300"
            >
              <Info className="w-4 h-4 text-red-500" />
              <span>About Isaiah's Manifesto</span>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800 px-3 py-2 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <span>play.isaiahthings.me</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
};
