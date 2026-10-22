import { Metadata } from 'next';
import { telegramBotGuide } from '@/data/docs/telegram-bot-guide';
import DocPageLayout from '@/components/DocPageLayout';

export const metadata: Metadata = {
  alternates: { canonical: '/docs/telegram-bot' },
  title: `${telegramBotGuide.title} | Documentation | Opscel`,
  description: telegramBotGuide.description,
};

export default function TelegramBotPage() {
  return <DocPageLayout guide={telegramBotGuide} />;
}
