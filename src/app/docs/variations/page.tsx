import DocPageLayout from '@/components/DocPageLayout';
import { variationsGuide } from '@/data/docs/variations-guide';

export const metadata = {
    title: `${variationsGuide.title} - Opscel Documentation`,
    description: variationsGuide.description,
};

export default function VariationsDocPage() {
    return <DocPageLayout guide={variationsGuide} />;
}
