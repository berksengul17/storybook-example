import React, { useContext, useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import { TaskContext, TaskContextType } from "../../context/TaskProvider";
import CustomButton from "../CustomButton";

const AddTaskModal = ({
  visible,
  onCancel,
}: {
  visible: boolean;
  onCancel: () => void;
}) => {
  const { addTask } = useContext(TaskContext) as TaskContextType;
  const [task, setTask] = useState<string>("");

  const onConfirm = () => {
    addTask(task);
    onCancel();
  };

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Add Task</Text>
            <TextInput
              style={styles.input}
              placeholder="Task title"
              placeholderTextColor="#A9A9A9"
              onChangeText={setTask}
              value={task}
            />
            <View style={styles.buttonContainer}>
              <CustomButton title="Confirm" onPress={onConfirm} />
              <CustomButton title="Cancel" onPress={onCancel} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 3,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
    gap: 10,
  },
});

export default AddTaskModal;
