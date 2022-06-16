import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import styles from './TaskAdd.module.css'

interface Task  {
    id: string | null;
    isDone: boolean;
    taskTitle: string;
}

interface Tasks {
    tasks: Task[];
}

interface TaskAddProps {
    newTask: Task;
    onNewTask: (newTask: Task) => void;
    onTaskChange: (newTaskTitle: string) => void;
    taskList: Task[];
  }


export function TaskAdd ({ taskList, newTask, onNewTask, onTaskChange, }: TaskAddProps) {
    
    function handleNewTaskInvalid (event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Por favor, digite sua tarefa.')
    }

    function handleNewTask(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        onNewTask(newTask);
        console.log(newTask)
    }

    function handleTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        event.target.setCustomValidity('')
        let newTaskTitle = event.target.value;
        onTaskChange(newTaskTitle);
    }

    return (
        <form onSubmit={handleNewTask} className={styles.taskForm}>
            <input 
                name='taskAdd'
                className={styles.inputTask} 
                type="text" placeholder="Adicione uma nova tarefa"
                value={newTask.taskTitle}
                onChange={handleTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button className={styles.createButton} type="submit">
                 Criar 
                 <PlusCircle size={28} />
            </button>
        </form>
    );
}