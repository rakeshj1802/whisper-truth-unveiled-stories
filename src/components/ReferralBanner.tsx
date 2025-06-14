
import { Card, CardContent } from "@/components/ui/card";
import { Gift } from 'lucide-react';

const ReferralBanner = () => {
  return (
    <section className="py-12 px-4 bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 overflow-hidden">
          <CardContent className="p-8 text-center relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-4 w-8 h-8 border border-purple-400 rounded-full"></div>
              <div className="absolute top-12 right-8 w-4 h-4 bg-pink-400 rounded-full"></div>
              <div className="absolute bottom-8 left-12 w-6 h-6 border border-purple-400 rounded"></div>
              <div className="absolute bottom-4 right-4 w-5 h-5 bg-purple-400 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <Gift className="w-8 h-8 text-purple-400 mr-3" />
                <span className="text-3xl">🎁</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Earn Coins by Referring Friends
              </h3>
              
              <p className="text-lg text-gray-300 mb-2">
                Coming Soon!
              </p>
              
              <p className="text-gray-400">
                Get rewarded for growing our anonymous confession community
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ReferralBanner;
