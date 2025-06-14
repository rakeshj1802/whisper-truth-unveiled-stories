
import { Card, CardContent } from "@/components/ui/card";

interface AdSpaceProps {
  type: 'banner' | 'square';
}

const AdSpace = ({ type }: AdSpaceProps) => {
  if (type === 'banner') {
    return (
      <section className="py-8 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-r from-gray-800 to-gray-700 border-gray-600">
            <CardContent className="p-8 text-center">
              <div className="flex flex-col items-center justify-center min-h-[120px]">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">📢</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-300 mb-2">Advertisement Space</h3>
                <p className="text-gray-500">728 x 90 Banner Ad</p>
                <p className="text-sm text-gray-600 mt-2">Promote your business here</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3"></div>
          <Card className="bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600">
            <CardContent className="p-6 text-center">
              <div className="flex flex-col items-center justify-center min-h-[300px]">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-xl">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-300 mb-2">Ad Space</h3>
                <p className="text-gray-500 text-sm">300 x 250</p>
                <p className="text-xs text-gray-600 mt-2">Sidebar Advertisement</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AdSpace;
