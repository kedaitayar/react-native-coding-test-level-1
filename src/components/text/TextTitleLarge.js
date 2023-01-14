import { Text } from "react-native-paper";

export function TextTitleLarge({ children }) {
  return (
    <Text
      style={[
        {
          lineHeight: 28,
          fontSize: 22,
          letterSpacing: 0,
          fontWeight: "400",
          opacity: 0.87,
        },
      ]}
    >
      {children}
    </Text>
  );
}
