import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  status: boolean;
}

interface LearnCardProps {
  task: Task;
}

export default function LearnCard({ task }: LearnCardProps) {
  const [done, setDone] = useState<boolean>(task.status);
  const [image, setImage] = useState<string | null>(null);

  function upload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setDone(true);
    }
  }

  return (
    <div className="border rounded p-4 flex items-center">
      <span className={done ? "line-through flex-1" : "flex-1"}>{task.title}</span>
      <input type="file" accept="image/*" className="mr-2" onChange={upload} />
      {image && <img src={image} alt="截图" className="w-12 h-12 object-cover rounded" />}
      <button
        className={`ml-2 px-2 py-1 rounded ${done ? 'bg-green-500 text-white' : 'bg-gray-300'}`}
        onClick={() => setDone(true)}
        disabled={done}
      >
        {done ? "已完成" : "打卡"}
      </button>
    </div>
  );
}
