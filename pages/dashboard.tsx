import LearnCard from '../components/LearnCard';
import { useState } from 'react';

interface Task {
  id: number;
  title: string;
  status: boolean;
}

interface DashboardProps {
  lang?: 'zh' | 'en';
}

export default function Dashboard({ lang = 'zh' }: DashboardProps) {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: '朗读第1课', status: false },
    { id: 2, title: '背单词5个', status: false }
  ]);

  return (
    <div className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">{lang === 'en' ? 'Parent Dashboard' : '家长控制台'}</h2>
      <div className="space-y-2">
        {tasks.map(task => (
          <LearnCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}
