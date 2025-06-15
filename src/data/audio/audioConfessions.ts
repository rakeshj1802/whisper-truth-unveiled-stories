
// Audio confessions data structure
export interface AudioConfession {
  id: number;
  title: string;
  category: string;
  audioUrl: string;
  duration: string;
  transcript?: string;
  likes: number;
  timestamp: string;
  tags: string[];
}

// Sample audio confessions data
export const audioConfessions: AudioConfession[] = [
  {
    id: 1,
    title: "A Secret I've Never Told Anyone",
    category: "Personal Secrets",
    audioUrl: "/audio/confession-1.mp3",
    duration: "3:45",
    transcript: "This is a placeholder for audio confession transcript...",
    likes: 42,
    timestamp: "2024-01-15",
    tags: ["secret", "personal", "family"]
  },
  {
    id: 2,
    title: "My Biggest Regret",
    category: "Regrets & Mistakes",
    audioUrl: "/audio/confession-2.mp3",
    duration: "5:12",
    transcript: "This is a placeholder for audio confession transcript...",
    likes: 28,
    timestamp: "2024-01-14",
    tags: ["regret", "mistake", "life"]
  }
];

export const getAudioConfessionsByCategory = (category: string): AudioConfession[] => {
  return audioConfessions.filter(confession => 
    confession.category.toLowerCase() === category.toLowerCase()
  );
};

export const getAudioConfessionById = (id: number): AudioConfession | undefined => {
  return audioConfessions.find(confession => confession.id === id);
};
