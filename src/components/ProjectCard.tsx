import React, { useState } from 'react';
import { FOSSProject } from '../types';
import { useGitHubRepo } from '../hooks/useGitHubRepo';
import { BuildBadge } from './BuildBadge';
import { MdStar as Star, MdDeviceHub as GitFork, MdContentCopy as Copy, MdCheck as Check, MdOpenInNew as ExternalLink, MdTerminal as Terminal, MdMenuBook as Book, MdLayers as Layers, MdWallet as Wallet, MdAutoAwesome as Sparkles, MdArrowForward as ArrowRight, MdSecurity as Shield, MdLabel as MdLabel, MdImage as ImageIcon, MdDownload, MdMenuBook as BookOpen } from 'react-icons/md';
import { FaGithub as Github } from 'react-icons/fa';

interface ProjectCardProps {
  project: FOSSProject;
  onNavigate: (path: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onNavigate }) => {
  const { stats } = useGitHubRepo(project.repo);
  const [copiedClone, setCopiedClone] = useState(false);

  const getProjectIcon = () => {
    switch (project.id) {
      case 'anchor':
        return <Wallet className="w-6 h-6 text-purple-500" />;
      case 'materialexp':
        return <Layers className="w-6 h-6 text-purple-500" />;
      case 'bedrock':
        return <Book className="w-6 h-6 text-purple-500" />;
      default:
        return <Terminal className="w-6 h-6 text-purple-500" />;
    }
  };

  const handleCopyClone = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(project.cloneUrl);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div 
      onClick={() => onNavigate(`/${project.id}`)}
      className="group relative bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 dark:hover:border-purple-500/40 transition-all duration-200 shadow-sm hover:shadow-xl hover:shadow-purple-500/5 cursor-pointer flex flex-col justify-between"
    >
      <div>
        {/* Header: Title, Repo, Badges */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              {getProjectIcon()}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 font-mono tracking-tight group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {project.name}
                </h3>
                <span className="text-xs font-mono text-zinc-400 font-normal">
                  {project.version}
                </span>
              </div>
              <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                {project.repo}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 px-2.5 py-1 rounded-md">
              <Star className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />
              <span>{stats.stars}</span>
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-mono font-medium text-zinc-600 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/60 px-2 py-1 rounded-md">
              <GitFork className="w-3.5 h-3.5 text-zinc-400" />
              <span>{stats.forks}</span>
            </span>
          </div>
        </div>

        {/* MdLabelline & Description */}
        <p className="text-sm text-zinc-600 dark:text-zinc-300 font-medium mb-3">
          {project.tagline}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2 mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Shields / CI Build Status Badges Row */}
        <div className="flex items-center gap-2 flex-wrap mb-4">
          <BuildBadge repoFullName={project.repo} compact={true} />
          <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 dark:bg-zinc-800/80 px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-700/50">
            {project.license}
          </span>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex items-center gap-1.5 flex-wrap mb-5">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-0.5 rounded-md border border-zinc-200/80 dark:border-zinc-700/40"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Footer Actions & Quick Clone command */}
      <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 space-y-3">
        {/* Clone command preview */}
        <div className="flex items-center justify-between bg-zinc-50 dark:bg-black/80 border border-zinc-200 dark:border-zinc-800/80 rounded-lg px-2.5 py-1.5 text-xs font-mono text-zinc-600 dark:text-zinc-400">
          <span className="truncate mr-2">git clone {project.cloneUrl}</span>
          <button
            onClick={handleCopyClone}
            className="p-1 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded transition text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 shrink-0"
            title="Copy Clone Command"
          >
            {copiedClone ? (
              <Check className="w-3.5 h-3.5 text-purple-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <button
            onClick={async (e) => {
              e.stopPropagation();
              if (project.id === 'materialexp' || project.id === 'bedrock') {
                try {
                  const res = await fetch(`https://api.github.com/repos/${project.repo}/releases/latest`);
                  const data = await res.json();
                  if (data.html_url) {
                    window.open(data.html_url, '_blank');
                  } else {
                    window.open(`${project.githubUrl}/releases/latest`, '_blank');
                  }
                } catch (err) {
                  window.open(`${project.githubUrl}/releases/latest`, '_blank');
                }
              } else {
                onNavigate(`/${project.id}`);
              }
            }}
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-white text-white dark:text-zinc-900 font-semibold px-3 py-2 rounded-xl text-xs transition shadow-xs"
          >
            <span>
              {project.id === 'materialexp' || project.id === 'bedrock' 
                ? 'Download' 
                : project.id === 'anchor' 
                  ? 'Explore Project (Coming Soon)' 
                  : 'Explore Project'}
            </span>
            {project.id === 'materialexp' || project.id === 'bedrock' ? (
              <MdDownload className="w-4 h-4" />
            ) : (
              <ArrowRight className="w-3.5 h-3.5" />
            )}
          </button>

          {project.wikiUrl && (
            <a
              href={project.wikiUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-3 py-2 rounded-xl text-xs transition border border-zinc-200 dark:border-zinc-700/60"
              title="View Wiki"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Wiki</span>
            </a>
          )}

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1.5 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-3 py-2 rounded-xl text-xs transition border border-zinc-200 dark:border-zinc-700/60"
            title="View on GitHub"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};
