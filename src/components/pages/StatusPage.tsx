import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../../data/projectsData';
import { BuildBadge } from '../BuildBadge';
import { MdInsights as Activity, MdCheckCircleOutline as CheckCircle2, MdRefresh as RefreshCw, MdCallSplit as GitBranch, MdSecurity as ShieldAlert, MdAutoAwesome as Sparkles } from 'react-icons/md';

export const StatusPage: React.FC = () => {
  const projects = Object.values(PROJECTS_DATA);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
      className="space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8"
    >
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6"
      >
        <div>
          <div className="flex items-center gap-2 text-purple-400 text-xs font-semibold mb-2">
            <Activity className="w-4 h-4" />
            <span>play.isaiahthings.me/status</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            GitHub Commit Matrix
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
            Live build status badges, release checks, and workflow test runners for Leonardo's repositories.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-zinc-800/80 border border-zinc-700 p-4 rounded-2xl shrink-0">
          <div className="w-3 h-3 rounded-full bg-purple-500 animate-ping" />
          <div>
            <span className="block text-[10px] text-zinc-400 uppercase">Overall System Status</span>
            <span className="text-sm font-bold text-purple-400">All Pipelines Operational</span>
          </div>
        </div>
      </motion.div>

      {/* Grid of Status Cards */}
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 + idx * 0.1 }}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4 shadow-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div>
                <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {project.name}
                </h2>
                <p className="text-xs text-zinc-500">
                  {project.repo}
                </p>
              </div>

              <span className="text-xs text-purple-600 dark:text-purple-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>Build Passing</span>
              </span>
            </div>

            {/* Badges Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <BuildBadge repoFullName={project.repo} />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
