import React, { createContext, useState, useEffect, ReactNode } from "react";

type Task = {
  id: string;
  title: string;
  state: string;
};

export type TaskContextType = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  addTask: (title: string) => void;
  updateTaskState: (id: string, newState: string) => void;
  isLoading: Boolean;
};

type TaskProviderProps = {
  children: ReactNode;
  initialTasks?: Task[];
};

export const TaskContext = createContext<TaskContextType | null>(null);

export const TaskProvider: React.FC<TaskProviderProps> = ({
  children,
  initialTasks = [],
}) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      setTasks([...data]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  const addTask = (title: string): void => {
    const task = {
      id: tasks[tasks.length - 1].id + 1,
      title,
      state: "TASK_INBOX",
    };
    setTasks([...tasks, task]);
  };

  const updateTaskState = (id: string, newState: string): void => {
    const taskIndex = tasks.findIndex((task) => task.id === id);
    if (taskIndex >= 0) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex] = { ...updatedTasks[taskIndex], state: newState };

      setTasks(updatedTasks);
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, addTask, updateTaskState, isLoading }}
    >
      {children}
    </TaskContext.Provider>
  );
};
