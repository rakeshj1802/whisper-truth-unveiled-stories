
import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import { Button } from '@/components/ui/button'; // Import Button
import { ArrowLeft } from 'lucide-react'; // Import ArrowLeft icon

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-gray-200 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
        <header className="mb-12 text-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-white">
            About <span className="text-purple-400">Confession</span><span className="text-pink-400">X</span>
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            Discover the heart and soul behind our anonymous platform.
          </p>
        </header>

        <div className="space-y-10 bg-gray-800/50 p-6 sm:p-10 rounded-xl shadow-2xl shadow-purple-500/10 border border-gray-700">
          <section>
            <p className="text-lg leading-relaxed text-gray-300 mb-6">
              <strong>ConfessionX</strong> is a digital sanctuary where individuals from all walks of life can express their thoughts, secrets, experiences, and emotions—without fear of judgment or exposure. Our core mission is to cultivate a safe, honest, and anonymous environment where users can share and read real, raw, and sometimes profound confessions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">
              No Accounts. No Tracking. No Judgments.
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              ConfessionX champions true anonymity. We do not require logins or registrations. We do not collect personal data. All confessions are managed through static content, ensuring complete privacy for both submitters and readers. Your voice is safe here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-300 mb-4">
              Built for Authentic Expression
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              ConfessionX was conceived for those who need a space to vent, share untold stories, or speak their truth—without facing social or emotional repercussions. Whether you're confessing a mistake, a moment of love, guilt, regret, or joy—this is your canvas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">How It Works</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 pl-4">
              <li>Browse anonymous confessions curated from real users.</li>
              <li>Read full confessions freely—no paywalls, no sign-ups.</li>
              <li>Submit your own text or audio confessions using our secure, anonymous submission form.</li>
              <li>Stories are shared to foster connection and understanding.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-pink-300 mb-4">Our Commitments (What We Don’t Do)</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-300 pl-4">
              <li>We <strong>do not</strong> track users, use cookies, or save IP addresses.</li>
              <li>We <strong>do not</strong> display likes, votes, or follower counts.</li>
              <li>We <strong>do not</strong> facilitate direct replies or threaded conversations to maintain the integrity of one-way expression.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-4">Built With Purpose & Respect</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              ConfessionX is a passion project designed to enable free expression with an unwavering commitment to user respect and zero surveillance. It’s lightweight, fast, and open to everyone globally.
            </p>
          </section>

          <footer className="mt-12 border-t border-gray-700 pt-8 text-center">
            <p className="text-md italic text-gray-400">
              We believe anonymity can be healing—and that expression without consequence can change lives.
            </p>
            <p className="mt-4 text-gray-500">
              Need to get in touch? <Link to="/privacy-policy#contact" className="text-purple-400 hover:underline">Contact us</Link>.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default About;
