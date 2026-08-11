import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MdTerminal as Terminal, MdLayers as Layers, MdWallet as Wallet, MdSearch as Search, MdWbSunny as MdWbSunny, MdNightsStay as MdNightsStay, MdMenu as MdMenu, MdClose as MdClose, MdInsights as Activity, MdImage as ImageIcon, MdInfo as Info, MdCode as Code2, MdAutoAwesome as Sparkles, MdGroups as Contacts } from 'react-icons/md';
import { FaGithub as Github } from 'react-icons/fa';
import { ThemeMode } from '../types';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPath,
  onNavigate,
  isDark,
  onToggleTheme,
  onOpenSearch,
}) => {
  const [mobileMdMenuOpen, setMobileMdMenuOpen] = useState(false);

  const navItems = [
    { label: 'Overview', path: '/', icon: Code2 },
    { label: 'Status', path: '/status', icon: Activity },
    { label: 'About', path: '/about', icon: Info },
    { label: 'Contacts', path: '/contacts', icon: Contacts },
  ];

  const handleNavClick = (path: string) => {
    onNavigate(path);
    setMobileMdMenuOpen(false);
  };

  return (
    <header className="w-full sticky top-0 z-30 transition-colors">
      {/* Progressive blur background that blends with content */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 backdrop-blur-md [mask-image:linear-gradient(to_bottom,black_40%,transparent)] bg-gradient-to-b from-zinc-50/90 dark:from-black/90 to-transparent" />
      </div>
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand & Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 flex items-center justify-center transition-transform">
              <img src="/favicon.svg" alt="Logo" className="w-9 h-9 object-contain" />
            </div>
          </motion.div>

          {/* Desktop Navigation Links - Centered */}
          <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'text-white dark:text-zinc-900 shadow-xs'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-zinc-900 dark:bg-zinc-100 rounded-lg -z-0"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-purple-400 dark:text-purple-600' : ''}`} />
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Search, Theme Toggle, Mobile MdMenu */}
          <div className="flex items-center gap-2">
            {/* Quick Search Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={onOpenSearch}
              className="flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 px-2.5 py-1.5 rounded-lg text-xs transition"
              title="Search projects & shortcuts (Cmd+K)"
            >
              <Search className="w-3.5 h-3.5 text-zinc-400" />
              <span className="hidden md:inline">Search...</span>
              <kbd className="hidden md:inline-flex items-center text-[10px] font-mono bg-zinc-200 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 px-1.5 py-0.5 rounded text-zinc-500 dark:text-zinc-400 ml-1">
                ⌘K
              </kbd>
            </motion.button>

            {/* Theme Switcher */}
            <motion.button
              whileTap={{ scale: 0.9, rotate: 15 }}
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition border border-zinc-200 dark:border-zinc-800"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <MdWbSunny className="w-4 h-4 text-purple-400" /> : <MdNightsStay className="w-4 h-4 text-purple-600" />}
            </motion.button>

            {/* Mobile Sheet Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMdMenuOpen(!mobileMdMenuOpen)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition border border-zinc-200 dark:border-zinc-800 lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMdMenuOpen ? <MdClose className="w-5 h-5" /> : <MdMenu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Sheet Drawer */}
        <AnimatePresence>
          {mobileMdMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="lg:hidden overflow-hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black px-4 pt-2 pb-4 space-y-1 shadow-lg"
            >
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    onClick={() => handleNavClick(item.path)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition ${
                      isActive
                        ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold'
                        : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-4 h-4 text-purple-500" />
                      <span>{item.label}</span>
                    </div>
                  </button>
                );
              })}

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-2 flex items-center justify-between">
                <a
                  href="https://github.com/isaiahscape"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                >
                  <Github className="w-4 h-4" />
                  <span>isaiahscape on GitHub</span>
                </a>
                <span className="text-xs text-zinc-400">play.isaiahthings.me</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};