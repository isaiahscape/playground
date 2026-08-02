import React from 'react';
import { FaDiscord as Discord } from 'react-icons/fa';

interface DiscordButtonProps {
  href: string;
  label?: string;
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md';
  className?: string;
}

export const DiscordButton: React.FC<DiscordButtonProps> = ({
  href,
  label = 'Join Discord',
  variant = 'solid',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center gap-2 font-semibold rounded-xl transition shadow-xs shrink-0';
  const sizeClasses = size === 'sm' ? 'px-3 py-1.5 text-xs' : 'px-4 py-2.5 text-xs';
  const variantClasses =
    variant === 'solid'
      ? 'bg-[#8B5CF6] hover:bg-[#7C3AED] text-white'
      : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700/60';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} ${sizeClasses} ${variantClasses} ${className}`}
    >
      <Discord className="w-4 h-4" />
      <span>{label}</span>
    </a>
  );
};