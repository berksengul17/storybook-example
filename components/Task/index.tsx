import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";

type TaskProps = {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onPinTask: (id: string) => void;
  onUnpinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
};

const Task: React.FC<TaskProps> = ({
  task: { id, title, state },
  onPinTask,
  onUnpinTask,
  onArchiveTask,
}) => {
  return (
    <View
      style={[
        styles.listItem,
        state === "TASK_ARCHIVED" ? styles.archived : null,
      ]}
    >
      <TouchableOpacity
        onPress={() => onArchiveTask(id)}
        accessibilityLabel={`archiveTask-${id}`}
      >
        <View style={styles.checkbox}>
          {state === "TASK_ARCHIVED" ? (
            <Text style={styles.checkboxCustom}>&#x2714;</Text>
          ) : (
            <Text style={styles.checkboxCustom} />
          )}
        </View>
      </TouchableOpacity>

      <View style={styles.title}>
        <TextInput
          value={title}
          style={styles.titleInput}
          editable={false}
          placeholder="Input title"
        />
      </View>

      {state !== "TASK_ARCHIVED" &&
        (state === "TASK_PINNED" ? (
          <TouchableOpacity
            onPress={() => onUnpinTask(id)}
            accessibilityLabel={`pinTask-${id}`}
            style={styles.pinButton}
          >
            <FontAwesomeIcon icon={solidStar} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => onPinTask(id)}
            accessibilityLabel={`pinTask-${id}`}
            style={styles.pinButton}
          >
            <FontAwesomeIcon icon={regularStar} />
          </TouchableOpacity>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  archived: {
    backgroundColor: "#eee",
  },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  checkboxCustom: {
    fontSize: 20,
  },
  title: {
    flex: 1,
    marginLeft: 10,
  },
  titleInput: {
    fontSize: 16,
  },
  pinButton: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Task;
