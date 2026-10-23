import DocPageLayout from '@/components/DocPageLayout';
import { remedialScopeOfWorksGuide } from '@/data/docs/remedial-scope-of-works-guide';

export const metadata = {
    alternates: { canonical: '/docs/remedial-scope-of-works' },
    title: `${remedialScopeOfWorksGuide.title} - Opscel Documentation`,
    description: remedialScopeOfWorksGuide.description,
};

export default function RemedialScopeOfWorksDocPage() {
    return <DocPageLayout guide={remedialScopeOfWorksGuide} />;
}
