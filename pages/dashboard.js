import LearnCard from '@/components/LearnCard';
import { useState } from 'react';

export default function Dashboard({ lang }) {
  // 示例：假数据
  const [tasks, setTasks] = useState([
    { id: 1, title: '朗读第1课', status: false },
    { id: 2, title: '背单词5个', status: false }
  ]);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">家长控制台</h2>
      <div className="space-y-2">
        {tasks.map(task => (
          <LearnCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
