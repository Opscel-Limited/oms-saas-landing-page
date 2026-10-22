import DocPageLayout from '@/components/DocPageLayout';
import { fireSafetyFeaturesGuide } from '@/data/docs/fire-safety-features-guide';

export const metadata = {
    alternates: { canonical: '/docs/fire-safety-features' },
    title: `${fireSafetyFeaturesGuide.title} - Opscel Documentation`,
    description: fireSafetyFeaturesGuide.description,
};

export default function FireSafetyFeaturesDocPage() {
    return <DocPageLayout guide={fireSafetyFeaturesGuide} />;
}
