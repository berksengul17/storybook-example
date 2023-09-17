import { View } from "react-native";
import Task from ".";

const meta = {
  title: "Components/Task",
  component: Task,
  argTypes: {
    onPinTask: { action: "task pinned" },
    onUnpinTask: { action: "task unpinned" },
    onArchiveTask: { action: "task archived" },
  },
  decorators: [
    (Story) => {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Story />
        </View>
      );
    },
  ],
};

export default meta;

export const Default = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_PINNED",
    },
  },
};

export const Archived = {
  args: {
    task: {
      ...Default.args.task,
      state: "TASK_ARCHIVED",
    },
  },
};
