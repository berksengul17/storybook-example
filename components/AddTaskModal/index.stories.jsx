import { useArgs } from "@storybook/preview-api";
import { View } from "react-native";
import AddTaskModal from ".";
import { TaskProvider } from "../../context/TaskProvider";
import CustomButton from "../CustomButton";

const meta = {
  title: "Components/Add Task Modal",
  component: AddTaskModal,
  args: {
    visible: false,
    onCancel: () => {},
  },
  argTypes: {
    visible: { control: "boolean" },
    onCancel: { action: "cancel clicked" },
  },
};

export default meta;

export const Default = {
  decorators: [
    function Default(Story, ctx) {
      const [{ visible }, updateArgs] = useArgs();

      const onCancel = () => {
        if (ctx.args.value !== undefined) {
          updateArgs({ visible: false });
        }
        console.log("on cancel");
      };

      return (
        <TaskProvider>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <CustomButton
              title="Open Modal"
              onPress={() => {
                updateArgs({ visible: true });
                console.log(ctx.args);
              }}
            />
            <Story visible={visible} onCancel={onCancel} />
          </View>
        </TaskProvider>
      );
    },
  ],
};
