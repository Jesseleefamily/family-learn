import { useState } from 'react';

const USER_LIST = ['爸爸', '妈妈', '姐姐', '哥哥', '我', '游客'];

export default function Chat({ lang }) {
  const [messages, setMessages] = useState([
    { user: '爸爸', text: '今天谁完成了任务？' },
    { user: '妈妈', text: '孩子棒棒哒！' }
  ]);
  const [text, setText] = useState('');
  const [user, setUser] = useState('我');

  function sendMessage() {
    if (!text.trim()) return;
    setMessages([...messages, { user, text }]);
    setText('');
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{lang === 'en' ? "Family Chat Board" : "家庭留言板"}</h2>
      <div className="mb-2">
        <select value={user} onChange={e => setUser(e.target.value)} className="border rounded px-2 py-1">
          {USER_LIST.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
      </div>
      <div className="bg-gray-100 h-60 p-4 rounded mb-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i}><b>{m.user}：</b>{m.text}</div>
        ))}
      </div>
      <div className="flex">
        <input value={text} onChange={e => setText(e.target.value)} className="flex-1 border p-2 rounded-l" />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r">{lang === 'en' ? "Send" : "发送"}</button>
      </div>
    </div>
  );
}
