import { Dispatch, SetStateAction } from "react";
import { TasksCreated } from "./TasksCreated";

interface FeedProps {
  tasks: string[];
  deleteTask: (task: string) => void;
  handleTaskCompleted: () => void;
  taskCount: number;
  setTaskCount: Dispatch<SetStateAction<number>>;
  handleTaskDisableCompleted: () => void;
}

export function Feed({
  tasks,
  deleteTask,
  handleTaskCompleted,
  taskCount,
  setTaskCount,
  handleTaskDisableCompleted,
}: FeedProps) {
  return (
    <div>
      <main>
        {tasks.map((task) => {
          return (
            <TasksCreated
              content={task}
              key={task}
              onDeleteTask={deleteTask}
              handleTaskCompleted={handleTaskCompleted}
              taskCount={taskCount}
              setTaskCount={setTaskCount}
              handleTaskDisableCompleted={handleTaskDisableCompleted}
            />
          );
        })}
      </main>
    </div>
  );
}
