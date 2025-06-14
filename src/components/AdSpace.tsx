
import AdBanner from './ads/AdBanner';

interface AdSpaceProps {
  type: 'banner' | 'square' | 'inline';
  position?: 'top' | 'middle' | 'bottom';
}

const AdSpace = ({ type, position = 'middle' }: AdSpaceProps) => {
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

  if (type === 'square') {
    return (
      <section className="py-8 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AdBanner
              title="Square Ad Space 1"
              size="300 x 250"
              description="Premium ad placement - Add your link"
              linkUrl="#"
              className="aspect-square"
            />
            <AdBanner
              title="Square Ad Space 2"
              size="300 x 250"
              description="Premium ad placement - Add your link"
              linkUrl="#"
              className="aspect-square"
            />
            <div className="hidden lg:block">
              <AdBanner
                title="Square Ad Space 3"
                size="300 x 250"
                description="Premium ad placement - Add your link"
                linkUrl="#"
                className="aspect-square"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Inline ad for between confession cards
  return (
    <div className="my-8">
      <AdBanner
        title="Sponsored Content"
        size="Native Ad"
        description="Your advertisement here - Click to add link"
        linkUrl="#"
        className="max-w-md mx-auto"
      />
    </div>
  );
};

export default AdSpace;
