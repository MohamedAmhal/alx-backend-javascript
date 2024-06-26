export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
   const task = true; // disabled
   const task2 = false; // disabled
  }

  return [task, task2];
}
