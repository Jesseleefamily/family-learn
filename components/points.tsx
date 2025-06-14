interface Task {
  status: boolean;
}

export function getPoints(task: Task): number {
  return task.status ? 10 : 0;
}
