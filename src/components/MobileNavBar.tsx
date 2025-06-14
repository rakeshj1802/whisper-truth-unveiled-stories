
import { Button } from "@/components/ui/button";
import { Home, Plus, Info } from 'lucide-react';

const MobileNavBar = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToConfessions = () => {
    document.getElementById('confessions-feed')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openSubmissionForm = () => {
    window.open('https://forms.gle/dhDrLy9GJSoJrjBc8', '_blank');
  };

  const openFeedbackForm = () => {
    window.open('https://forms.gle/xY853C2WVSmivL8Z9', '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700 px-4 py-2 md:hidden z-50">
      <div className="flex justify-around items-center max-w-sm mx-auto">
        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToTop}
          className="flex flex-col items-center p-2 text-gray-300 hover:text-purple-400 hover:bg-transparent"
        >
          <Home className="w-5 h-5 mb-1" />
          <span className="text-xs">Home</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToConfessions}
          className="flex flex-col items-center p-2 text-gray-300 hover:text-purple-400 hover:bg-transparent"
        >
          <span className="text-lg mb-1">👁️</span>
          <span className="text-xs">Read</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={openSubmissionForm}
          className="flex flex-col items-center p-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 rounded-lg"
        >
          <Plus className="w-5 h-5 mb-1" />
          <span className="text-xs font-medium">Submit</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={openFeedbackForm}
          className="flex flex-col items-center p-2 text-gray-300 hover:text-purple-400 hover:bg-transparent"
        >
          <Info className="w-5 h-5 mb-1" />
          <span className="text-xs">Feedback</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileNavBar;
