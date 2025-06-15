
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const openFeedbackForm = () => {
    window.open('https://forms.gle/xY853C2WVSmivL8Z9', '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 border-t border-gray-700/50">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Enhanced Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-6 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
                <img 
                  src="/lovable-uploads/b0878ead-54eb-40b1-9283-51cd3e8f1354.png" 
                  alt="ConfessionX Logo" 
                  className="relative w-16 h-16 animate-glow-pulse hover:scale-110 transition-all duration-500"
                />
              </div>
              <div>
                <h3 className="font-playfair text-3xl font-bold">
                  <span className="text-white">Confession</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">X</span>
                </h3>
                <p className="text-gray-400 text-sm mt-1">Anonymous Stories Platform</p>
              </div>
            </div>
            <p className="text-gray-300 mb-8 max-w-md leading-relaxed text-lg">
              A safe space for anonymous confessions. Share your story, read others, 
              and find connection through authentic human experiences.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-500/50 transition-all duration-300" 
                asChild
              >
                <Link to="/about">About</Link>
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={openFeedbackForm}
                className="border-gray-600 text-gray-300 hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-pink-600/20 hover:border-purple-500/50 transition-all duration-300"
              >
                Feedback
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#confessions-feed" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Browse Confessions
                </a>
              </li>
              <li>
                <a href="#" onClick={() => window.open('https://forms.gle/dhDrLy9GJSoJrjBc8', '_blank')} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Submit Confession
                </a>
              </li>
              <li>
                <Link to="/profile" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  About Anonymity
                </Link>
              </li>
              <li>
                <Link to="/community-guidelines" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Community Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6 relative">
              Legal & Support
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </h4>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/content-policy" className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Content Policy
                </Link>
              </li>
              <li>
                <a href="#" onClick={openFeedbackForm} className="text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer flex items-center group">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  Send Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Separator className="bg-gradient-to-r from-transparent via-gray-700 to-transparent" />

      {/* Enhanced Bottom Footer */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0 flex items-center gap-2">
            <span className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></span>
            © {currentYear} ConfessionX. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30">
              100% Anonymous
            </span>
            <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
              Secure Platform
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
