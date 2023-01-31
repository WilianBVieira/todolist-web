import styles from "./TaskArea.module.css";

interface TaskAreaProps {
  tasks: string[];
  taskCount: number;
}

export function TaskArea({ tasks, taskCount }: TaskAreaProps) {
  return (
    <div className={styles.tasks}>
      <header>
        <section className={styles.tasksCreated}>
          <b>Tarefas criadas</b>
          <a>{tasks.length}</a>
        </section>
        <section className={styles.tasksCompleted}>
          <b>Concluídas</b>
          <a>{tasks.length ? `${taskCount} de ${tasks.length}` : 0}</a>
        </section>
      </header>
    </div>
  );
}
