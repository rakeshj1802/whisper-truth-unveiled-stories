import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openFeedbackForm = () => {
    window.open('https://forms.gle/xY853C2WVSmivL8Z9', '_blank');
  };

  return (
    <footer className="bg-gray-800 border-t border-gray-700">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold text-white mb-4">
              Confession<span className="text-purple-400">X</span>
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              A safe space for anonymous confessions. Share your story, read others, 
              and find connection through authentic human experiences.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-700" asChild>
                <Link to="/about">About</Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={openFeedbackForm}
                className="border-gray-600 text-gray-300 hover:bg-gray-700"
              >
                Feedback
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#confessions-feed" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Browse Confessions
                </a>
              </li>
              <li>
                <a href="#" onClick={() => window.open('https://forms.gle/dhDrLy9GJSoJrjBc8', '_blank')} className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  Submit Confession
                </a>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-purple-400 transition-colors">
                  About Anonymity
                </Link>
              </li>
              <li>
                <Link to="/community-guidelines" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal & Support</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/content-policy" className="text-gray-400 hover:text-purple-400 transition-colors">
                  Content Policy
                </Link>
              </li>
              <li>
                <a href="#" onClick={openFeedbackForm} className="text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                  Send Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} ConfessionX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
