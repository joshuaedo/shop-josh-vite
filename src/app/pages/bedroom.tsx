import { Page } from '@/components/common/page';
import { Bedroom } from '@/features/bedroom/components/bedroom';
import { bedroomHotspots, blurDataUrl } from '@/features/bedroom/lib/db';

export default function BedroomPage() {
  return (
    <>
      <Page>
        <Bedroom blurDataURL={blurDataUrl} hotspots={bedroomHotspots} />
      </Page>
    </>
  );
}
