import DocPageLayout from '@/components/DocPageLayout';
import { fireDoorsGuide } from '@/data/docs/fire-doors-guide';

export const metadata = {
    alternates: { canonical: '/docs/fire-doors' },
    title: `${fireDoorsGuide.title} - Opscel Documentation`,
    description: fireDoorsGuide.description,
};

export default function FireDoorsDocPage() {
    return <DocPageLayout guide={fireDoorsGuide} />;
}
