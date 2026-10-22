import DocPageLayout from '@/components/DocPageLayout';
import { calendarIntegrationGuide } from '@/data/docs/calendar-integration-guide';

export const metadata = {
    alternates: { canonical: '/docs/calendar-integration' },
    title: `${calendarIntegrationGuide.title} - Opscel Documentation`,
    description: calendarIntegrationGuide.description,
};

export default function CalendarIntegrationDocPage() {
    return <DocPageLayout guide={calendarIntegrationGuide} />;
}
