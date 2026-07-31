import { FOSSProject } from '../types';

export const PROJECTS_DATA: Record<string, FOSSProject> = {
  bedrock: {
    id: 'bedrock',
    name: 'Bedrock',
    repo: 'isaiahscape/bedrock',
    tagline: 'High-contrast, minimalist monochrome notes editor for Android',
    description: 'A high-contrast, minimalist monochrome notes editor for Android. Combines the lightweight feel of Google Keep with powerful Markdown support, structured scheduling, and local-first security.',
    longDescription: 'Bedrock is a high-contrast, minimalist monochrome notes editor for Android. Built with a focus on simplicity and distraction-free writing, it combines the lightweight feel of Google Keep with powerful Markdown support, structured scheduling, multi-note tabs, adaptive workspace, and local-first security.',
    category: 'Android Application',
    version: 'v1.0',
    license: 'Apache-2.0',
    techStack: ['Jetpack Compose', 'MVVM + Repository', 'Room Database', 'DataStore', 'Material 3 Adaptive', 'Coil', 'Kotlin Coroutines', 'Roborazzi', 'SHA-256'],
    githubUrl: 'https://github.com/isaiahscape/bedrock',
    wikiUrl: 'https://github.com/isaiahscape/bedrock/wiki',
    cloneUrl: 'https://github.com/isaiahscape/bedrock.git',
    features: [
      'Minimalist Design: A pure monochrome aesthetic using Material 3 with premium Pixel Launcher-style expansion animations',
      'Adaptive Workspace: Intelligent layout that scales from single-pane mobile to Two-pane Desktop/Tablet view with persistent sidebar',
      'Multi-Note Tabs: Open multiple notes simultaneously with a modern horizontal tab bar on desktops',
      'Floating Profile Hub: Central command center for identity, profile picture, and app-wide utilities',
      'In-Note Search: Find words or phrases instantly with live visual highlighting across all editor modes',
      'Versatile Editing Modes: Plain Notes, Markdown Editor with live preview, and Structured To-do Lists',
      'Rich Image Support: Insert images from gallery with resizable handles and reorderable move controls',
      'Universal Scheduler: Set Date & Time reminders with system notifications that deep-link to notes',
      'Safe Trash Bin: Notes moved to trash are kept for 30 days before automatic deletion',
      'Master Password Security: Full alphanumeric Master Password with local SHA-256 encryption',
      'Encrypted Backup Hub: Create secure local backups encrypted with your Master Password',
      'Developer Mode: Hidden in-app debugging tools activated via a secret 7-tap sequence',
      'Organization: Powerful tag-based categorization with searchable management dialog',
      'Backup & Restore: Export and import notes as JSON for cross-device synchronization'
    ],
    defaultScreenshots: [
      {
        id: 'bedrock-ss-1',
        projectId: 'bedrock',
        title: 'Monochrome Home Page',
        caption: 'A clean, high-contrast monochrome design with a persistent sidebar for notes and filters.',
        url: '/bedrock/screenshot-1.jpg',
        aspectRatio: '9/16'
      },
      {
        id: 'bedrock-ss-2',
        projectId: 'bedrock',
        title: 'Floating Profile Hub & Settings',
        caption: 'Central command center for identity, profile picture, and app-wide utilities with Material Expressive settings.',
        url: '/bedrock/screenshot-2.jpg',
        aspectRatio: '9/16'
      },
      {
        id: 'bedrock-ss-3',
        projectId: 'bedrock',
        title: 'Multi-Note Tabs & Adaptive Workspace',
        caption: 'Open multiple notes simultaneously with a modern horizontal tab bar on larger screens.',
        url: '/bedrock/screenshot-3.jpg',
        aspectRatio: '9/16'
      },
      {
        id: 'bedrock-ss-4',
        projectId: 'bedrock',
        title: 'Markdown Editor with Live Preview',
        caption: 'Dedicated environment with live preview, split-screen mode, and a swipeable formatting toolbar.',
        url: '/bedrock/screenshot-4.jpg',
        aspectRatio: '9/16'
      },
      {
        id: 'bedrock-ss-5',
        projectId: 'bedrock',
        title: 'Settings Page',
        caption: 'The doom, it is always the doom.',
        url: '/bedrock/screenshot-5.jpg',
        aspectRatio: '9/16'
      }
    ],
    readmePreview: `# Bedrock 📓

**Bedrock** is a high-contrast, minimalist monochrome notes editor for Android. Built with a focus on simplicity and distraction-free writing, it combines the lightweight feel of Google Keep with powerful Markdown support, structured scheduling, and local-first security.

## Features
- **Minimalist Design**: A pure monochrome aesthetic using Material 3, with premium Pixel Launcher-style expansion animations.
- **Adaptive Workspace**: Intelligent layout that scales from single-pane mobile to a Two-pane Desktop/Tablet view.
- **Multi-Note Tabs**: Open multiple notes simultaneously with a modern horizontal tab bar.
- **Floating Profile Hub**: Central command center for identity and app-wide utilities.
- **In-Note Search**: Find words or phrases instantly with live visual highlighting.
- **Versatile Editing Modes**: Plain Notes, Markdown Editor with live preview, and Structured To-do Lists.
- **Rich Image Support**: Insert images from gallery with resizable handles and reorderable controls.
- **Universal Scheduler**: Set Date & Time reminders with system notifications that deep-link to notes.
- **Safe Trash Bin**: Notes moved to trash are kept for 30 days before automatic deletion.
- **Master Password Security**: Full alphanumeric Master Password with local SHA-256 encryption.
- **Encrypted Backup Hub**: Create secure local backups encrypted with your Master Password.
- **Developer Mode**: Hidden in-app debugging tools activated via a secret 7-tap sequence.

## Tech Stack
- **UI**: Jetpack Compose (Material 3 Expressive)
- **Architecture**: MVVM + Repository Pattern
- **Persistence**: Room Database (SQLite v5) + DataStore
- **Adaptive Layout**: Material 3 Adaptive Layouts + WindowSizeClass
- **Image Loading**: Coil
- **Scheduling**: AlarmManager + BroadcastReceivers
- **Storage**: MediaStore API (Scoped Storage)
- **Security**: SHA-256 Hashing + XOR Content Obfuscation
- **Navigation**: Jetpack Navigation Compose with Shared Transitions
- **Asynchrony**: Kotlin Coroutines & Flow
- **Testing**: Robolectric & Roborazzi

## Getting Started
\`\`\`bash
git clone https://github.com/isaiahscape/bedrock.git
\`\`\`
- **Prerequisites**: Android Studio Ladybug+, Android SDK 35+, Java 17+
`,
    installation: {
      git: 'git clone https://github.com/isaiahscape/bedrock.git',
    }
  },

  materialexp: {
    id: 'materialexp',
    name: 'Overseer',
    repo: 'isaiahscape/materialexp',
    tagline: 'Modern, minimalist, and feature-packed Android file manager',
    description: 'Built using Jetpack Compose and Material Design 3. Designed for high productivity and intuitive interaction.',
    longDescription: 'Overseer is a modern, minimalist, and feature-packed Android file manager built using Jetpack Compose and Material Design 3. Designed for high productivity and intuitive interaction, it features multi-tab file browsing, dynamic view modes, storage analysis, built-in text/code editing, archive management, and responsive floating controls.',
    category: 'Android Application',
    version: 'v1.0.2',
    license: 'Self MIT (github.com/isaiahscape/materialexp/license)',
    techStack: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Kotlin Coroutines', 'Gradle'],
    githubUrl: 'https://github.com/isaiahscape/materialexp',
    cloneUrl: 'https://github.com/isaiahscape/materialexp.git',
    features: [
      'Full-Featured File Operations: Browse internal storage, create files/folders, copy, cut, paste, rename, batch-select, and safely send items to the Recycle Bin.',
      'Material Expressive UI: Clean floating navigation capsule with an interactive Expressive Speed Dial menu (+ expander) for fast actions.',
      'Storage Analyzer: Gain insight into storage distribution with interactive category breakdowns.',
      'Custom View Modes & Sorting: Toggle between Detailed List, Compact List, 2-Column Grid, and 3-Column Grid.',
      'Built-in Editor & Media Viewer: Directly view images and edit text or code files without leaving the application.',
      'Zip & Archive Tools: Compress files into .zip archives and inspect or extract compressed contents effortlessly.',
      'Bookmarks & Recycle Bin: Bookmark frequently accessed folders and restore accidentally deleted items.',
      'Automated CI/CD: Integrated GitHub Actions workflow for building both Debug and Release APKs automatically.'
    ],
    defaultScreenshots: [
      {
        id: 'materialexp-ss-1',
        projectId: 'materialexp',
        title: 'Overseer File List',
        caption: 'Browse internal storage with dynamic view modes.',
        url: '',
        aspectRatio: '9/16'
      },
      {
        id: 'materialexp-ss-2',
        projectId: 'materialexp',
        title: 'Storage Analyzer',
        caption: 'Gain insight into storage distribution with interactive category breakdowns.',
        url: '',
        aspectRatio: '9/16'
      }
    ],
    readmePreview: `# Material Explorer
> Modern, minimalist, and feature-packed Android file manager built using Jetpack Compose and Material Design 3.

\`\`\`bash
# Clone the repository
git clone https://github.com/isaiahscape/materialexp.git
\`\`\`

## Tech Stack & Architecture
- **Language**: Kotlin
- **UI Framework**: Jetpack Compose with Material Design 3 (androidx.compose.material3)
- **State & Architecture**: MVVM architecture utilizing ViewModel, Kotlin Coroutines, and StateFlow
- **Build System**: Gradle (Kotlin DSL - .gradle.kts)
`,
    installation: {
      git: 'git clone https://github.com/isaiahscape/materialexp.git'
    }
  },

  anchor: {
    id: 'anchor',
    name: 'Anchor',
    repo: 'isaiahscape/anchor',
    tagline: 'Privacy-focused personal budget & expense tracker app',
    description: 'A privacy-first, offline-capable budget and expense tracker application designed to keep your financial metrics clear, private, and anchored.',
    longDescription: 'Anchor is a modern open-source budget and expenditure management web application currently in active development (WIP). Designed with zero telemetry and 100% local data persistence (IndexedDB / localStorage), Anchor helps users log transactions, establish category limits, inspect spending trends, and export financial reports securely.',
    category: 'Finance & Tools',
    version: 'WIP',
    license: 'GPL-3.0',
    techStack: ['TypeScript', 'React', 'Recharts', 'IndexedDB', 'Tailwind CSS'],
    githubUrl: 'https://github.com/isaiahscape/anchor',
    cloneUrl: 'https://github.com/isaiahscape/anchor.git',
    features: [
      'Interactive Expense & Income Logging with quick category tags',
      'Category Budget Allocations with remaining balance warnings',
      'Visual Expenditure Analytics (spending charts, monthly trends, breakdown pie)',
      '100% Local-first data privacy — no accounts or external tracking servers required',
      'CSV / JSON data backup, import & export capabilities'
    ],
    defaultScreenshots: [
      {
        id: 'anchor-ss-1',
        projectId: 'anchor',
        title: 'Anchor Budget Dashboard Overview',
        caption: 'Interactive expenditure summary displaying monthly spending, category budget progress bars, and recent transaction log.',
        url: '',
        aspectRatio: '16/9'
      },
      {
        id: 'anchor-ss-2',
        projectId: 'anchor',
        title: 'Financial Analytics & Category Pie Chart',
        caption: 'Category expenditure distribution, daily spending trends, and budget health indicators.',
        url: '',
        aspectRatio: '16/9'
      }
    ],
    readmePreview: `# Anchor Budget Tracker ⚓ (WIP)
> Privacy-first, offline-first personal budget & expense management tool.

\`\`\`bash
# Clone the Anchor WIP repository
git clone https://github.com/isaiahscape/anchor.git
cd anchor
npm install
npm run dev
\`\`\`

## Current Features (WIP)
- [x] Local storage expense & income ledger
- [x] Category budget limits & visual progress bars
- [x] Spending analytics charts
- [x] Data export to JSON/CSV
- [ ] Multi-device WebRTC sync (In Progress)
`,
    installation: {
      git: 'git clone https://github.com/isaiahscape/anchor.git',
      npm: 'npm install @isaiahscape/anchor (WIP preview)'
    }
  }
};
