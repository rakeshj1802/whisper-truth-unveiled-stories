
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from '@/contexts/LanguageContext';
import ConfessionCardHeader from './card/ConfessionCardHeader';
import ConfessionCardBody from './card/ConfessionCardBody';
import ConfessionCardFooter from './card/ConfessionCardFooter';

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

interface ConfessionCardProps {
  confession: Confession;
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
  onToggleAudio,
}: ConfessionCardProps) => {
  const { t } = useLanguage();

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700 hover:border-purple-500 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 transform hover:scale-[1.02] group">
      <CardContent className="p-6">
        <ConfessionCardHeader
          gender={confession.gender}
          age={confession.age}
          timePosted={confession.timePosted}
          avatarColor={confession.avatarColor}
          audioUrl={confession.audioUrl}
          playingAudio={playingAudio}
          confessionId={confession.id}
          onToggleAudio={onToggleAudio}
        />

        <ConfessionCardBody
          title={confession.title}
          content={confession.content}
          preview={confession.preview}
          isExpanded={isExpanded}
        />

        {/* Audio Player - kept here for simplicity for now */}
        {confession.audioUrl && playingAudio === confession.id && (
          <div className="mb-4 bg-gray-700/50 rounded-lg p-3">
            <p className="text-xs text-purple-300 text-center">Audio playing...</p>
          </div>
        )}

        <ConfessionCardFooter
          isExpanded={isExpanded}
          onToggleExpanded={onToggleExpanded}
          translatedShowLess={t('card.showLess')}
          translatedReadFull={t('card.readFull')}
        />
      </CardContent>
    </Card>
  );
};

export default ConfessionCard;
