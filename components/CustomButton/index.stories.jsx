import { View } from "react-native";
import CustomButton from ".";
import { ThemeProvider } from "../../context/ThemeProvider";
import { parameters } from "../../.storybook/preview";

const meta = {
  title: "Components/Button",
  component: CustomButton,
  args: {
    title: "Custom Button",
  },
  argTypes: { onPress: { action: "cliked" }, disabled: { control: "boolean" } },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Story />
      </View>
    ),
  ],
};

export default meta;

export const Default = {};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const DarkThemed = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [...parameters.backgrounds.values],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider initialTheme="dark">
        <Story />
      </ThemeProvider>
    ),
  ],
};
