import fs from 'fs';
import path from 'path';

const mapping = {
  Search: 'MdSearch',
  Terminal: 'MdTerminal',
  Layers: 'MdLayers',
  Wallet: 'MdWallet',
  Code: 'MdCode',
  Check: 'MdCheck',
  Copy: 'MdContentCopy',
  ExternalLink: 'MdOpenInNew',
  Activity: 'MdInsights',
  Image: 'MdImage',
  ImageIcon: 'MdImage',
  Info: 'MdInfo',
  Heart: 'MdFavorite',
  Shield: 'MdSecurity',
  GitBranch: 'MdCallSplit',
  AlertCircle: 'MdErrorOutline',
  Clock: 'MdAccessTime',
  GitCommit: 'MdCommit',
  RefreshCw: 'MdRefresh',
  CheckCircle2: 'MdCheckCircleOutline',
  Sparkles: 'MdAutoAwesome',
  ArrowRight: 'MdArrowForward',
  ArrowLeft: 'MdArrowBack',
  ArrowUpRight: 'MdNorthEast',
  Book: 'MdMenuBook',
  BookOpen: 'MdMenuBook',
  FileText: 'MdInsertDriveFile',
  Star: 'MdStar',
  GitFork: 'MdDeviceHub',
  Download: 'MdDownload',
  Github: 'FaGithub',
  Code2: 'MdCode',
  ShieldAlert: 'MdSecurity'
};

const files = [
  'src/components/CommandMenu.tsx',
  'src/components/pages/AboutPage.tsx',
  'src/components/pages/HomePage.tsx',
  'src/components/pages/StatusPage.tsx',
  'src/components/pages/ProjectDetailPage.tsx',
  'src/components/pages/ScreenshotsPage.tsx',
  'src/components/ScreenshotGallery.tsx',
  'src/components/ProjectCard.tsx',
  'src/components/Footer.tsx',
  'src/components/BuildBadge.tsx',
  'src/components/Navbar.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Find import { ... } from 'lucide-react';
  const importRegex = /import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];?/g;
  
  content = content.replace(importRegex, (match, importsStr) => {
    const imports = importsStr.split(',').map(s => s.trim()).filter(s => s);
    
    const mdImports = [];
    const faImports = [];
    
    imports.forEach(imp => {
      let original = imp;
      let alias = imp;
      
      if (imp.includes(' as ')) {
        const parts = imp.split(' as ');
        original = parts[0].trim();
        alias = parts[1].trim();
      }
      
      const iconName = mapping[original] || original;
      
      if (iconName.startsWith('Fa')) {
        faImports.push(`${iconName} as ${alias}`);
      } else {
        mdImports.push(`${iconName} as ${alias}`);
      }
    });
    
    let result = '';
    if (mdImports.length > 0) {
      result += `import { ${mdImports.join(', ')} } from 'react-icons/md';\n`;
    }
    if (faImports.length > 0) {
      result += `import { ${faImports.join(', ')} } from 'react-icons/fa';\n`;
    }
    
    return result.trim();
  });
  
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
