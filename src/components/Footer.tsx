import React, { useState } from 'react';
import { MdOpenInNew as ExternalLink, MdFavorite as Heart, MdContentCopy as Copy, MdCheck as Check, MdTerminal as Terminal, MdCode as Code2 } from 'react-icons/md';
import { FaGithub as Github } from 'react-icons/fa';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyDomain = () => {
    navigator.clipboard.writeText('https://play.isaiahthings.me');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="w-full bg-white dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/80 transition-colors py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-800/80">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-6 h-6 rounded-lg bg-red-500/10 text-red-600 dark:text-red-400 flex items-center justify-center font-bold text-xs">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-base text-zinc-900 dark:text-zinc-100 font-mono">
                isaiahscape
              </span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 max-w-md">
              Free & Open Source Applications built by Leonardo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyDomain}
              className="inline-flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-mono text-xs px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-800 transition"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-red-500" /> : <Copy className="w-3.5 h-3.5" />}
              <span>play.isaiahthings.me</span>
            </button>

            <a
              href="https://github.com/isaiahscape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold text-xs px-3.5 py-2 rounded-xl transition hover:opacity-90 shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Repositories Quick Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
          <div>
            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-[11px] font-mono mb-2">
              Featured Apps
            </h4>
            <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400">
              <li>
                <a href="#/anchor" className="hover:text-red-500 transition">
                  isaiahscape/anchor (Expense Tracker)
                </a>
              </li>
              <li>
                <a href="#/bedrock" className="hover:text-red-500 transition">
                  isaiahscape/bedrock (Notes)
                </a>
              </li>
              <li>
                <a href="#/materialexp" className="hover:text-red-500 transition">
                  isaiahscape/materialexp (Explorer)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-[11px] font-mono mb-2">
              Open Source Licenses
            </h4>
            <ul className="space-y-1.5 text-zinc-600 dark:text-zinc-400 font-mono text-[11px]">
              <li>GPL-3.0 License (Anchor)</li>
              <li>Apache-2.0 License (Bedrock)</li>
              <li>Self MIT License (Material Explorer)</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-zinc-900 dark:text-zinc-100 uppercase tracking-wider text-[11px] font-mono mb-2">
              Information
            </h4>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs leading-relaxed">
              Hosted on <code className="text-red-600 dark:text-red-400 font-mono font-bold">Vercel</code> with shenanigans, shadcn/UI components, and Github API integration.
            </p>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
          <p>© {new Date().getFullYear()} Isaiah (isaiahscape). All software licensed under open-source terms.</p>
          <div className="flex items-center gap-1 font-mono text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
            <span>for the FOSS community</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
