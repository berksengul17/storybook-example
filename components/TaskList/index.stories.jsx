import React from "react";
import TaskList from ".";
import * as TaskStories from "../Task/index.stories";
import { TaskProvider } from "../../context/TaskProvider";
import TaskMeta from "../Task/index.stories";

const mockedTasks = [
  { ...TaskStories.Default.args.task, id: "1", title: "Task 1" },
  { ...TaskStories.Default.args.task, id: "2", title: "Task 2" },
  { ...TaskStories.Default.args.task, id: "3", title: "Task 3" },
  { ...TaskStories.Default.args.task, id: "4", title: "Task 4" },
  { ...TaskStories.Default.args.task, id: "5", title: "Task 5" },
  { ...TaskStories.Default.args.task, id: "6", title: "Task 6" },
];

export default {
  component: TaskList,
  title: "Components/TaskList",
  args: {
    isLoading: false,
  },
  argTypes: TaskMeta.argTypes,
};

export const Default = {
  decorators: [
    (Story) => (
      <TaskProvider>
        <Story />
      </TaskProvider>
    ),
  ],
};

export const WithPinnedTasks = {
  decorators: [
    (Story) => {
      const pinnedTasks = [
        ...mockedTasks.slice(0, 5),
        { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
      ];

      return (
        <TaskProvider>
          <Story />
        </TaskProvider>
      );
    },
  ],
};

export const WithArchivedTasks = {
  decorators: [
    (Story) => {
      const archivedTasks = [
        ...mockedTasks.slice(0, 5),
        { id: "6", title: "Task 6 (archived)", state: "TASK_ARCHIVED" },
      ];

      return (
        <TaskProvider>
          <Story />
        </TaskProvider>
      );
    },
  ],
};

export const Loading = {
  decorators: [
    (Story) => (
      <TaskProvider>
        <Story />
      </TaskProvider>
    ),
  ],
};

export const Empty = {
  decorators: [
    (Story) => (
      <TaskProvider>
        <Story />
      </TaskProvider>
    ),
  ],
};
