import styles from "./App.module.css";
import { Header } from "./components/Header";
import { AddingTask } from "./components/AddingTask";
import { TaskArea } from "./components/TaskArea";
import { Feed } from "./components/Feed";
import { NoTasks } from "./components/NoTasks";
import { ChangeEvent, FormEvent, useState } from "react";

import "./global.css";

export function App() {
  const [tasks, setTasks] = useState([] as string[]);

  const [newTaskText, setNewTaskText] = useState("");

  const [taskCount, setTaskCount] = useState(0);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value);
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  function handleTaskCompleted() {
    setTaskCount(taskCount + 1);
  }

  function handleTaskDisableCompleted() {
    setTaskCount(taskCount - 1);
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <AddingTask
          handleCreateNewTask={handleCreateNewTask}
          newTaskText={newTaskText}
          handleNewTaskChange={handleNewTaskChange}
        />
        <TaskArea tasks={tasks} taskCount={taskCount} />
        {tasks.length > 0 ? (
          <Feed
            tasks={tasks}
            deleteTask={deleteTask}
            handleTaskCompleted={handleTaskCompleted}
            taskCount={taskCount}
            setTaskCount={setTaskCount}
            handleTaskDisableCompleted={handleTaskDisableCompleted}
          />
        ) : (
          <NoTasks />
        )}
      </div>
    </div>
  );
}

export default App;
