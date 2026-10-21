import DocPageLayout from '@/components/DocPageLayout';
import { quoteSectionsAndKitsGuide } from '@/data/docs/quote-sections-and-kits-guide';

export const metadata = {
    title: `${quoteSectionsAndKitsGuide.title} - Opscel Documentation`,
    description: quoteSectionsAndKitsGuide.description,
};

export default function QuoteSectionsAndKitsDocPage() {
    return <DocPageLayout guide={quoteSectionsAndKitsGuide} />;
}
