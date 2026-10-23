import DocPageLayout from '@/components/DocPageLayout';
import { purchaseOrdersGuide } from '@/data/docs/purchase-orders-guide';

export const metadata = {
    alternates: { canonical: '/docs/purchase-orders' },
    title: `${purchaseOrdersGuide.title} - Opscel Documentation`,
    description: purchaseOrdersGuide.description,
};

export default function PurchaseOrdersDocPage() {
    return <DocPageLayout guide={purchaseOrdersGuide} />;
}
