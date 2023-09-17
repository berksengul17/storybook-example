import { withBackgrounds } from "@storybook/addon-ondevice-backgrounds";
import { ThemeProvider } from "../context/ThemeProvider";

export const decorators = [
  withBackgrounds,
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  backgrounds: {
    default: "light",
    values: [
      { name: "light", value: "white" },
      { name: "dark", value: "black" },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
