
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  subtitle: string; // Added new subtitle field
  href: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "desires-fantasies",
    name: "Desires & Fantasies",
    icon: "🔥",
    description: "Explore people's hidden sexual urges and fantasies.",
    subtitle: "Uncover hidden desires, kinks, and intimate fantasies shared anonymously.",
    href: "/category/desires-fantasies",
    slug: "desires-fantasies"
  },
  {
    id: "love-lust",
    name: "Love & Lust",
    icon: "💔",
    description: "Stories of love, heartbreak, passion, and betrayal.",
    subtitle: "Navigate the complex world of love, lust, heartbreak, and passionate encounters.",
    href: "/category/love-lust",
    slug: "love-lust"
  },
  {
    id: "secrets-scandals",
    name: "Secrets & Scandals",
    icon: "😶",
    description: "Dark secrets, taboo confessions, and controversial moments.",
    subtitle: "Delve into a realm of dark secrets, taboo confessions, and shocking scandals.",
    href: "/category/secrets-scandals",
    slug: "secrets-scandals"
  },
  {
    id: "mind-emotions",
    name: "Mind & Emotions",
    icon: "🧠",
    description: "Mental health struggles, growth, and emotional confessions.",
    subtitle: "Share and discover personal journeys of mental health, emotional growth, and heartfelt confessions.",
    href: "/category/mind-emotions",
    slug: "mind-emotions"
  },
  {
    id: "fiction-roleplay",
    name: "Fantasy & Fiction",
    icon: "🎭",
    description: "Fictional, roleplay, and imaginative storytelling.",
    subtitle: "Dive into worlds of imagination, roleplay, and captivating fictional narratives.",
    href: "/category/fiction-roleplay",
    slug: "fiction-roleplay"
  },
  { 
    id: "audio-confessions",
    name: "Audio Confessions",
    icon: "📼",
    description: "Voice-recorded stories with raw emotion and depth.",
    subtitle: "Listen to raw, voice-recorded stories, bringing confessions to life with depth and emotion.",
    href: "/category/audio-confessions",
    slug: "audio-confessions"
  }
];
