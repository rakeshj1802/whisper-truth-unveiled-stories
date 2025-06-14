
import { useState, useEffect, useCallback } from 'react';
import confessionsData from '../data/confessions.json'; // Make sure this data has categorySlug
import { Confession } from '@/types/confessionTypes';

const INITIAL_VISIBLE_COUNT = 6;

interface UseConfessionsProps {
  categorySlug?: string;
}

export const useConfessions = ({ categorySlug }: UseConfessionsProps = {}) => {
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
    console.log(`Loading confessions for category: ${categorySlug}`);
    setTimeout(() => {
      const typedConfessionsData = confessionsData as Confession[];
      
      let filteredConfessions = typedConfessionsData;
      if (categorySlug) {
        // Ensure confessions.json has 'categorySlug' field matching the route slug
        filteredConfessions = typedConfessionsData.filter(
          confession => confession.categorySlug === categorySlug
        );
        console.log(`Found ${filteredConfessions.length} confessions for slug ${categorySlug}`);
      } else {
        console.log(`No category slug, found ${filteredConfessions.length} total confessions.`);
      }
      
      setAllConfessionsInHook(filteredConfessions); // Store all (potentially filtered) confessions
      
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
  }, [categorySlug, currentAudio]); // Add categorySlug to dependencies

  useEffect(() => {
    loadInitialConfessions();
  }, [loadInitialConfessions]); // This will re-run if categorySlug changes

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
    // loadInitialConfessions will use the current categorySlug from its closure
    loadInitialConfessions();
  };
  
  const isLoadingInitial = isLoading && displayedConfessions.length === 0;

  return {
    confessions: displayedConfessions, // Use displayedConfessions for rendering
    expandedCards,
    playingAudio,
    visibleCount,
    isLoadingInitial,
    isLoadingMore,
    toggleExpanded,
    toggleAudio,
    loadMore,
    refreshFeed,
    totalConfessionsCount: allConfessionsInHook.length, // Count based on (filtered) source
    currentAudio
  };
};
