import { useState } from 'react';

export default function Chat({ lang }) {
  const [messages, setMessages] = useState([
    { user: '爸爸', text: '今天谁完成了任务？' },
    { user: '妈妈', text: '孩子棒棒哒！' }
  ]);
  const [text, setText] = useState('');

  function sendMessage() {
    if (!text.trim()) return;
    setMessages([...messages, { user: '我', text }]);
    setText('');
  }

  return (
    <div className="max-w-lg mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">家庭留言板</h2>
      <div className="bg-gray-100 h-60 p-4 rounded mb-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i}><b>{m.user}：</b>{m.text}</div>
        ))}
      </div>
      <div className="flex">
        <input value={text} onChange={e => setText(e.target.value)} className="flex-1 border p-2 rounded-l" />
        <button onClick={sendMessage} className="bg-blue-500 text-white px-4 rounded-r">发送</button>
      </div>
    </div>
  );
}
