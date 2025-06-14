
import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Play, Pause, Clock } from 'lucide-react';

interface ConfessionCardHeaderProps {
  gender: string;
  age: number;
  timePosted: string;
  avatarColor: string;
  audioUrl?: string | null;
  playingAudio: string | null;
  confessionId: string;
  onToggleAudio: (audioUrl: string, confessionId: string) => void;
}

const getInitials = (gender: string) => {
  return gender === 'M' ? 'M' : gender === 'F' ? 'F' : gender.substring(0,1).toUpperCase(); // Handle NB or other genders
};

const ConfessionCardHeader: React.FC<ConfessionCardHeaderProps> = ({
  gender,
  age,
  timePosted,
  avatarColor,
  audioUrl,
  playingAudio,
  confessionId,
  onToggleAudio,
}) => {
  // Log the avatarColor and confessionId for debugging
  console.log(`ConfessionCardHeader - ID: ${confessionId}, avatarColor: ${avatarColor}`);

  return (
    <div className="flex items-center justify-between mb-4">
      <Link to="/profile" className="flex items-center group/avatar">
        <Avatar className="w-12 h-12 mr-3 ring-2 ring-purple-500/30 group-hover/avatar:ring-purple-400/50 transition-all">
          <AvatarFallback className={`${avatarColor} text-white font-bold text-lg`}>
            {getInitials(gender)}
          </AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center text-sm text-gray-300 font-medium group-hover/avatar:text-purple-300 transition-colors">
            <span className="bg-purple-500/20 px-2 py-1 rounded-full">
              {gender === "NB" ? "NB" : gender}, {age} {/* Display NB correctly if gender is NB */}
            </span>
          </div>
          <div className="flex items-center text-xs text-gray-500 mt-1 group-hover/avatar:text-gray-400 transition-colors">
            <Clock className="w-3 h-3 mr-1" />
            <span>{timePosted}</span>
          </div>
        </div>
      </Link>
      
      {audioUrl && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onToggleAudio(audioUrl!, confessionId)}
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 p-3 rounded-full transition-all duration-300 hover:scale-110"
        >
          {playingAudio === confessionId ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5" />
          )}
        </Button>
      )}
    </div>
  );
};

export default ConfessionCardHeader;
