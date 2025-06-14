
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ContentPolicy = () => {
  const navigate = useNavigate();

  const openFeedbackForm = () => {
    window.open('https://forms.gle/xY853C2WVSmivL8Z9', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-playfair text-center">Content Policy</h1>
        <p className="mb-8 text-gray-400 text-center">Effective Date: June 14, 2025</p>

        <div className="space-y-8 bg-gray-800/50 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700">
          <p className="mb-4 text-gray-300">
            ConfessionX is a platform built on the values of expression, safety, and respect. To ensure the safety and legality of content shared by users, we have set the following guidelines for submissions and comments. Violating these rules may lead to content removal or reporting to relevant authorities.
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Allowed Content</h2>
            <p className="mb-4 text-gray-300">
              Users are welcome to share their thoughts, stories, experiences, and anonymous confessions in a respectful and lawful manner. Both text and audio formats are permitted as long as they comply with this policy.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">2. Prohibited Content</h2>
            <p className="mb-4 text-gray-300">You may <strong>not</strong> post or submit any content that includes:</p>
            <ul className="list-disc list-inside space-y-2 text-red-400 pl-4">
              <li>Hate speech or discrimination against any group</li>
              <li>Harassment, bullying, or threats</li>
              <li>Explicit sexual or pornographic content</li>
              <li>Self-harm, suicide encouragement, or dangerous behavior</li>
              <li>Violence or encouragement of violent acts</li>
              <li>Illegal activity or criminal confession</li>
              <li>Personal or private information of others</li>
              <li>Fake news, scams, or fraudulent information</li>
              <li>Copyright-infringing material</li>
              <li>Spam, promotional messages, or repetitive content</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">3. Comment Policy</h2>
            <p className="mb-4 text-gray-300">
              Comments must follow the same rules as confessions. We encourage open discussion but expect users to remain respectful. Comments that abuse, degrade, or harm others in any way may be hidden or removed.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">4. Reporting Content</h2>
            <p className="mb-4 text-gray-300">
              If you encounter any content that violates this policy, please use the{' '}
              <button 
                onClick={openFeedbackForm} 
                className="text-purple-400 hover:text-purple-300 underline cursor-pointer"
              >
                Send Feedback
              </button>
              {' '}section to report it. We will take appropriate action based on the nature of the report.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">5. Platform Limitations</h2>
            <p className="mb-4 text-gray-300">
              Since ConfessionX does not store data in a backend or database, and works with JSON-based public storage, moderation actions may be limited or handled manually.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">6. Legal Compliance</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX complies with Indian cyber laws. Any content that violates legal standards or risks public safety will be dealt with accordingly. We may cooperate with authorities if required.
            </p>
          </div>

          <p className="mt-8 text-sm italic text-gray-400">
            By using ConfessionX, you agree to follow this Content Policy. We may update this page at any time without notice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContentPolicy;
