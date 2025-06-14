
import { useState, useEffect, useCallback } from 'react';
import confessionsData from '../data/confessions.json';
import { Confession } from '@/types/confessionTypes';

const INITIAL_VISIBLE_COUNT = 6;

export const useConfessions = () => {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadInitialConfessions = useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      const typedConfessionsData = confessionsData as Confession[];
      const shuffled = [...typedConfessionsData].sort(() => Math.random() - 0.5);
      setConfessions(shuffled);
      setVisibleCount(INITIAL_VISIBLE_COUNT);
      setExpandedCards(new Set());
      if (currentAudio) {
        currentAudio.pause();
        setCurrentAudio(null);
        setPlayingAudio(null);
      }
      setIsLoading(false);
    }, 500);
  }, [currentAudio]);

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
  
  const isLoadingInitial = isLoading && confessions.length === 0;

  return {
    confessions,
    expandedCards,
    playingAudio,
    visibleCount,
    isLoadingInitial,
    isLoadingMore, // Used for the load more button specifically
    toggleExpanded,
    toggleAudio,
    loadMore,
    refreshFeed,
    totalConfessionsCount: confessions.length,
    currentAudio // Exposing for potential cleanup if component unmounts
  };
};
