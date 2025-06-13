export function getPoints(task) {
  // 简单示例：朗读/上传截图/完成 = 10分
  return task.status ? 10 : 0;
}
