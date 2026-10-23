import DocPageLayout from '@/components/DocPageLayout';
import { assetLifecycleGuide } from '@/data/docs/asset-lifecycle-guide';

export const metadata = {
    alternates: { canonical: '/docs/asset-lifecycle' },
    title: `${assetLifecycleGuide.title} - Opscel Documentation`,
    description: assetLifecycleGuide.description,
};

export default function AssetLifecycleDocPage() {
    return <DocPageLayout guide={assetLifecycleGuide} />;
}
