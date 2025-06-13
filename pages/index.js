import Link from 'next/link';

const I18N = {
  zh: {
    title: "🎓 Family Learn 已上线！",
    dashboard: "家长控制台",
    chat: "家庭留言",
  },
  en: {
    title: "🎓 Family Learn is Online!",
    dashboard: "Parent Dashboard",
    chat: "Family Chat",
  }
};

export default function Home({ lang }) {
  const t = I18N[lang] || I18N.zh;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="text-blue-600 underline">{t.dashboard}</Link>
        <Link href="/chat" className="text-blue-600 underline">{t.chat}</Link>
      </div>
    </main>
  );
}
