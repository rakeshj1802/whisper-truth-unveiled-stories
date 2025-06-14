
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCw } from 'lucide-react';
import confessionsData from '../data/confessions.json';
import ConfessionCard from './confession/ConfessionCard';

interface Confession {
  id: string;
  title: string;
  content: string;
  preview: string;
  age: number;
  gender: string;
  timePosted: string;
  audioUrl?: string | null;
  avatarColor: string;
}

const ConfessionsFeed = () => {
  const [confessions, setConfessions] = useState<Confession[]>([]);
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const shuffled = [...confessionsData].sort(() => Math.random() - 0.5);
      setConfessions(shuffled);
      setIsLoading(false);
    }, 500);
  }, []);

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedCards(newExpanded);
  };

  const toggleAudio = (audioUrl: string, confessionId: string) => {
    if (playingAudio === confessionId) {
      currentAudio?.pause();
      setPlayingAudio(null);
      setCurrentAudio(null);
    } else {
      currentAudio?.pause();
      const audio = new Audio(audioUrl);
      audio.play();
      setPlayingAudio(confessionId);
      setCurrentAudio(audio);
      
      audio.onended = () => {
        setPlayingAudio(null);
        setCurrentAudio(null);
      };
    }
  };

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoading(false);
    }, 300);
  };

  const refreshFeed = () => {
    setIsLoading(true);
    setTimeout(() => {
      const shuffled = [...confessionsData].sort(() => Math.random() - 0.5);
      setConfessions(shuffled);
      setVisibleCount(6);
      setExpandedCards(new Set());
      setIsLoading(false);
    }, 500);
  };

  return (
    <section id="confessions-feed" className="py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="font-playfair text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Recent Confessions
            </h2>
            <Button
              onClick={refreshFeed}
              variant="ghost"
              size="sm"
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
              disabled={isLoading}
            >
              <RefreshCw className={`w-6 h-6 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Real stories from real people. Read them, listen to them, feel them.
          </p>
          <div className="mt-6 inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 rounded-full border border-purple-500/30">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            {confessions.length} confessions available
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-6 py-3 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
              <RefreshCw className="w-5 h-5 animate-spin mr-3" />
              Loading confessions...
            </div>
          </div>
        )}

        {/* Confessions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {confessions.slice(0, visibleCount).map((confession, index) => (
            <div
              key={confession.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ConfessionCard
                confession={confession}
                isExpanded={expandedCards.has(confession.id)}
                onToggleExpanded={() => toggleExpanded(confession.id)}
                playingAudio={playingAudio}
                onToggleAudio={toggleAudio}
              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < confessions.length && (
          <div className="text-center">
            <Button
              onClick={loadMore}
              variant="outline"
              size="lg"
              disabled={isLoading}
              className="border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-10 py-4 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin mr-3" />
                  Loading...
                </>
              ) : (
                'Load More Confessions'
              )}
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="text-center mt-8">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/50 text-gray-400 rounded-full border border-gray-700">
            Showing {Math.min(visibleCount, confessions.length)} of {confessions.length} confessions
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfessionsFeed;
