import DocPageLayout from '@/components/DocPageLayout';
import { quoteDefaultsGuide } from '@/data/docs/quote-defaults-guide';

export const metadata = {
    alternates: { canonical: '/docs/quote-defaults' },
    title: `${quoteDefaultsGuide.title} - Opscel Documentation`,
    description: quoteDefaultsGuide.description,
};

export default function QuoteDefaultsDocPage() {
    return <DocPageLayout guide={quoteDefaultsGuide} />;
}
