
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  href: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "desires-fantasies",
    name: "Desires & Fantasies",
    icon: "🔥",
    description: "Explore people's hidden sexual urges and fantasies.",
    href: "/category/desires-fantasies",
    slug: "desires-fantasies"
  },
  {
    id: "love-lust", // Changed from "love-heartbreak" to match user's "Love & Lust" for consistency, but keeping slug similar for now. Let's use "love-lust" for slug too.
    name: "Love & Lust", // User proposed "Love & Lust"
    icon: "💔",
    description: "Stories of love, heartbreak, passion, and betrayal.", // User proposed description
    href: "/category/love-lust",
    slug: "love-lust"
  },
  {
    id: "secrets-scandals",
    name: "Secrets & Scandals",
    icon: "😶",
    description: "Dark secrets, taboo confessions, and controversial moments.",
    href: "/category/secrets-scandals",
    slug: "secrets-scandals"
  },
  {
    id: "mind-emotions", // Changed from "life-emotions" to match user's "Mind & Emotions"
    name: "Mind & Emotions", // User proposed "Mind & Emotions"
    icon: "🧠",
    description: "Mental health struggles, growth, and emotional confessions.", // User proposed description
    href: "/category/mind-emotions",
    slug: "mind-emotions"
  },
  {
    id: "fiction-roleplay", // Kept similar, user proposed "Fantasy & Fiction"
    name: "Fantasy & Fiction", // User proposed "Fantasy & Fiction"
    icon: "🎭",
    description: "Fictional, roleplay, and imaginative storytelling.", // User proposed description
    href: "/category/fiction-roleplay",
    slug: "fiction-roleplay"
  },
  { // New category from user proposal
    id: "audio-confessions",
    name: "Audio Confessions",
    icon: "📼",
    description: "Voice-recorded stories with raw emotion and depth.",
    href: "/category/audio-confessions",
    slug: "audio-confessions"
  }
  // Note: "First Times & Experiences" was removed to align with the user's new list.
  // If "First Times & Experiences" was important, it could be added or re-integrated.
  // For now, strictly following the user's new proposed 6 categories.
];

// The old Category type might not be needed if it was just `typeof categories[0]`.
// The new interface Category explicitly defines the structure.
