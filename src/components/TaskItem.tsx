import { Trash } from 'phosphor-react';
import styles from './TaskItem.module.css';
import checkFalseHoverFalse from '../assets/checked_false_hover_false.svg';

interface Task {
    isDone: boolean;
    taskTitle: string;
}

export function TaskItem ({ isDone, taskTitle }: Task) {
    return (
        <div className={styles.task}>
            <input className={styles.check} type="checkbox">
            </input>
            <span> {taskTitle} </span>
            <Trash size={32}/>
        </div>
    );
}