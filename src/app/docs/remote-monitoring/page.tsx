import DocPageLayout from '@/components/DocPageLayout';
import { remoteMonitoringGuide } from '@/data/docs/remote-monitoring-guide';

export const metadata = {
    alternates: { canonical: '/docs/remote-monitoring' },
    title: `${remoteMonitoringGuide.title} - Opscel Documentation`,
    description: remoteMonitoringGuide.description,
};

export default function RemoteMonitoringDocPage() {
    return <DocPageLayout guide={remoteMonitoringGuide} />;
}
