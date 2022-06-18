import { Trash } from 'phosphor-react';
import { CheckBox } from './Checkbox';
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
            <CheckBox
            checkedInitialState={isDone}
            onClick={handleTaskStatusChange}
            />
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