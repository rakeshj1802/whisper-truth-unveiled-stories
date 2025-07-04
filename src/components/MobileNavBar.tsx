
import { Button } from "@/components/ui/button";
import { Home, Plus, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const MobileNavBar = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm border-t border-gray-700 px-2 sm:px-4 py-2 sm:py-3 md:hidden z-50 safe-area-bottom">
      <div className="flex justify-around items-center max-w-sm mx-auto">
        <Button
          variant="ghost"
          size="sm"
          onClick={handleGoHome}
          className="flex flex-col items-center p-1.5 sm:p-2 text-gray-300 hover:text-purple-400 hover:bg-transparent transition-all duration-300 hover:scale-105"
        >
          <Home className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" />
          <span className="text-xs font-medium">Home</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={scrollToConfessions}
          className="flex flex-col items-center p-1.5 sm:p-2 text-gray-300 hover:text-purple-400 hover:bg-transparent transition-all duration-300 hover:scale-105"
        >
          <span className="text-base sm:text-lg mb-0.5 sm:mb-1">👁️</span>
          <span className="text-xs font-medium">Read</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={openSubmissionForm}
          className="flex flex-col items-center p-1.5 sm:p-2 text-purple-400 hover:text-purple-300 hover:bg-purple-500/20 rounded-lg transition-all duration-300 hover:scale-105 transform"
        >
          <Plus className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" />
          <span className="text-xs font-medium">Submit</span>
        </Button>

        <Button
          variant="ghost"
          size="sm"
          onClick={openFeedbackForm}
          className="flex flex-col items-center p-1.5 sm:p-2 text-gray-300 hover:text-purple-400 hover:bg-transparent transition-all duration-300 hover:scale-105"
        >
          <Info className="w-4 h-4 sm:w-5 sm:h-5 mb-0.5 sm:mb-1" />
          <span className="text-xs font-medium">Feedback</span>
        </Button>
      </div>
    </div>
  );
};

export default MobileNavBar;
