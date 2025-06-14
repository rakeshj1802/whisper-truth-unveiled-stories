
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white"> {/* Added background and ensured min height */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20"> {/* Added responsive padding */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-playfair text-center">Terms of Service</h1> {/* Centered title and used Playfair */}
        <p className="mb-4 text-gray-400 text-center">Effective Date: June 14, 2025</p> {/* Centered date */}

        <div className="space-y-8 bg-gray-800/50 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700"> {/* Added a container for better readability */}
          <p className="mb-4 text-gray-300">
            Welcome to <strong>ConfessionX</strong> — a community-driven platform that allows users to view and submit anonymous confessions, both in text and audio format. By accessing or using this site, you agree to be bound by the following terms and conditions.
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">1. Use of the Site</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX is provided for informational and entertainment purposes only. You may freely browse and interact with the website, subject to these terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">2. No Login or Account Required</h2>
            <p className="mb-4 text-gray-300">
              You do not need to create an account to use ConfessionX. All interactions occur anonymously, and we do not collect personal user data.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">3. Content Ownership & Responsibility</h2>
            <p className="mb-4 text-gray-300">
              All confessions displayed are submitted by users via third-party forms. ConfessionX does not claim ownership over any user-submitted content.
              However, we reserve the right to moderate, remove, or reject any content that violates our <Link to="/content-policy" className="text-purple-400 hover:text-purple-300 underline">Content Policy</Link>.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">4. Prohibited Uses</h2>
            <p className="mb-4 text-gray-300">
              Users must not submit or promote any content that is illegal, hateful, abusive, threatening, explicit, defamatory, or that violates someone’s privacy.
              Any such content will be removed immediately upon discovery.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">5. Intellectual Property</h2>
            <p className="mb-4 text-gray-300">
              The design, branding, code, and structure of ConfessionX belong solely to the creators of the platform. You may not copy, duplicate, or redistribute the content layout or structure without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">6. Third-Party Services</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX uses external tools (like Google Forms) for collecting user submissions. These services operate under their own terms and privacy policies, which we do not control.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">7. Limitation of Liability</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX and its team shall not be held responsible for any damages resulting from your use of the website or reliance on user-submitted content. All confessions are fictional or opinion-based and should not be considered factual or verified.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">8. Termination</h2>
            <p className="mb-4 text-gray-300">
              We reserve the right to restrict access to ConfessionX or remove any content that violates these terms or any applicable law, at our sole discretion.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">9. Changes to Terms</h2>
            <p className="mb-4 text-gray-300">
              These Terms of Service may be updated from time to time. Continued use of the site after changes are posted constitutes your acceptance of those changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">10. Contact Us</h2>
            <p className="mb-4 text-gray-300">
              For questions, concerns, or legal notices, please email us at: <a href="mailto:confessionx@zohomail.in" className="text-purple-400 hover:text-purple-300 underline">confessionx@zohomail.in</a>
            </p>
          </div>

          <p className="mt-8 text-sm italic text-gray-400">
            By using ConfessionX, you acknowledge and accept these Terms of Service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;

