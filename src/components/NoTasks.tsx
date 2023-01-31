import styles from "./NoTasks.module.css";
import clipboard from "../assets/Clipboard.svg";

export function NoTasks() {
  return (
    <div className={styles.publishedTasks}>
      <img src={clipboard} />
      <div>
        <b>Você ainda não tem tarefas cadastradas</b>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
