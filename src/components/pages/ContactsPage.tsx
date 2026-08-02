import React from 'react';
import { MdMail as Mail, MdGroups as Groups } from 'react-icons/md';
import { FaGithub as Github, FaDiscord as Discord } from 'react-icons/fa';
import { DiscordButton } from '../DiscordButton';

export const ContactsPage: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto pt-8">
      
      {/* Header */}
      <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl">
        <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold mb-2">
          <Mail className="w-4 h-4" />
          <span>play.isaiahthings.me/contacts</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight">
          Contacts & Community
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1">
          Join the community, get support, and stay up to date with the latest FOSS releases.
        </p>
      </div>

      {/* Discord Communities */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Discord className="w-5 h-5 text-[#8B5CF6]" />
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono">
            Discord Communities
          </h2>
        </div>

        {/* [SN] Anomaly */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center shrink-0">
                <Discord className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono tracking-tight">
                  [SN] Anomaly
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                  discord.gg/Y3mjXM9NvK
                </p>
              </div>
            </div>
            <DiscordButton
              href="https://discord.gg/Y3mjXM9NvK"
              label="Join Server"
              size="sm"
            />
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Join the [SN] Anomaly community server for discussions, updates, and community support.
          </p>
        </div>

        {/* Moss Laboratories Community */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center shrink-0">
                <Discord className="w-6 h-6 text-[#8B5CF6]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono tracking-tight">
                  Moss Laboratories Community
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                  discord.gg/GcMssBpa6A
                </p>
              </div>
            </div>
            <DiscordButton
              href="https://discord.gg/GcMssBpa6A"
              label="Join Server"
              size="sm"
            />
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Join the Moss Laboratories Community server for collaboration, development discussions, and project updates.
          </p>
        </div>
      </div>

      {/* Other Contact Channels */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Groups className="w-5 h-5 text-purple-500" />
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono">
            Other Channels
          </h2>
        </div>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-3 shadow-xs">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center shrink-0">
                <Github className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 font-mono tracking-tight">
                  GitHub Organization
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                  github.com/isaiahscape
                </p>
              </div>
            </div>
            <a
              href="https://github.com/isaiahscape"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-zinc-900 dark:bg-zinc-100 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-900 font-semibold px-3 py-1.5 rounded-xl text-xs transition shadow-xs shrink-0"
            >
              <Github className="w-4 h-4" />
              <span>Visit</span>
            </a>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-300 leading-relaxed">
            Browse all open-source repositories, report issues, and contribute to the FOSS projects.
          </p>
        </div>
      </div>

    </div>
  );
};