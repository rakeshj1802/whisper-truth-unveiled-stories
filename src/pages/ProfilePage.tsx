
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4 sm:p-8">
      <div className="absolute top-4 left-4 sm:top-8 sm:left-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
      </div>
      <div className="text-center max-w-2xl bg-gray-800/50 p-8 sm:p-12 rounded-xl shadow-2xl shadow-purple-500/10 border border-purple-500/30">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center mx-auto mb-8 ring-4 ring-purple-500/30">
          <span className="text-4xl sm:text-5xl font-bold">?</span>
        </div>
        <h1 className="font-playfair text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          About Anonymity
        </h1>
        <p className="text-lg text-gray-300 mb-4 leading-relaxed">
          This platform is built on the principle of anonymous sharing. The avatars (M/F) you see are general indicators and are not tied to any specific user accounts.
        </p>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          Every confession is shared without revealing the identity of the author, creating a safe space for open and honest expression. We encourage respectful interaction and empathy within the community.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
           <Button
            onClick={() => document.getElementById('confessions-feed')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-base rounded-lg transition-all duration-300 hover:scale-105"
            onClickCapture={() => navigate('/')}
          >
            Read Confessions
          </Button>
          <Button
            variant="outline"
            onClick={() => window.open('https://forms.gle/dhDrLy9GJSoJrjBc8', '_blank')}
            className="border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-3 text-base rounded-lg transition-all duration-300 hover:scale-105"
          >
            Share Your Story
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

