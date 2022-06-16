import { TaskItem } from './TaskItem';
import styles from './TaskTable.module.css';


interface Tasks {
  tasks: Task[];
}

interface Task  {
  id: string | null;
  isDone: boolean;
  taskTitle: string;
}

interface TaskTableProps {
  tasks: Task[];
  taskStatusChange: (taskTitle: string) => void;
  onTaskDelete: (taskTitle: string) => void;
}

export function TaskTable ({ tasks, taskStatusChange, onTaskDelete }: TaskTableProps) {
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
                key={task.id}
                id={task.id} 
                taskTitle={task.taskTitle} 
                isDone={task.isDone}
                onTaskStatusChange={taskStatusChange}
                onTaskDelete={onTaskDelete}
                />
              );
            })
            }
            </div>
      </div>  
    );
}