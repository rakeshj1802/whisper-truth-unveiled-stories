
export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string; // Kept for potential future use, e.g., tooltips
  subtitle: string;    // Kept for potential future use
  slug: string; // Will be used as the unique key for filtering
  // href is removed as navigation is changing
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
    id: "love-lust",
    name: "Love & Lust",
    icon: "💖",
    description: "Stories of romance, passion, and attraction.",
    subtitle: "Explore tales of affection, desire, and intimate connections.",
    slug: "love-lust"
  },
  {
    id: "relationships",
    name: "Relationships",
    icon: "🔗",
    description: "Confessions about friendships, family, and partnerships.",
    subtitle: "Navigate the complexities of human connections and bonds.",
    slug: "relationships"
  },
  {
    id: "secrets",
    name: "Secrets",
    icon: "🤫",
    description: "Hidden truths, concealed actions, and untold stories.",
    subtitle: "Uncover closely guarded secrets and confidential admissions.",
    slug: "secrets"
  },
  {
    id: "regrets",
    name: "Regrets",
    icon: "😔",
    description: "Reflections on past mistakes and wished-for do-overs.",
    subtitle: "Read about moments of remorse and lessons learned too late.",
    slug: "regrets"
  },
  {
    id: "mental-health",
    name: "Mental Health",
    icon: "🧠",
    description: "Journeys through emotional well-being, struggles, and growth.",
    subtitle: "Stories of resilience, vulnerability, and the inner workings of the mind.",
    slug: "mental-health"
  },
  {
    id: "life-experiences",
    name: "Life Experiences",
    icon: "✈️",
    description: "Diverse accounts of personal events, milestones, and daily life.",
    subtitle: "Discover a wide range of human experiences, big and small.",
    slug: "life-experiences"
  },
  {
    id: "dark-thoughts",
    name: "Dark Thoughts",
    icon: "💭",
    description: "Exploring deeper, sometimes unsettling, thoughts and feelings.",
    subtitle: "Delve into the more obscure and intense aspects of human consciousness.",
    slug: "dark-thoughts"
  }
  // Removed old categories like "Desires & Fantasies", "Secrets & Scandals", "Fantasy & Fiction", "Audio Confessions"
  // to align with the user's new list.
  // The original "Desires & Fantasies" maps to "Dark Thoughts".
  // "Secrets & Scandals" maps to "Secrets".
  // "Mind & Emotions" maps to "Mental Health".
  // "Fantasy & Fiction" and "Audio Confessions" don't have direct new counterparts in the user's list for filtering,
  // so confessions previously in these would need re-categorization if they are to appear in the new filter system.
];
