
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const CommunityGuidelines = () => {
  const navigate = useNavigate();

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
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-playfair text-center">Community Guidelines</h1>
        <p className="mb-8 text-gray-400 text-center">Effective Date: June 14, 2025</p>

        <div className="space-y-8 bg-gray-800/50 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700">
          <p className="mb-4 text-gray-300">
            ConfessionX is a safe, anonymous space for self-expression. To protect our community and ensure everyone feels respected and secure, we ask that you follow these simple but important guidelines.
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">What’s Allowed</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 pl-4">
              <li>Sharing personal stories, secrets, experiences, or emotions.</li>
              <li>Expressing opinions or feelings that are respectful and non-harmful.</li>
              <li>Commenting thoughtfully and anonymously on others’ confessions (no login required).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">What’s Not Allowed</h2>
            <ul className="list-disc list-inside space-y-2 text-red-400 pl-4">
              <li>Hate speech, racism, sexism, or discriminatory content of any kind.</li>
              <li>Threats, harassment, bullying, or encouraging self-harm or violence.</li>
              <li>Illegal activity or explicit descriptions of crimes (real or fictional).</li>
              <li>Sexually explicit material, pornographic content, or graphic violence.</li>
              <li>Impersonating others or posting others’ private information.</li>
              <li>Spam, advertisements, or links to external content.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">Content Moderation</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX may periodically review submissions and comments stored in our JSON system. If content is found to violate these guidelines, it will be removed from public access.
            </p>
            <p className="mb-4 text-gray-300">
              This platform is not a place for harm, trolling, or attention-seeking through dangerous posts. If you see harmful content, you can {' '}
              <Link to="/#feedback" className="text-purple-400 hover:text-purple-300 underline" onClick={(e) => {
                e.preventDefault();
                window.open('https://forms.gle/xY853C2WVSmivL8Z9', '_blank');
              }}>
                Send Feedback
              </Link> and request moderation.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">Anonymity With Responsibility</h2>
            <p className="mb-4 text-gray-300">
              While no login is required and we do not collect identifiable data, all users are expected to act in good faith. Anonymity is a privilege—please don’t misuse it.
            </p>
          </div>

          <p className="mt-8 text-sm italic text-gray-400">
            Violation of these guidelines may result in the removal of content. We rely on our community to help us maintain a positive environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;
