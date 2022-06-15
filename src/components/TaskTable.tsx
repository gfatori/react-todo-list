import { TaskItem } from './TaskItem';
import styles from './TaskTable.module.css';

interface Tasks {
  tasks: Task[];
}

interface Task  {
  isDone: boolean;
  taskTitle: string;
}

export function TaskTable ({ tasks }: Tasks) {
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
            {tasks.map((task) => {
              return (
                <TaskItem 
                key={task.taskTitle} 
                taskTitle={task.taskTitle} 
                isDone={task.isDone}
                />
              );
            })
            }
            
            {/* <TaskItem /> */}
            {/* <TaskItem /> */}
            {/* <TaskItem /> */}
            </div>
      </div>  
    );
}