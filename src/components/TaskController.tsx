import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { TaskAdd } from "./TaskAdd";
import { TaskTable } from "./TaskTable";
import { v4 as uuidv4 } from 'uuid';

import styles from './TaskController.module.css';

interface Tasks {
    tasks: Task[];
}
  
interface Task  {
    id: string | null;
    isDone: boolean;
    taskTitle: string;
 }

export function TaskController ({ tasks }: Tasks) {
    const initialTasks: Task[] = tasks;
    const [taskList, setTaskList] = useState(initialTasks);
    const [newTask, setNewTask] = useState<{ id: null | string, isDone: false | boolean, taskTitle: '' | string}>({ id: null, isDone: false, taskTitle: '' });

    const [doneCounter, setDoneCounter] = useState(countDoneTasks(tasks));

    function countDoneTasks (tasks: Task[]) {
        const count = tasks.filter(task => {
            return task.isDone === true
        });
        return count.length;
    }

    function NewTaskChange (newTaskTitle: string) {
        setNewTask({ id: uuidv4(), taskTitle: newTaskTitle, isDone: false });
    }
    
    function CreateNewTask (newTask: Task) {
        setTaskList([...taskList, newTask]) // sets the new task to the taskList
        setNewTask({ id: null, taskTitle: '', isDone: false }); // clears the task state
    }

    function taskStatusChange (taskToChange: string) {
        const newTaskList = taskList.map(task => {
            if (task.taskTitle === taskToChange) {
                task.isDone ? setDoneCounter(doneCounter - 1) : setDoneCounter(doneCounter + 1);
                return {...task, isDone: !task.isDone};
            }
            return task;
        })
        setTaskList(newTaskList);
    }

    function deleteTask (taskToDelete: string) {
        const tasksWithoutDeletedOne = taskList.filter(task => {
            return task.taskTitle !== taskToDelete
        })
        setTaskList(tasksWithoutDeletedOne);
        setDoneCounter(countDoneTasks(tasksWithoutDeletedOne));
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
            taskStatusChange={taskStatusChange}
            onTaskDelete={deleteTask}
            doneCounter={doneCounter}
            />
        </div>
    );
}