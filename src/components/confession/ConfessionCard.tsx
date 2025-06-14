
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play, Pause, Eye, Clock } from 'lucide-react'; // Removed Heart, MessageCircle, Send
import { useLanguage } from '@/contexts/LanguageContext';

// Removed Comment interface

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
  // Removed likes and comments fields
}

interface ConfessionCardProps {
  confession: Confession;
  isExpanded: boolean;
  onToggleExpanded: () => void;
  playingAudio: string | null;
  onToggleAudio: (audioUrl: string, confessionId: string) => void;
  // Removed onLike and onAddComment props
}

const ConfessionCard = ({
  confession,
  isExpanded,
  onToggleExpanded,
  playingAudio,
  onToggleAudio,
}: ConfessionCardProps) => {
  // Removed liked, showComments, newComment state
  const { t } = useLanguage();

  const getInitials = (gender: string) => {
    return gender === 'M' ? 'M' : 'F';
  };

  // Removed handleLikeClick and handleAddCommentClick functions

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-[1.02] group">
      <CardContent className="p-6">
        {/* Header with User Info and Audio Controls */}
        <div className="flex items-center justify-between mb-4">
          <Link to="/profile" className="flex items-center group/avatar">
            <Avatar className="w-12 h-12 mr-3 ring-2 ring-purple-500/30 group-hover/avatar:ring-purple-400/50 transition-all">
              <AvatarFallback className={`${confession.avatarColor} text-white font-bold text-lg`}>
                {getInitials(confession.gender)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center text-sm text-gray-300 font-medium group-hover/avatar:text-purple-300 transition-colors">
                <span className="bg-purple-500/20 px-2 py-1 rounded-full">
                  {confession.gender}, {confession.age}
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1 group-hover/avatar:text-gray-400 transition-colors">
                <Clock className="w-3 h-3 mr-1" />
                <span>{confession.timePosted}</span>
              </div>
            </div>
          </Link>
          
          {confession.audioUrl && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onToggleAudio(confession.audioUrl!, confession.id)}
              className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
            >
              {playingAudio === confession.id ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5" />
              )}
            </Button>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-4 line-clamp-2 group-hover:text-purple-300 transition-colors leading-tight">
          {confession.title}
        </h3>

        {/* Content */}
        <div className="text-gray-300 mb-6 relative">
          <p className={`text-sm leading-relaxed transition-all duration-500 ${
            isExpanded ? '' : 'line-clamp-3'
          }`}>
            {isExpanded ? confession.content : confession.preview}
          </p>
          
          {!isExpanded && confession.content.length > confession.preview.length && (
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900 to-transparent"></div>
          )}
        </div>

        {/* Audio Player */}
        {confession.audioUrl && playingAudio === confession.id && (
          <div className="mb-4 bg-gray-700/50 rounded-lg p-3">
            <p className="text-xs text-purple-300 text-center">Audio playing...</p>
          </div>
        )}

        {/* Action Buttons - Only Read More/Less */}
        <div className="flex items-center justify-end mb-4"> {/* Changed justify-between to justify-end */}
          {/* Removed Like and Comment buttons */}
          <Button
            variant="ghost"
            size="sm"
            onClick={onToggleExpanded}
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 font-medium transition-all duration-300 hover:scale-105"
          >
            <Eye className="w-4 h-4 mr-2" />
            {isExpanded ? t('card.showLess') : t('card.readFull')}
          </Button>
        </div>

        {/* Comments Section Removed */}
      </CardContent>
    </Card>
  );
};

export default ConfessionCard;

