import DocPageLayout from '@/components/DocPageLayout';
// Imported directly, not through '@/data/docs': the guide is unlisted until the Digital Fire Logbook launches.
import { digitalFireLogbookGuide } from '@/data/docs/digital-fire-logbook-guide';

export const metadata = {
    title: `${digitalFireLogbookGuide.title} - Opscel Documentation`,
    description: digitalFireLogbookGuide.description,
    // LAUNCH: remove this robots line and add `alternates: { canonical: '/docs/digital-fire-logbook' }` like the other
    // guides. A noindex page carries no canonical.
    robots: { index: false, follow: false },
};

export default function DigitalFireLogbookDocPage() {
    return <DocPageLayout guide={digitalFireLogbookGuide} />;
}
