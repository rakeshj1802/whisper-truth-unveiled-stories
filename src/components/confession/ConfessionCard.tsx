
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Play, Pause, Eye, Clock, Heart, MessageCircle, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ConfessionCardProps {
  confession: {
    id: string;
    title: string;
    content: string;
    preview: string;
    age: number;
    gender: string;
    timePosted: string;
    audioUrl?: string | null;
    avatarColor: string;
  };
  isExpanded: boolean;
  onToggleExpanded: () => void;
  playingAudio: string | null;
  onToggleAudio: (audioUrl: string, confessionId: string) => void;
}

const ConfessionCard = ({
  confession,
  isExpanded,
  onToggleExpanded,
  playingAudio,
  onToggleAudio
}: ConfessionCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 50) + 5);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState<{ id: string; text: string; time: string }[]>([
    { id: '1', text: 'I can relate to this so much...', time: '2h ago' },
    { id: '2', text: 'Thank you for sharing this. Stay strong! 💪', time: '4h ago' }
  ]);
  const [newComment, setNewComment] = useState('');
  const { t } = useLanguage();

  const getInitials = (gender: string) => {
    return gender === 'M' ? 'M' : 'F';
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        text: newComment,
        time: 'now'
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-[1.02] group">
      <CardContent className="p-6">
        {/* Header with User Info and Audio Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <Avatar className="w-12 h-12 mr-3 ring-2 ring-purple-500/30 group-hover:ring-purple-400/50 transition-all">
              <AvatarFallback className={`${confession.avatarColor} text-white font-bold text-lg`}>
                {getInitials(confession.gender)}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center text-sm text-gray-300 font-medium">
                <span className="bg-purple-500/20 px-2 py-1 rounded-full">
                  {confession.gender}, {confession.age}
                </span>
              </div>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <Clock className="w-3 h-3 mr-1" />
                <span>{confession.timePosted}</span>
              </div>
            </div>
          </div>
          
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
        {confession.audioUrl && (
          <div className="mb-4 bg-gray-700/50 rounded-lg p-3">
            <audio 
              controls 
              className="w-full h-10 rounded-lg"
              style={{ accentColor: '#a855f7' }}
            >
              <source src={confession.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`transition-all duration-300 hover:scale-110 ${
                liked 
                ? 'text-red-400 hover:text-red-300' 
                : 'text-gray-400 hover:text-red-400'
              }`}
            >
              <Heart className={`w-4 h-4 mr-2 ${liked ? 'fill-current' : ''}`} />
              {likeCount}
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowComments(!showComments)}
              className="text-gray-400 hover:text-blue-400 transition-all duration-300 hover:scale-110"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {comments.length}
            </Button>
          </div>

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

        {/* Comments Section */}
        {showComments && (
          <div className="border-t border-gray-700 pt-4">
            {/* Comment Input */}
            <div className="flex gap-3 mb-4">
              <input
                type="text"
                placeholder="Add a supportive comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="flex-1 bg-gray-700/50 border border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-300 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
              />
              <Button
                size="sm"
                onClick={handleAddComment}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>

            {/* Comments List */}
            <div className="space-y-3 max-h-40 overflow-y-auto">
              {comments.map((comment) => (
                <div key={comment.id} className="bg-gray-700/30 rounded-lg p-3">
                  <p className="text-gray-300 text-sm mb-1">{comment.text}</p>
                  <span className="text-gray-500 text-xs">{comment.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ConfessionCard;
