import '../styles/globals.css';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [lang, setLang] = useState('zh');
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
