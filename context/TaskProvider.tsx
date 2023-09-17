import React, { createContext, useState, ReactNode } from "react";

type Task = {
  id: string;
  title: string;
  state: string;
};

export type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  updateTaskState: (id: string, newState: string) => void;
};

type TaskProviderProps = {
  children: ReactNode;
  initialTasks: Task[];
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<TaskProviderProps> = ({
  children,
  initialTasks = [],
}) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const updateTaskState = (id: string, newState: string): void => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex >= 0) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], state: newState };

      setTasks(updatedTasks);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, updateTaskState }}>
      {children}
    </TaskContext.Provider>
  );
};
