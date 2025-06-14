
import AdBanner from './ads/AdBanner';
import AdSidebar from './ads/AdSidebar';

interface AdSpaceProps {
  type: 'banner' | 'square';
}

const AdSpace = ({ type }: AdSpaceProps) => {
  if (type === 'banner') {
    return (
      <section className="py-8 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <AdBanner
            title="Advertisement Space"
            size="728 x 90 Banner"
            description="Promote your business here - Click to add your link"
            linkUrl="#"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="py-8 px-4 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3"></div>
          <AdSidebar linkUrl="#" />
        </div>
      </div>
    </section>
  );
};

export default AdSpace;
