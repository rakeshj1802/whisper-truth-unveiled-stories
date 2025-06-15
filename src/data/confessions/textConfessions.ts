
// Enhanced text confessions data structure
export interface TextConfession {
  id: number;
  title: string;
  content: string;
  category: string;
  subcategory?: string;
  likes: number;
  comments: number;
  timestamp: string;
  tags: string[];
  mood: 'sad' | 'happy' | 'angry' | 'confused' | 'hopeful' | 'regretful';
  isAnonymous: boolean;
  verified: boolean;
}

// Enhanced text confessions data
export const textConfessions: TextConfession[] = [
  {
    id: 1,
    title: "I've Been Living a Double Life",
    content: "For the past three years, I've been maintaining two completely different personas. My family thinks I'm a successful marketing executive, but in reality, I've been working as a freelance writer, barely making ends meet. I created this elaborate lie because I was afraid of disappointing them...",
    category: "Personal Secrets",
    subcategory: "Family Secrets",
    likes: 156,
    comments: 23,
    timestamp: "2024-01-20",
    tags: ["double-life", "family", "career", "lies"],
    mood: "regretful",
    isAnonymous: true,
    verified: true
  },
  {
    id: 2,
    title: "I'm in Love with My Best Friend's Partner",
    content: "This is eating me alive. I've been friends with Sarah for over 10 years, and she's been with Mark for 3 years. But I can't stop thinking about him. Every time we hang out as a group, I feel guilty for the thoughts I have. I would never act on it, but the guilt is consuming me...",
    category: "Love & Relationships",
    subcategory: "Forbidden Love",
    likes: 203,
    comments: 45,
    timestamp: "2024-01-19",
    tags: ["love", "friendship", "guilt", "unrequited"],
    mood: "confused",
    isAnonymous: true,
    verified: true
  },
  {
    id: 3,
    title: "I Stole Money from My Workplace",
    content: "Two years ago, I was going through a really tough financial situation. My mom needed surgery and I couldn't afford it. I took $2000 from the petty cash at work, planning to return it when I got my next paycheck. But then other expenses came up, and I never returned it. I still work there, and nobody knows...",
    category: "Regrets & Mistakes",
    subcategory: "Financial Mistakes",
    likes: 89,
    comments: 67,
    timestamp: "2024-01-18",
    tags: ["stealing", "workplace", "family", "financial"],
    mood: "regretful",
    isAnonymous: true,
    verified: true
  }
];

export const getTextConfessionsByCategory = (category: string): TextConfession[] => {
  return textConfessions.filter(confession => 
    confession.category.toLowerCase() === category.toLowerCase()
  );
};

export const getTextConfessionById = (id: number): TextConfession | undefined => {
  return textConfessions.find(confession => confession.id === id);
};

export const getTextConfessionsByMood = (mood: string): TextConfession[] => {
  return textConfessions.filter(confession => confession.mood === mood);
};

export const getTextConfessionsByTag = (tag: string): TextConfession[] => {
  return textConfessions.filter(confession => 
    confession.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  );
};
