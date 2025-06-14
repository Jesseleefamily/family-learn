import '../styles/globals.css';
import { useState } from 'react';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState<'zh' | 'en'>('zh');

  return (
    <div>
      <div className="flex justify-end p-2">
        <button onClick={() => setLang('zh')} className="mr-2">中文</button>
        <button onClick={() => setLang('en')}>English</button>
      </div>
      <Component {...pageProps} lang={lang} setLang={setLang} />
    </div>
  );
}
