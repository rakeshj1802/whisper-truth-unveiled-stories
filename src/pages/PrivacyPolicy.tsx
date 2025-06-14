
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
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
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 font-playfair text-center">Privacy Policy</h1>
        <p className="mb-4 text-gray-400 text-center">Effective Date: June 14, 2025</p>

        <div className="space-y-8 bg-gray-800/50 p-6 sm:p-8 rounded-lg shadow-lg border border-gray-700">
          <p className="mb-4 text-gray-300">
            ConfessionX ("we," "us," or "our") is committed to protecting your privacy. We believe that individuals have the right to express themselves anonymously, especially concerning personal and adult themes, without fear of surveillance, profiling, or data misuse. This Privacy Policy outlines our approach to data (or lack thereof) on the ConfessionX platform (the "Site").
          </p>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">1. No Personal Data Collection</h2>
            <p className="mb-4 text-gray-300">
              The Site is designed for anonymity. We do <strong>not</strong> require, request, or store any personally identifiable information (PII). You do not need to create an account, provide an email address, username, or share any contact details to use our platform. Your use of the Site is intended to be entirely anonymous.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">2. Anonymous Submissions & Content Nature</h2>
            <p className="mb-4 text-gray-300">
              All confessions, stories, fantasies, and experiences (collectively, "Content") are submitted anonymously through a third-party form service (e.g., Google Forms). We manually review submissions for compliance with our Content Policy before publication. Any submissions appearing to contain sensitive or directly identifying personal information may be edited for anonymity or declined for publication.
            </p>
            <p className="mb-4 text-gray-300">
              All Content displayed on the Site is presumed to be fictional, an expression of anonymous opinion, or a creative work. No verification of authenticity is performed or implied.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">3. No Cookies or Tracking Technologies</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX does <strong>not</strong> use cookies, web beacons, analytics tools, advertising networks, or any other tracking technologies that collect or monitor user behavior on our Site. Your visit is intended to be private.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">4. Data Storage: Static JSON Files</h2>
            <p className="mb-4 text-gray-300">
              All Content displayed on this Site is stored and served from static JSON files. No databases, server-side backends, or external data collection APIs (beyond the submission form) are used by the Site itself. This architecture maximizes security and transparency regarding the data presented.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">5. External Form Providers</h2>
            <p className="mb-4 text-gray-300">
              We utilize third-party services like Google Forms for Content submission and feedback. Your interaction with these forms is governed by the respective third party's privacy policy. We encourage you to review their policies before submitting any information. For example, Google's Privacy Policy can be found at: <a className="text-purple-400 hover:text-purple-300 underline" href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a>. We do not control and are not responsible for the privacy practices of these third-party services.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">6. Minors' Privacy (Users Must Be 18+)</h2>
            <p className="mb-4 text-gray-300">
              ConfessionX is intended exclusively for adults aged <strong>18 years and older</strong>. The Site hosts content, including discussions of sexual fantasies, desires, and personal experiences, that is not suitable for individuals under the age of 18. We do not knowingly collect or solicit any information from anyone under the age of 18 or knowingly allow such persons to submit Content. If you are under 18, please do not use this Site or send any information about yourself to us.
            </p>
            <p className="mb-4 text-gray-300">
              If we learn that we have inadvertently received a submission from an individual under 18, or Content that appears to be from or about an individual under 18 in a manner that violates our policies, we will remove that Content as quickly as possible. If you believe that Content on the Site may originate from or concern a minor, please contact us immediately using the details in Section 8.
            </p>
          </div>
          
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">7. Compliance with Indian Law</h2>
            <p className="mb-4 text-gray-300">
              While ConfessionX is designed to minimize data handling, we are committed to operating in accordance with applicable Indian laws, including the Digital Personal Data Protection Act (DPDPA), 2023, to the extent it applies to our operations. Given our no-personal-data collection model, our primary compliance focus is on content legality and user safety as outlined in our Content Policy and Terms of Service.
            </p>
          </div>

          <div id="contact">
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-pink-400">8. Data Removal, Content Concerns & Contact</h2>
            <p className="mb-4 text-gray-300">
              If you have submitted Content and wish for it to be removed, or if you believe any Content on the Site violates your privacy (despite our anonymization efforts) or our policies, please contact us at: <a className="text-purple-400 hover:text-purple-300 underline" href="mailto:confessionx@zohomail.in">confessionx@zohomail.in</a>. We will review requests on a case-by-case basis.
            </p>
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-semibold mt-8 mb-4 text-purple-300">9. Changes to This Privacy Policy</h2>
            <p className="mb-4 text-gray-300">
              We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or operational needs. Any changes will be posted on this page with an updated effective date. Your continued use of the Site after such changes constitutes your acceptance of the new Privacy Policy.
            </p>
          </div>

          <p className="mt-8 text-sm italic text-gray-400">
            By using ConfessionX, you acknowledge that you have read, understood, and agree to this Privacy Policy, and confirm that you are 18 years of age or older.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

