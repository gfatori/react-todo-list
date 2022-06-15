import './global.css';

import styles from './App.module.css';
import { Header } from './components/Header';
import { TaskAdd } from './components/TaskAdd';
import { TaskTable } from './components/TaskTable';

function App() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.wrapper}>
        <main className={styles.mainContent}>
          <TaskAdd />
          <TaskTable />
        </main>
      </div>
    </div>
  )
}

export default App
