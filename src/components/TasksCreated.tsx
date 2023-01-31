import styles from "./TasksCreated.module.css";
import { Trash } from "phosphor-react";
import { Dispatch, SetStateAction, useState } from "react";

interface TasksCreatedProps {
  content: string;
  onDeleteTask: (task: string) => void;
  handleTaskCompleted: () => void;
  taskCount: number;
  setTaskCount: Dispatch<SetStateAction<number>>;
  handleTaskDisableCompleted: () => void;
}

export function TasksCreated({
  content,
  onDeleteTask,
  handleTaskCompleted,
  taskCount,
  setTaskCount,
  handleTaskDisableCompleted,
}: TasksCreatedProps) {
  const [checked, setChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(content);
    if (checked) {
      setTaskCount(taskCount - 1);
    } else {
      [];
    }
  }

  function handleCheckboxClick() {
    if (checked) {
      handleTaskDisableCompleted();
    } else {
      handleTaskCompleted();
    }
    setChecked(!checked);
  }

  return (
    <div className={styles.content}>
      <input
        onClick={handleCheckboxClick}
        type="checkbox"
        checked={checked}
      ></input>
      <p>{content}</p>

      <div className={styles.deleteButton}>
        <button onClick={handleDeleteTask} title="Deletar nota">
          <Trash size={14} />
        </button>
      </div>
    </div>
  );
}
