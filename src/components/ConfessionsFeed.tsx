
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play, Pause, Eye, Clock, RefreshCw } from 'lucide-react';
import confessionsData from '../data/confessions.json';

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
    // Simulate loading and add some randomization to make it more dynamic
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

  const getInitials = (gender: string) => {
    return gender === 'M' ? 'M' : 'F';
  };

  return (
    <section id="confessions-feed" className="py-20 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white">
              Recent Confessions
            </h2>
            <Button
              onClick={refreshFeed}
              variant="ghost"
              size="sm"
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-2"
              disabled={isLoading}
            >
              <RefreshCw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real stories from real people. Read them, listen to them, feel them.
          </p>
          <div className="mt-4 text-sm text-gray-400">
            {confessions.length} confessions available
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full">
              <RefreshCw className="w-4 h-4 animate-spin mr-2" />
              Loading confessions...
            </div>
          </div>
        )}

        {/* Confessions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {confessions.slice(0, visibleCount).map((confession, index) => (
            <Card 
              key={confession.id} 
              className="bg-gray-800 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 animate-fade-in group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* User Info */}
                <div className="flex items-center mb-4">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarFallback className={`${confession.avatarColor} text-white font-semibold`}>
                      {getInitials(confession.gender)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center text-sm text-gray-400">
                      <span>{confession.gender}, {confession.age}</span>
                      <Clock className="w-3 h-3 mx-2" />
                      <span>{confession.timePosted}</span>
                    </div>
                  </div>
                  {confession.audioUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleAudio(confession.audioUrl!, confession.id)}
                      className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-2"
                    >
                      {playingAudio === confession.id ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4" />
                      )}
                    </Button>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2 group-hover:text-purple-300 transition-colors">
                  {confession.title}
                </h3>

                {/* Content */}
                <div className="text-gray-300 mb-4">
                  {expandedCards.has(confession.id) ? (
                    <p className="text-sm leading-relaxed">{confession.content}</p>
                  ) : (
                    <p className="text-sm leading-relaxed line-clamp-3">{confession.preview}</p>
                  )}
                </div>

                {/* Audio Player */}
                {confession.audioUrl && (
                  <div className="mb-4">
                    <audio 
                      controls 
                      className="w-full h-8 rounded bg-gray-700"
                      style={{ accentColor: '#a855f7' }}
                    >
                      <source src={confession.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}

                {/* Read More Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleExpanded(confession.id)}
                  className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-0 h-auto font-medium"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {expandedCards.has(confession.id) ? 'Show Less' : 'Read Full'}
                </Button>
              </CardContent>
            </Card>
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
              className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
            >
              {isLoading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin mr-2" />
                  Loading...
                </>
              ) : (
                'Load More Confessions'
              )}
            </Button>
          </div>
        )}

        {/* Stats */}
        <div className="text-center mt-8 text-sm text-gray-500">
          Showing {Math.min(visibleCount, confessions.length)} of {confessions.length} confessions
        </div>
      </div>
    </section>
  );
};

export default ConfessionsFeed;
