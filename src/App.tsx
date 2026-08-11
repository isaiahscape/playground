import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
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
