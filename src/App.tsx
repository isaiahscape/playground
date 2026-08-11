import React, { useState } from 'react';
import { useTheme } from './hooks/useTheme';
import { useRouter } from './hooks/useRouter';
import { Navbar } from './components/Navbar';
import { CommandMenu } from './components/CommandMenu';
import { HomePage } from './components/pages/HomePage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { ScreenshotsPage } from './components/pages/ScreenshotsPage';
import { StatusPage } from './components/pages/StatusPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactsPage } from './components/pages/ContactsPage';
import { Footer } from './components/Footer';
import { ProjectId } from './types';

export default function App() {
  const { isDark, toggleTheme } = useTheme();
  const { currentPath, navigate } = useRouter();
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  const renderContent = () => {
    switch (currentPath) {
      case '/anchor':
        return <ProjectDetailPage projectId="anchor" onNavigate={navigate} />;
      case '/bedrock':
        return <ProjectDetailPage projectId="bedrock" onNavigate={navigate} />;
      case '/materialexp':
        return <ProjectDetailPage projectId="materialexp" onNavigate={navigate} />;
      case '/screenshots':
        return <ScreenshotsPage />;
      case '/status':
        return <StatusPage />;
      case '/about':
        return <AboutPage />;
      case '/contacts':
        return <ContactsPage />;
      case '/':
      default:
        return <HomePage onNavigate={navigate} isDark={isDark} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 flex flex-col font-sans transition-colors duration-200">
      
      {/* Main Navbar */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        isDark={isDark}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsCommandOpen(true)}
      />

      {/* Page Body Container */}
      <main className="flex-1 w-full pb-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigate} />

      {/* Command Palette (Cmd+K) */}
      <CommandMenu
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onNavigate={navigate}
      />

    </div>
  );
}
