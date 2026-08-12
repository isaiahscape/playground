import React, { useState } from 'react';
import { ProjectId, FOSSProject } from '../../types';
import { PROJECTS_DATA } from '../../data/projectsData';
import { useGitHubRepo } from '../../hooks/useGitHubRepo';
import { BuildBadge } from '../BuildBadge';
import { ScreenshotGallery } from '../ScreenshotGallery';
import { MarkdownRenderer } from '../MarkdownRenderer';
import { MdStar as Star, MdDeviceHub as GitFork, MdTerminal as Terminal, MdMenuBook as Book, MdLayers as Layers, MdWallet as Wallet, MdCheckCircleOutline as CheckCircle2, MdContentCopy as Copy, MdCheck as Check, MdOpenInNew as ExternalLink, MdInsertDriveFile as FileText, MdImage as ImageIcon, MdInsights as Activity, MdDownload as Download, MdArrowBack as ArrowLeft, MdAutoAwesome as Sparkles, MdSecurity as Shield, MdAccessTime as Clock, MdMenuBook as BookOpen } from 'react-icons/md';
import { FaGithub as Github } from 'react-icons/fa';

interface ProjectDetailPageProps {
  projectId: ProjectId;
  onNavigate: (path: string) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ projectId, onNavigate }) => {
  const project: FOSSProject = PROJECTS_DATA[projectId] || PROJECTS_DATA.anchor;
  const { stats } = useGitHubRepo(project.repo);

  const [activeTab, setActiveTab] = useState<'readme' | 'screenshots' | 'ci' | 'install'>('readme');
  const [copiedClone, setCopiedClone] = useState(false);

  const handleCopyClone = () => {
    navigator.clipboard.writeText(project.cloneUrl);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  const getIcon = () => {
    switch (projectId) {
      case 'anchor': return <Wallet className="w-8 h-8 text-purple-500" />;
      case 'materialexp': return <Layers className="w-8 h-8 text-purple-500" />;
      case 'bedrock': return <Book className="w-8 h-8 text-purple-500" />;
      default: return <Terminal className="w-8 h-8 text-purple-500" />;
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* Back button */}
      <div>
        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-xl transition shadow-2xs"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to home</span>
        </button>
      </div>

      {/* Project Banner Header */}
      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-8 shadow-md relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center shrink-0 shadow-inner">
              {getIcon()}
            </div>

            <div>
              <div className="flex items-center gap-3 flex-wrap">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h1>
                <span className="text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 px-2 py-0.5 rounded-md">
                  {project.version}
                </span>
              </div>

              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                {project.repo}
              </p>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium mt-3 max-w-2xl leading-relaxed">
                {project.longDescription}
              </p>

              {/* Stats & License Pills */}
              <div className="flex items-center gap-2 flex-wrap mt-4 text-xs">
                <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <Star className="w-3.5 h-3.5 text-purple-500 fill-purple-500" />
                  <span>{stats.stars} Stars</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <GitFork className="w-3.5 h-3.5 text-zinc-400" />
                  <span>{stats.forks} Forks</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <Shield className="w-3.5 h-3.5 text-purple-500" />
                  <span>{project.license} License</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-zinc-700">
                  <Clock className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Updated {stats.lastUpdated}</span>
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            {project.wikiUrl && (
              <a
                href={project.wikiUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-4 py-2.5 rounded-xl text-xs transition border border-zinc-200 dark:border-zinc-700"
              >
                <BookOpen className="w-4 h-4" />
                <span>Wiki</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            )}

            {(project.id === 'materialexp' || project.id === 'bedrock') && (
              <button
                onClick={async () => {
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
                }}
                className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-500 text-white font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Latest Release</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </button>
            )}

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-bold px-4 py-2.5 rounded-xl text-xs transition shadow-xs"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
              <ExternalLink className="w-3 h-3 opacity-60" />
            </a>

            <button
              onClick={handleCopyClone}
              className="inline-flex items-center justify-center gap-2 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-700 transition"
            >
              {copiedClone ? <Check className="w-4 h-4 text-purple-500" /> : <Copy className="w-4 h-4" />}
              <span>{copiedClone ? 'Clone Command Copied' : 'git clone'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('readme')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition shrink-0 ${
            activeTab === 'readme'
              ? 'border-purple-500 text-purple-600 dark:text-purple-400'
              : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Features & Readme</span>
        </button>

        <button
          onClick={() => setActiveTab('screenshots')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition shrink-0 ${
            activeTab === 'screenshots'
              ? 'border-purple-500 text-purple-600 dark:text-purple-400'
              : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
          }`}
        >
          <ImageIcon className="w-4 h-4" />
          <span>Screenshots</span>
        </button>

        <button
          onClick={() => setActiveTab('ci')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition shrink-0 ${
            activeTab === 'ci'
              ? 'border-purple-500 text-purple-600 dark:text-purple-400'
              : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>Commit Matrix & Status</span>
        </button>

        <button
          onClick={() => setActiveTab('install')}
          className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition shrink-0 ${
            activeTab === 'install'
              ? 'border-purple-500 text-purple-600 dark:text-purple-400'
              : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100'
          }`}
        >
          <Download className="w-4 h-4" />
          <span>Installation</span>
        </button>
      </div>

      {/* Tab Content Panels */}

      {activeTab === 'readme' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 border-b border-zinc-100 dark:border-zinc-800 pb-3">
              README.md
            </h3>
            <MarkdownRenderer content={project.readmePreview} />
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4 h-fit">
            <h3 className="font-bold text-sm text-zinc-900 dark:text-zinc-100 border-b border-zinc-100 dark:border-zinc-800 pb-2">
              Key Features
            </h3>
            <ul className="space-y-2 text-xs text-zinc-600 dark:text-zinc-300">
              {project.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {activeTab === 'screenshots' && (
        <ScreenshotGallery selectedProjectId={projectId} />
      )}

      {activeTab === 'ci' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
            <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100">
              GitHub Actions CI/CD Build Badges
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <BuildBadge repoFullName={project.repo} />
            </div>
          </div>
        </div>
      )}

      {activeTab === 'install' && (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4 max-w-2xl">
          <h3 className="font-bold text-base text-zinc-900 dark:text-zinc-100 border-b border-zinc-100 dark:border-zinc-800 pb-3">
            Installation Commands
          </h3>
          {project.installation.git && (
            <div>
              <span className="block text-xs font-semibold text-zinc-500 mb-1">Git Clone</span>
              <pre className="bg-zinc-950 text-purple-400 p-3 rounded-xl text-xs border border-zinc-800">
                {project.installation.git}
              </pre>
            </div>
          )}
          {project.installation.npm && (
            <div>
              <span className="block text-xs font-semibold text-zinc-500 mb-1">npm Package</span>
              <pre className="bg-zinc-950 text-purple-400 p-3 rounded-xl text-xs border border-zinc-800">
                {project.installation.npm}
              </pre>
            </div>
          )}
          {project.installation.docker && (
            <div>
              <span className="block text-xs font-semibold text-zinc-500 mb-1">Docker Container</span>
              <pre className="bg-zinc-950 text-purple-400 p-3 rounded-xl text-xs border border-zinc-800">
                {project.installation.docker}
              </pre>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
