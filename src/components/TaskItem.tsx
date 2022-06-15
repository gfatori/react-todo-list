import { Trash } from 'phosphor-react';
import styles from './TaskItem.module.css';
import checkFalseHoverFalse from '../assets/checked_false_hover_false.svg';

export function TaskItem () {
    return (
        <div className={styles.task}>
            <input className={styles.check} type="checkbox">
            </input>
            <span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero tempora fugiat quaerat repellendus nihil aliquam dolorum soluta ullam dolor?</span>
            <Trash size={32}/>
        </div>
    );
}