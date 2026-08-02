import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/projectsData';
import { ProjectCard } from '../ProjectCard';
import { BuildBadge } from '../BuildBadge';
import { DiscordButton } from '../DiscordButton';
import ColorBends from '../ColorBends';
import { MdTerminal as Terminal, MdLayers as Layers, MdWallet as Wallet, MdCode as Code2, MdAutoAwesome as Sparkles, MdCheckCircleOutline as CheckCircle2, MdVerifiedUser as MdVerifiedUser, MdInsights as Activity, MdSearch as Search, MdArrowForward as ArrowRight, MdDownload as Download, MdContentCopy as Copy, MdCheck as Check, MdImage as ImageIcon, MdGroups as Groups } from 'react-icons/md';
import { FaGithub as Github, FaDiscord as Discord } from 'react-icons/fa';

interface HomePageProps {
  onNavigate: (path: string) => void;
  isDark: boolean;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedCloneAll, setCopiedCloneAll] = useState(false);

  const projects = Object.values(PROJECTS_DATA);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.repo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const categories = ['All', 'Finance & Tools', 'Core Framework', 'UI & Design Systems'];

  return (
    <div className="space-y-12">
      
      {/* Hero Header Banner - Full Screen */}
      <section className="relative overflow-hidden bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white w-screen -ml-[50vw] left-1/2 min-h-[100svh] sm:min-h-screen flex items-center py-10 sm:py-16">
        <div className="absolute inset-0">
          <ColorBends
            colors={isDark ? ['#8B5CF6', '#7C3AED', '#6D28D9', '#A855F7', '#EC4899'] : ['#A78BFA', '#8B5CF6', '#7C3AED', '#C084FC', '#F0ABFC']}
            rotation={90}
            speed={0.5}
            frequency={1.0}
            warpStrength={1}
            mouseInfluence={1}
            parallax={0.5}
            noise={0.15}
            intensity={1.3}
            bandWidth={0.14}
            iterations={1}
            dotFieldColors={isDark
              ? ['rgba(168, 85, 247, 0.35)', 'rgba(180, 151, 207, 0.25)']
              : ['rgba(168, 85, 247, 0.30)', 'rgba(180, 151, 207, 0.20)']
            }
            className="w-full h-full"
          />
          <div className={`absolute inset-0 ${isDark ? 'bg-black/40' : 'bg-white/30'}`} />
        </div>
        {/* Top progressive blur to blend with navbar above */}
        <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none">
          <div className="absolute inset-0 backdrop-blur-md [mask-image:linear-gradient(to_top,transparent,black_60%)] bg-gradient-to-t from-transparent to-zinc-50 dark:to-black" />
        </div>
        {/* Bottom progressive blur to blend into page content on scroll */}
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none">
          <div className="absolute inset-0 backdrop-blur-md [mask-image:linear-gradient(to_bottom,transparent,black_60%)] bg-gradient-to-b from-transparent to-zinc-50 dark:to-black" />
        </div>
        <div className="relative z-10 max-w-3xl space-y-5 px-4 sm:px-6 lg:px-8 mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-xs font-mono font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Status</span>
            <span className="opacity-50">•</span>
            <span>Active</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            Leonardo's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 dark:from-purple-400 dark:via-purple-300 dark:to-purple-400">Playground</span>
          </h1>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-sans">
            Independent, free and open-source applications built by Isaiah. Featuring Bedrock, Material Explorer, and Anchor budget & expense tracker.
          </p>

          {/* Quick Hero Actions */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onNavigate('/anchor')}
              className="inline-flex items-center gap-2 bg-purple-500 hover:bg-purple-400 text-white dark:text-zinc-950 font-bold px-5 py-2.5 rounded-xl text-xs transition shadow-lg"
            >
              <Wallet className="w-4 h-4" />
              <span>Anchor: Expense Tracker (Coming Soon)</span>
            </button>

            <button
              onClick={() => onNavigate('/status')}
              className="inline-flex items-center gap-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-semibold px-4 py-2.5 rounded-xl text-xs transition border border-zinc-300 dark:border-zinc-700"
            >
              <Activity className="w-4 h-4 text-purple-500 dark:text-purple-400" />
              <span>Commit Matrix</span>
            </button>

            <button
              onClick={() => onNavigate('/screenshots')}
              className="inline-flex items-center gap-2 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 font-semibold px-4 py-2.5 rounded-xl text-xs transition border border-zinc-300 dark:border-zinc-700"
            >
              <ImageIcon className="w-4 h-4 text-purple-500 dark:text-purple-400" />
              <span>Screenshots & Gallery</span>
            </button>
          </div>

        </div>
      </section>

      {/* All Projects Section Header & Filters */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
              FOSS Projects & Repositories
            </h2>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Select a project card below to view detailed README previews, build badges, and screenshots.
            </p>
          </div>

          {/* Search */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-2.5" />
              <input
                type="text"
                placeholder="Filter repositories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl pl-8 pr-3 py-1.5 text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onNavigate={onNavigate} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-8">
            <Code2 className="w-10 h-10 text-zinc-400 mx-auto mb-2" />
            <h3 className="font-bold text-zinc-900 dark:text-zinc-100">No projects match your filter</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">Try clearing your search query.</p>
          </div>
        )}
      </section>

      {/* Discord Community Section */}
      <section className="space-y-6 pt-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Discord className="w-5 h-5 text-[#8B5CF6]" />
              <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                Discord Communities
              </h2>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
              Join the community servers to discuss projects, get support, and stay updated.
            </p>
          </div>
          <button
            onClick={() => onNavigate('/contacts')}
            className="inline-flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-3 py-2 rounded-xl text-xs transition border border-zinc-200 dark:border-zinc-700/60 shrink-0"
          >
            <Groups className="w-3.5 h-3.5 text-purple-400" />
            <span>All Contacts</span>
          </button>
        </div>

        {/* Discord Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* [SN] Anomaly */}
          <div className="bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-[#8B5CF6]/50 transition-all duration-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center shrink-0">
                  <Discord className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    [SN] Anomaly
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                    discord.gg/Y3mjXM9NvK
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Join the [SN] Anomaly community server for discussions, updates, and community support.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <DiscordButton
                href="https://discord.gg/Y3mjXM9NvK"
                label="Join Server"
                className="w-full justify-center"
              />
            </div>
          </div>

          {/* Moss Laboratories Community */}
          <div className="bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-[#8B5CF6]/50 transition-all duration-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 flex items-center justify-center shrink-0">
                  <Discord className="w-6 h-6 text-[#8B5CF6]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
                    Moss Laboratories Community
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                    discord.gg/GcMssBpa6A
                  </p>
                </div>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Join the Moss Laboratories Community server for collaboration, development discussions, and project updates.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-800/80">
              <DiscordButton
                href="https://discord.gg/GcMssBpa6A"
                label="Join Server"
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Domain notice bar */}
      <section className="bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <MdVerifiedUser className="w-5 h-5 text-purple-500" />
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              Canonical Location
            </h3>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            All apps, screenshots, release artifacts, and build badges are automatically updated from the GitHub organization.
          </p>
        </div>

        <a
          href="https://github.com/isaiahscape"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs px-4 py-2.5 rounded-xl transition shadow-xs shrink-0"
        >
          <Github className="w-4 h-4" />
          <span>Follow isaiahscape on GitHub</span>
        </a>
      </section>

    </div>
  );
};