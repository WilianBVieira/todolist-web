import styles from "./AddingTask.module.css";
import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent } from "react";

interface AddingTaskProps {
  handleCreateNewTask: (event: FormEvent) => void;
  newTaskText: string;
  handleNewTaskChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function AddingTask({
  handleCreateNewTask,
  newTaskText,
  handleNewTaskChange,
}: AddingTaskProps) {
  return (
    <div>
      <div className={styles.addForm}>
        <form onSubmit={handleCreateNewTask}>
          <input
            name="task"
            value={newTaskText}
            placeholder="Adicione uma nova tarefa"
            onChange={handleNewTaskChange}
          />
          <button>
            Criar <PlusCircle size={18} weight="bold" />
          </button>
        </form>
      </div>
    </div>
  );
}
