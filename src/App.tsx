import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskAdd } from './components/TaskAdd';
import { TaskTable } from './components/TaskTable';
import { TaskController } from './components/TaskController';
import { v4 as uuidv4 } from 'uuid';

const lorem = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae saepe dignissimos perferendis ducimus.'


interface Task {
  id: string | null;
  isDone: boolean;
  taskTitle: string;
}

const tasks: Task[] = [
  { id: uuidv4(), isDone: false, taskTitle: "[1] - " + "Texto pequeno para teste." },
  { id: uuidv4(), isDone: false, taskTitle: "[2] - " + lorem },
  { id: uuidv4(), isDone: false, taskTitle: "[3] - " + lorem },
  { id: uuidv4(), isDone: true, taskTitle: "[4] - " + lorem },
  { id: uuidv4(), isDone: true, taskTitle: "[5] - " + lorem },
  { id: uuidv4(), isDone: false, taskTitle: "[6] - " + "Não quero fazer essa task!" },
];

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.mainContent}>
          <TaskController tasks={tasks} />
        </main>
      </div>
    </div>
  )
}

export default App
