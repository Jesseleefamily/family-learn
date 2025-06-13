import Link from 'next/link';

export default function Home({ lang }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-4">🎓 Family Learn 已上线！</h1>
      <div className="space-x-4">
        <Link href="/dashboard" className="text-blue-600 underline">家长控制台</Link>
        <Link href="/chat" className="text-blue-600 underline">家庭留言</Link>
      </div>
    </main>
  );
}
