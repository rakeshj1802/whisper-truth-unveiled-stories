import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Button } from '@/components/ui/button'; // Import Button
import { ArrowLeft } from 'lucide-react'; // Import ArrowLeft icon


const PrivacyPolicy = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="mb-8"> {/* Added margin bottom for spacing */}
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="text-purple-400 hover:text-purple-300 hover:bg-purple-500/20"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back
          </Button>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-playfair text-center">Privacy Policy</h1> {/* Centered title and used Playfair */}
        <p className="mb-4 text-gray-400 text-center">Effective Date: June 14, 2025</p> {/* Centered date */}

        <div className="space-y-8 bg-gray-800/50 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700"> {/* Added a container for better readability */}
          <p className="mb-4 text-gray-300">
            ConfessionX is committed to protecting your privacy. We believe that everyone has the right to express themselves anonymously, without fear of surveillance, profiling, or data misuse.
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">1. No Personal Data Collection</h2>
            <p className="mb-4 text-gray-300">
              We do <strong>not</strong> require or store any personally identifiable information (PII). You do not need to create an account, provide an email address, or share any contact details to use our platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">2. Anonymous Submissions</h2>
            <p className="mb-4 text-gray-300">
              All confessions (text or audio) are submitted through a third-party form service (e.g., Google Forms) and are reviewed manually. We remove any submissions containing sensitive or personally identifying information before publication.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">3. No Cookies or Tracking</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX does not use cookies, third-party trackers, analytics tools, or advertising networks that collect or monitor user behavior.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">4. Static JSON Data</h2>
            <p className="mb-4 text-gray-300">
              All content on this site is stored and served from static JSON files. No databases, backends, or external data collection APIs are used. This ensures maximum security and full control over data transparency.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">5. External Form Providers</h2>
            <p className="mb-4 text-gray-300">
              We use Google Forms for submission and feedback. These forms are governed by Google's privacy policies. We recommend reviewing their privacy policy before submitting anything: <a className="text-purple-400 hover:text-purple-300 underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">6. Children’s Privacy</h2>
            <p className="mb-4 text-gray-300">
              This site is not intended for individuals under the age of 13. We do not knowingly collect or display content from minors. If you believe a confession violates this policy, please contact us immediately for removal.
            </p>
          </div>

          <div id="contact"> {/* Added id for linking */}
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">7. Data Removal & Contact</h2>
            <p className="mb-4 text-gray-300">
              If you would like to request the removal of any content you have submitted or believe your privacy has been violated, please email us at: <a className="text-purple-400 hover:text-purple-300 underline" href="mailto:confessionx@zohomail.in">confessionx@zohomail.in</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">8. Changes to This Policy</h2>
            <p className="mb-4 text-gray-300">
              We may update this Privacy Policy as required by law or operational needs. Any changes will be posted here with the updated effective date.
            </p>
          </div>

          <p className="mt-8 text-sm italic text-gray-400">
            ConfessionX operates with transparency and respect for user privacy. By using our platform, you agree to the terms outlined above.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
