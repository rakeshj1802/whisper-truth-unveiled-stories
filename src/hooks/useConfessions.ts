import { useState, useEffect, useCallback } from 'react';
import confessionsData from '../data/confessions.json';
import { Confession } from '@/types/confessionTypes';

const INITIAL_VISIBLE_COUNT = 6;

interface UseConfessionsProps {
  categoryName?: string | null; // Changed from categorySlug to categoryName, 'all' or null/undefined for all
}

export const useConfessions = ({ categoryName }: UseConfessionsProps = {}) => {
  const [allConfessionsInHook, setAllConfessionsInHook] = useState<Confession[]>([]);
  const [displayedConfessions, setDisplayedConfessions] = useState<Confession[]>([]);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadInitialConfessions = useCallback(() => {
    setIsLoading(true);
    console.log(`Loading confessions for category NAME: ${categoryName}`);
    setTimeout(() => {
      const typedConfessionsData = confessionsData as Confession[];
      
      let filteredConfessions = typedConfessionsData;
      if (categoryName && categoryName.toLowerCase() !== 'all') {
        filteredConfessions = typedConfessionsData.filter(
          confession => confession.category === categoryName
        );
        console.log(`Found ${filteredConfessions.length} confessions for category name ${categoryName}`);
      } else {
        console.log(`Category is "All" or not specified, found ${filteredConfessions.length} total confessions.`);
      }
      
      setAllConfessionsInHook(filteredConfessions);

      const shuffled = [...filteredConfessions].sort(() => Math.random() - 0.5);
      setDisplayedConfessions(shuffled);
      setVisibleCount(INITIAL_VISIBLE_COUNT);
      setExpandedCards(new Set());

      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
        setPlayingAudio(null);
      }
      setIsLoading(false);
    }, 500);
  }, [categoryName]);

  useEffect(() => {
    loadInitialConfessions();
  }, [loadInitialConfessions]);

  const toggleExpanded = (id: string) => {
    setExpandedCards(prev => {
      const newExpanded = new Set(prev);
      if (newExpanded.has(id)) {
        newExpanded.delete(id);
      } else {
        newExpanded.add(id);
      }
      return newExpanded;
    });
  };

  const toggleAudio = (audioUrl: string, confessionId: string) => {
    if (playingAudio === confessionId) {
      currentAudio?.pause();
      setPlayingAudio(null);
      setCurrentAudio(null);
    } else {
      currentAudio?.pause();
      const audio = new Audio(audioUrl);
      audio.play().catch(error => console.error("Error playing audio:", error));
      setPlayingAudio(confessionId);
      setCurrentAudio(audio);

      audio.onended = () => {
        setPlayingAudio(null);
        setCurrentAudio(null);
      };
      audio.onerror = () => {
        console.error("Audio playback error for:", audioUrl);
        setPlayingAudio(null);
        setCurrentAudio(null);
      };
    }
  };

  const loadMore = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoadingMore(false);
    }, 300);
  };

  const refreshFeed = () => {
    loadInitialConfessions();
  };
  
  const isLoadingInitial = isLoading && displayedConfessions.length === 0;

  return {
    confessions: displayedConfessions,
    expandedCards,
    playingAudio,
    visibleCount,
    isLoadingInitial,
    isLoadingMore,
    toggleExpanded,
    toggleAudio,
    loadMore,
    refreshFeed,
    totalConfessionsCount: allConfessionsInHook.length,
    currentAudio
  };
};
