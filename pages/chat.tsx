import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  Timestamp,
  orderBy,
  query
} from 'firebase/firestore';

interface Message {
  user: string;
  text: string;
  timestamp: Timestamp;
}

interface ChatProps {
  lang?: 'zh' | 'en';
}

const USER_LIST = ['爸爸', '妈妈', '姐姐', '哥哥', '我', '游客'];

export default function Chat({ lang = 'zh' }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const [user, setUser] = useState('我');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => doc.data() as Message);
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  async function sendMessage() {
    if (!text.trim()) return;
    await addDoc(collection(db, 'messages'), {
      user,
      text,
      timestamp: Timestamp.now()
    });
    setText('');
  }

  function formatTime(timestamp: Timestamp) {
    const date = timestamp.toDate();
    return `${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{lang === 'en' ? "Family Chat Board" : "家庭留言板"}</h2>
      
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor="userSelect">{lang === 'en' ? 'User:' : '用户：'}</label>
        <select id="userSelect" value={user} onChange={e => setUser(e.target.value)} className="border rounded px-2 py-1">
          {USER_LIST.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>

      <div className="bg-gray-100 h-60 p-4 rounded mb-4 overflow-y-auto space-y-2 border">
        {messages.map((m, i) => (
          <div key={i} className="bg-white p-2 rounded shadow">
            <div className="text-sm text-gray-600 mb-1">
              <b>{m.user}</b> · {formatTime(m.timestamp)}
            </div>
            <div>{m.text}</div>
          </div>
        ))}
      </div>

      <div className="flex">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          className="flex-1 border p-2 rounded-l"
          placeholder={lang === 'en' ? "Enter message..." : "请输入留言..."}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
        >
          {lang === 'en' ? "Send" : "发送"}
        </button>
      </div>
    </div>
  );
}
