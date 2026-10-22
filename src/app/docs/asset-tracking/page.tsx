import DocPageLayout from '@/components/DocPageLayout';
import { assetTrackingGuide } from '@/data/docs/asset-tracking-guide';

export const metadata = {
    alternates: { canonical: '/docs/asset-tracking' },
    title: `${assetTrackingGuide.title} - Opscel Documentation`,
    description: assetTrackingGuide.description,
};

export default function AssetTrackingDocPage() {
    return <DocPageLayout guide={assetTrackingGuide} />;
}
