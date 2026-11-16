import DocPageLayout from '@/components/DocPageLayout';
import { fireRiskAssessmentsGuide } from '@/data/docs/fire-risk-assessments-guide';

export const metadata = {
    alternates: { canonical: '/docs/fire-risk-assessments' },
    title: `${fireRiskAssessmentsGuide.title} - Opscel Documentation`,
    description: fireRiskAssessmentsGuide.description,
};

export default function FireRiskAssessmentsDocPage() {
    return <DocPageLayout guide={fireRiskAssessmentsGuide} />;
}
