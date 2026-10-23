import DocPageLayout from '@/components/DocPageLayout';
import { worksheetsGuide } from '@/data/docs/worksheets-guide';

export const metadata = {
    alternates: { canonical: '/docs/worksheets' },
    title: `${worksheetsGuide.title} - Opscel Documentation`,
    description: worksheetsGuide.description,
};

export default function WorksheetsDocPage() {
    return <DocPageLayout guide={worksheetsGuide} />;
}
