import { useContext, useEffect } from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { TaskContext, TaskContextType } from "../../context/TaskProvider";
import Task from "../Task";

// type TaskListProps = {
//   isLoading: boolean;
// };

// { isLoading }: TaskListProps

function TaskList() {
  const { tasks, updateTaskState, isLoading } = useContext(
    TaskContext
  ) as TaskContextType;
  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];

  const pinTask = (id: string): void => {
    updateTaskState(id, "TASK_PINNED");
  };

  const unpinTask = (id: string): void => {
    updateTaskState(id, "TASK_INBOX");
  };

  const archiveTask = (id: string): void => {
    updateTaskState(id, "TASK_ARCHIVED");
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (tasks.length === 0) {
    return (
      <View style={styles.container}>
        <Text>You have no tasks</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        {tasksInOrder.map((task) => (
          <Task
            key={task.id}
            task={task}
            onPinTask={(taskId) => pinTask(taskId)}
            onUnpinTask={(taskId) => unpinTask(taskId)}
            onArchiveTask={(taskId) => archiveTask(taskId)}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TaskList;
