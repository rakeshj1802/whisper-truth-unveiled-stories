
// Main confessions index file
export * from './textConfessions';
export * from '../audio/audioConfessions';

// Combined confession types
export type Confession = {
  id: number;
  title: string;
  category: string;
  likes: number;
  timestamp: string;
  tags: string[];
  type: 'text' | 'audio';
  content?: string; // for text confessions
  audioUrl?: string; // for audio confessions
  duration?: string; // for audio confessions
};

// Utility functions
export const getAllConfessions = (): Confession[] => {
  // This would combine both text and audio confessions
  // Implementation depends on your specific needs
  return [];
};

export const searchConfessions = (query: string): Confession[] => {
  // Search functionality across all confession types
  return [];
};
