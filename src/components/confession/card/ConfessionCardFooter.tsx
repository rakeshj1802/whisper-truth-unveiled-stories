
import React from 'react';
import { Button } from "@/components/ui/button";
import { Eye } from 'lucide-react';

interface ConfessionCardFooterProps {
  isExpanded: boolean;
  onToggleExpanded: () => void;
  translatedShowLess: string;
  translatedReadFull: string;
}

const ConfessionCardFooter: React.FC<ConfessionCardFooterProps> = ({
  isExpanded,
  onToggleExpanded,
  translatedShowLess,
  translatedReadFull,
}) => {
  return (
    <div className="flex items-center justify-end mb-4">
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggleExpanded}
        className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 font-medium transition-all duration-300 hover:scale-105"
      >
        <Eye className="w-4 h-4 mr-2" />
        {isExpanded ? translatedShowLess : translatedReadFull}
      </Button>
    </div>
  );
};

export default ConfessionCardFooter;
