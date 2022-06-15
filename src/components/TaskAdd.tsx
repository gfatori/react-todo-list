import { PlusCircle } from 'phosphor-react';
import styles from './TaskAdd.module.css'

export function TaskAdd () {
    return (
        <form className={styles.taskForm}>
            <input className={styles.inputTask} type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.createButton} type="submit">
                 Criar 
                 <PlusCircle size={28} />
            </button>
        </form>
    );
}