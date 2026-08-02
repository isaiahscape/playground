import React from 'react';
import { MdInfo as Info, MdSecurity as Shield, MdCode as Code, MdFavorite as Heart, MdTerminal as Terminal, MdCheckCircleOutline as CheckCircle2 } from 'react-icons/md';
import { FaGithub as Github } from 'react-icons/fa';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      
      {/* Header */}
      <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl">
        <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold mb-2">
          <Info className="w-4 h-4" />
          <span>play.isaiahthings.me/about</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight">
          Isaiah's FOSS Manifesto
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Free and Open Source Software - Anchor, Bedrock, and Material Explorer.
        </p>
      </div>

      {/* Content cards */}
      <div className="space-y-6">
        
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-500" />
            1. Privacy & Zero Telemetry
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Every application hosted on <code className="font-mono text-purple-600 dark:text-purple-400 font-bold">play.isaiahthings.me</code> is designed with strict respect for user privacy. Anchor, Bedrock, and Material Explorer operate entirely client-side or offline-first, storing user and configuration data locally without background tracking or sellable analytics.
          </p>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono flex items-center gap-2">
            <Code className="w-5 h-5 text-purple-500" />
            2. Open Licenses & Community
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            All three codebases are published on GitHub under permissive and copyleft FOSS licenses:
          </p>
          <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300 font-mono pl-4">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" />
              <span>isaiahscape/anchor — GNU GPLv3</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" />
              <span>isaiahscape/bedrock — Apache 2.0 License</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" />
              <span>isaiahscape/materialexp — Self MIT License (github.com/isaiahscape/materialexp/license)</span>
            </li>
          </ul>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs">
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono flex items-center gap-2">
            <Github className="w-5 h-5 text-purple-500" />
            3. How to Contribute
          </h2>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Contributions, bug reports, feature requests, and pull requests are warmly welcomed! Visit the GitHub organization at <a href="https://github.com/isaiahscape" target="_blank" rel="noopener noreferrer" className="text-purple-600 dark:text-purple-400 font-mono underline font-semibold">github.com/isaiahscape</a> to open issues or submit code.
          </p>
        </div>

      </div>

    </div>
  );
};
