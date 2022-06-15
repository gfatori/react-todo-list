import { TaskItem } from './TaskItem';
import styles from './TaskTable.module.css';

export function TaskTable () {
    return (
      <div className={styles.taskTableContainer}>
          <header className={styles.header}>
            <div className={styles.countContainer}>
                <strong>Tarefas criadas</strong>
                <div className={styles.tasksCount}> 5 </div>
            </div>
            <div className={styles.countContainer}>
                <strong> Concluídas </strong>
                <button className={styles.tasksDoneCount}> 2 de 5</button>
            </div>
          </header>
            <div className={styles.taskList}>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            </div>
      </div>  
    );
}