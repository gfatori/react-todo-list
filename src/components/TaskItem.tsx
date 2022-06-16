import { Trash } from 'phosphor-react';
import styles from './TaskItem.module.css';


interface TaskItemProps {
    id: string | null;
    taskTitle: string;
    isDone: boolean;
    onTaskStatusChange: (taskTitle: string) => void;
    onTaskDelete: (taskTitle: string) => void;
}

export function TaskItem({ id, isDone, taskTitle, onTaskStatusChange, onTaskDelete }: TaskItemProps) {
    function handleTaskStatusChange() {
        onTaskStatusChange(taskTitle);
    }

    async function handleTaskDelete() {
        onTaskDelete(taskTitle);
    }

    return (
        <div className={styles.task}>
            <input
                name='taskDone'
                key={id}
                className={styles.check}
                type="checkbox"
                checked={isDone}
                onChange={handleTaskStatusChange}
            >
            </input>
            {isDone ? (
                <del> {taskTitle} </del>)
                : (
                    <span> {taskTitle} </span>
                )}
            <button
                title='Excluir tarefa'
                className={styles.trash}
                onClick={handleTaskDelete}
            >
                <Trash size={32} />
            </button>
        </div>
    );
}