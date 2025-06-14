
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Shield, Zap } from 'lucide-react';

const SubmitSection = () => {
  const openSubmissionForm = () => {
    window.open('https://forms.gle/dhDrLy9GJSoJrjBc8', '_blank');
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <div className="mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Want to Confess Something?
          </h2>
          <p className="text-xl text-gray-300 mb-4">
            We'll publish it anonymously. No judgment. No identity.
          </p>
          <p className="text-lg text-gray-400">
            Your story could help someone else feel less alone.
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Submit Anonymously</h3>
              <p className="text-gray-400 text-sm">
                Share your story through our secure Google Form. Text or audio - your choice.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">We Review & Publish</h3>
              <p className="text-gray-400 text-sm">
                All confessions are reviewed for safety before being published to protect everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500/50 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Help Others</h3>
              <p className="text-gray-400 text-sm">
                Your confession might be exactly what someone needs to hear today.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Submission Details */}
        <Card className="bg-gray-800/30 border-gray-700 mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">What You Can Submit</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-lg font-medium text-purple-300 mb-3">Text Confessions</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Any length - short or long</li>
                  <li>• Personal experiences</li>
                  <li>• Thoughts and feelings</li>
                  <li>• Life stories and secrets</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-medium text-pink-300 mb-3">Audio Confessions</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• MP3 or WAV format</li>
                  <li>• Maximum 10MB file size</li>
                  <li>• Voice recordings welcome</li>
                  <li>• Optional with text</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Button */}
        <Button
          onClick={openSubmissionForm}
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
        >
          Submit via Google Form
        </Button>

        <p className="text-sm text-gray-500 mt-4">
          All submissions are completely anonymous and secure
        </p>
      </div>
    </section>
  );
};

export default SubmitSection;
