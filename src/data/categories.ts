
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  subtitle: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "all",
    name: "All",
    icon: "🌍",
    description: "View all confessions from every category.",
    subtitle: "Browse the complete collection of shared stories and experiences.",
    slug: "all"
  },
  {
    id: "desires-fantasies",
    name: "Desires & Fantasies",
    icon: "🔥",
    description: "Confessions about deep desires and imaginative fantasies.",
    subtitle: "Explore hidden longings and vivid daydreams.",
    slug: "desires-fantasies"
  },
  {
    id: "love-lust",
    name: "Love & Lust",
    icon: "💔", // Using user provided icon
    description: "Stories of romance, passion, and attraction.",
    subtitle: "Explore tales of affection, desire, and intimate connections.",
    slug: "love-lust"
  },
  {
    id: "secrets-scandals",
    name: "Secrets & Scandals",
    icon: "😶",
    description: "Confessions about hidden truths and shocking revelations.",
    subtitle: "Uncover closely guarded secrets and controversial incidents.",
    slug: "secrets-scandals"
  },
  {
    id: "mind-emotions",
    name: "Mind & Emotions",
    icon: "🧠",
    description: "Journeys through emotional well-being, thoughts, and feelings.",
    subtitle: "Stories of resilience, vulnerability, and the inner workings of the mind.",
    slug: "mind-emotions"
  },
  {
    id: "fantasy-fiction",
    name: "Fantasy & Fiction",
    icon: "🎭",
    description: "Imaginative tales and fictional confessions.",
    subtitle: "Delve into worlds of make-believe and creative storytelling.",
    slug: "fantasy-fiction"
  }
];

