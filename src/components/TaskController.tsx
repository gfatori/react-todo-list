import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TaskAdd } from "./TaskAdd";
import { TaskTable } from "./TaskTable";

import styles from './TaskController.module.css';

interface Tasks {
    tasks: Task[];
}
  
 interface Task  {
   isDone: boolean;
   taskTitle: string;
}

export function TaskController ({ tasks }: Tasks) {
    const initialTasks: Task[] = tasks;
    const emptyTask: Task = { isDone: false, taskTitle: '' };
    const [taskList, setTaskList] = useState(initialTasks);
    const [newTask, setNewTask] = useState(emptyTask);

    function NewTaskChange (newTaskTitle: string) {
        setNewTask({ taskTitle: newTaskTitle, isDone: false });
      }
    
    function CreateNewTask (newTask: Task) {
        setTaskList([...taskList, newTask]) // sets the new task to the taskList
        setNewTask({ taskTitle: '', isDone: false }); // clears the task state
    }

    return (
        <div className={styles.taskControllerContainer}>
            <TaskAdd 
            newTask={newTask}
            taskList={taskList}
            onNewTask={CreateNewTask}
            onTaskChange={NewTaskChange}
            />
            <TaskTable 
            tasks={taskList}
            />
        </div>
    );
}