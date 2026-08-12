import React from 'react';
import { useGitHubCommit } from '../hooks/useGitHubCommit';
import { MdAccessTime as Clock, MdCallSplit as GitBranch, MdCommit as GitCommit, MdCode } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';

interface CommitBadgeProps {
  repoFullName: string;
  compact?: boolean;
}

export const BuildBadge: React.FC<CommitBadgeProps> = ({ repoFullName, compact = false }) => {
  const { commit, loading } = useGitHubCommit(repoFullName);

  if (compact) {
    return (
      <div 
        className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[11px] border transition bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700`}
        title={loading ? 'Loading...' : `Latest commit on ${commit?.branch}`}
      >
        <FaGithub className="w-3 h-3 text-zinc-500" />
        {loading ? (
          <span className="animate-pulse">Loading...</span>
        ) : (
          <>
            <span className="font-semibold">{commit?.hash}</span>
            <span className="opacity-50">•</span>
            <span>{commit?.date}</span>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-3 hover:border-zinc-300 dark:hover:border-zinc-700 transition shadow-2xs group flex flex-col h-full">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <FaGithub className="w-4 h-4 text-zinc-700 dark:text-zinc-300 shrink-0" />
          <span className="font-semibold text-xs text-zinc-900 dark:text-zinc-100">Latest Commit</span>
        </div>
        {!loading && (
          <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20 truncate max-w-[120px]">
            {commit?.branch}
          </span>
        )}
      </div>
      
      <div className="my-2 flex-grow flex flex-col justify-center">
        {loading ? (
           <div className="animate-pulse flex items-center space-x-2">
             <div className="h-4 bg-zinc-200 dark:bg-zinc-700 rounded w-3/4"></div>
           </div>
        ) : (
          <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 italic">
            "{commit?.message}"
          </p>
        )}
      </div>

      <div className="flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 mt-auto">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1" title="Branch">
            <GitBranch className="w-3 h-3 text-zinc-400" />
            {loading ? '...' : commit?.branch}
          </span>
          <span className="flex items-center gap-1" title="Commit Hash">
            <GitCommit className="w-3 h-3 text-zinc-400" />
            {loading ? '......' : commit?.hash}
          </span>
        </div>
        <span className="flex items-center gap-1" title="Time of changes">
          <Clock className="w-3 h-3 text-zinc-400" />
          {loading ? '...' : commit?.date}
        </span>
      </div>
    </div>
  );
};
