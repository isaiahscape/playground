import React from 'react';
import { ScreenshotGallery } from '../ScreenshotGallery';
import { MdImage as ImageIcon, MdAutoAwesome as Sparkles } from 'react-icons/md';

export const ScreenshotsPage: React.FC = () => {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8 border border-zinc-800 shadow-xl">
        <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-semibold mb-2">
          <ImageIcon className="w-4 h-4" />
          <span>play.isaiahthings.me/screenshots</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight">
          Application Screenshots & Media Gallery
        </h1>
        <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-2xl">
          Visual preview catalog for Anchor, Bedrock, and MaterialExp. You can upload custom screenshots anytime using the button below.
        </p>
      </div>

      <ScreenshotGallery selectedProjectId="all" />
    </div>
  );
};
