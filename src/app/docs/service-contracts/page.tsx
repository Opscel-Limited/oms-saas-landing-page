import DocPageLayout from '@/components/DocPageLayout';
import { serviceContractsGuide } from '@/data/docs/service-contracts-guide';

export const metadata = {
    alternates: { canonical: '/docs/service-contracts' },
    title: `${serviceContractsGuide.title} - Opscel Documentation`,
    description: serviceContractsGuide.description,
};

export default function ServiceContractsDocPage() {
    return <DocPageLayout guide={serviceContractsGuide} />;
}
