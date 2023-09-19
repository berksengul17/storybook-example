// import { StatusBar } from "expo-status-bar";
// import { useState } from "react";
// import { SafeAreaView, StyleSheet, Text, View } from "react-native";
// import { REACT_APP_STORYBOOK_ENABLED } from "@env";
// import StorybookUIRoot from "./.storybook";

// import TaskList from "./components/TaskList";
// import CustomButton from "./components/CustomButton";
// import AddTaskModal from "./components/AddTaskModal";
// import { TaskProvider } from "./context/TaskProvider";
// import { ThemeProvider } from "./context/ThemeProvider";

// function App() {
//   const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

//   const toggleModal = () => {
//     setIsModalVisible(!isModalVisible);
//   };

//   return (
//     <ThemeProvider>
//       <TaskProvider>
//         <SafeAreaView style={{ flex: 1 }}>
//           <View style={styles.container}>
//             <StatusBar style="auto" />
//             <View>
//               <Text
//                 style={{
//                   fontSize: 20,
//                   fontWeight: "bold",
//                   textAlign: "center",
//                 }}
//               >
//                 TASKS
//               </Text>
//               <TaskList />
//               <CustomButton
//                 title="Add Task"
//                 buttonStyle={{ marginTop: 10 }}
//                 onPress={toggleModal}
//               />
//             </View>
//             <AddTaskModal visible={isModalVisible} onCancel={toggleModal} />
//           </View>
//         </SafeAreaView>
//       </TaskProvider>
//     </ThemeProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: 10,
//   },
// });

// export default REACT_APP_STORYBOOK_ENABLED === "true" ? StorybookUIRoot : App;
export { default } from "./.storybook";
