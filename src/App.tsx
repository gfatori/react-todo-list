import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskAdd } from './components/TaskAdd';
import { TaskTable } from './components/TaskTable';

const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae saepe dignissimos perferendis ducimus.'


interface Task  {
  isDone: boolean;
  taskTitle: string;
}

// interface Tasks extends Array<Task> {}

const tasks: Task[] = [
  { isDone: false, taskTitle: "[111] - " + lorem },
  { isDone: false, taskTitle: "[222] - " + lorem },
  { isDone: false, taskTitle: "[333] - " + lorem },
  { isDone: true, taskTitle: "[444] - " + lorem },
  { isDone: true, taskTitle: "[555] - " + lorem },
];

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.mainContent}>
          <TaskAdd />
          <TaskTable tasks={tasks}/>
        </main>
      </div>
    </div>
  )
}

export default App
