import { useState, useEffect } from 'react';

export interface CommitInfo {
  hash: string;
  branch: string;
  date: string;
  message: string;
}

export function useGitHubCommit(repoFullName: string) {
  const [commit, setCommit] = useState<CommitInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    async function fetchCommit() {
      try {
        const repoRes = await fetch(`https://api.github.com/repos/${repoFullName}`);
        if (!repoRes.ok) throw new Error('Repo fetch failed');
        const repoData = await repoRes.json();
        const branch = repoData.default_branch || 'main';

        const commitsRes = await fetch(`https://api.github.com/repos/${repoFullName}/commits/${branch}`);
        if (!commitsRes.ok) throw new Error('Commits fetch failed');
        const commitData = await commitsRes.json();

        if (isMounted) {
          const dateObj = new Date(commitData.commit.committer.date);
          
          // Calculate relative time (hours ago)
          const diffMs = Date.now() - dateObj.getTime();
          const diffHrs = Math.floor(diffMs / (1000 * 60 * 60));
          const diffDays = Math.floor(diffHrs / 24);
          
          let relativeTime = '';
          if (diffHrs < 1) relativeTime = 'Just now';
          else if (diffHrs < 24) relativeTime = `${diffHrs} hours ago`;
          else relativeTime = `${diffDays} days ago`;

          setCommit({
            hash: commitData.sha.substring(0, 6),
            branch: branch,
            date: relativeTime,
            message: commitData.commit.message
          });
        }
      } catch (e) {
        if (isMounted) {
          setCommit({
            hash: '000000',
            branch: 'main',
            date: 'Unknown',
            message: 'Failed to fetch commit'
          });
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }
    fetchCommit();
    return () => { isMounted = false; };
  }, [repoFullName]);

  return { commit, loading };
}
