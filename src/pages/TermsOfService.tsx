
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-playfair text-center">Terms of Service</h1>
        <p className="mb-8 text-gray-400 text-center">Effective Date: June 14, 2025</p>

        <div className="space-y-8 bg-gray-800/50 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700">
          <p className="mb-4 text-gray-300">
            Welcome to <strong>ConfessionX</strong>. By accessing or using our website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use the site.
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Description of Service</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX is an anonymous confession platform that allows users to submit and read text or audio-based confessions. Comments can be posted anonymously without accounts. All data is stored in structured JSON format and is loaded entirely from the frontend. There is no backend, login, tracking, or database.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">2. Use at Your Own Risk</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX is provided "as is" without warranties of any kind. Content shared by users does not reflect the views or opinions of the ConfessionX team. We do not verify or fact-check user submissions. Users are solely responsible for the content they post or view.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">3. Content Responsibility</h2>
            <p className="mb-4 text-gray-300">
              You agree not to post or submit any content that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-red-400 pl-4">
              <li>Contains hate speech, threats, or harassment</li>
              <li>Is obscene, sexually explicit, or illegal</li>
              <li>Violates intellectual property or privacy rights</li>
              <li>Promotes violence or self-harm</li>
              <li>Includes spam or misleading information</li>
            </ul>
            <p className="mt-4 text-gray-300">
              We reserve the right to remove any content from the platform at our discretion if it violates our <Link to="/community-guidelines" className="text-purple-400 hover:text-purple-300 underline">Community Guidelines</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">4. No Liability</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this platform. We are not liable for content posted by users, nor for any interactions between users.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">5. Modifications</h2>
            <p className="mb-4 text-gray-300">
              We may update these Terms of Service at any time. Continued use of the website after changes are made constitutes acceptance of the new terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">6. Governing Law</h2>
            <p className="mb-4 text-gray-300">
              These terms are governed by applicable laws in India. Any legal disputes shall be handled under Indian jurisdiction.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">7. Contact Us</h2>
            <p className="mb-4 text-gray-300">
              For questions or concerns regarding these Terms of Service, please email us at: <a href="mailto:confessionx@zohomail.in" className="text-purple-400 hover:text-purple-300 underline">confessionx@zohomail.in</a>
            </p>
          </div>

          <p className="mt-8 text-sm italic text-gray-400">
            By using ConfessionX, you confirm that you have read, understood, and agreed to these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
