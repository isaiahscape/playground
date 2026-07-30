export type ProjectId = 'bedrock' | 'materialexp' | 'anchor';


export interface Screenshot {
  id: string;
  projectId: ProjectId;
  title: string;
  caption: string;
  url: string;
  isUserUploaded?: boolean;
  timestamp?: string;
  aspectRatio?: '16/9' | '4/3' | '9/16';
}

export interface FOSSProject {
  id: ProjectId;
  name: string;
  repo: string; // e.g. "isaiahscape/bedrock"
  tagline: string;
  description: string;
  longDescription: string;
  category: 'Core Framework' | 'UI & Design Systems' | 'Finance & Tools' | 'Android Application';
  version: string;
  license: string;
  techStack: string[];
  githubUrl: string;
  cloneUrl: string;
  features: string[];
  defaultScreenshots: Screenshot[];
  readmePreview: string;
  installation: {
    npm?: string;
    git?: string;
    docker?: string;
  };
}

export interface GitHubRepoStats {
  stars: number;
  forks: number;
  openIssues: number;
  watchers: number;
  lastUpdated: string;
  defaultBranch: string;
  licenseName: string;
  languages: Record<string, number>;
  isFetching?: boolean;
  error?: string | null;
}

export type ThemeMode = 'light' | 'dark' | 'system';

export interface ExpenseItem {
  id: string;
  title: string;
  amount: number;
  category: 'Food' | 'Transport' | 'Housing' | 'Utilities' | 'Entertainment' | 'Software' | 'Other';
  date: string;
  type: 'expense' | 'income';
  notes?: string;
}

export interface CategoryBudget {
  category: string;
  budgetLimit: number;
}
