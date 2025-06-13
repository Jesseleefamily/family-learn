import { useState, useEffect } from 'react';

export default function CountdownTimer({ seconds = 600 }) {
  const [time, setTime] = useState(seconds);
  useEffect(() => {
    if (time <= 0) return;
    const t = setTimeout(() => setTime(time - 1), 1000);
    return () => clearTimeout(t);
  }, [time]);
  return (
    <div className="p-2 border rounded text-lg">
      游戏剩余时间：{Math.floor(time / 60)}分{time % 60}秒
    </div>
  );
}
