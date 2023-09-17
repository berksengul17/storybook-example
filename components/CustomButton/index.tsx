import { useContext } from "react";
import {
  Text,
  TouchableOpacity,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import { ThemeContext, ThemeContextType } from "../../context/ThemeProvider";

type CustomButtonProps = {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
  disabled,
}) => {
  const { theme } = useContext(ThemeContext) as ThemeContextType;

  return (
    <>
      <TouchableOpacity
        style={[
          buttonStyle,
          styles.customButton,
          theme === "light" ? styles.lightButton : styles.darkButton,
          disabled ? styles.disabledButton : {},
        ]}
        onPress={onPress}
        disabled={disabled ? disabled : false}
      >
        <Text
          style={[
            textStyle,
            theme === "light" ? { color: "rgb(19,19,19)" } : { color: "white" },
            disabled ? styles.disabledText : {},
          ]}
        >
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  customButton: {
    backgroundColor: "transparent",
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    paddingBottom: 3,
    borderRadius: 10,
    margin: "auto",
    borderWidth: 2,
    borderStyle: "solid",
    alignItems: "center",
  },
  lightButton: {
    borderColor: "rgb(19,19,19)",
    color: "rgb(19,19,19)",
  },
  darkButton: {
    borderColor: "white",
    color: "white",
  },
  disabledButton: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "gray",
  },
  disabledText: {
    color: "gray",
  },
});

export default CustomButton;
