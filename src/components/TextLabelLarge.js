import { Text } from "react-native-paper";

export function TextLabelLarge({ children, style }) {
  return (
    <Text
      style={[
        {
          lineHeight: 20,
          fontSize: 14,
          letterSpacing: 0.1,
          fontWeight: "500",
          opacity: 0.87,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}
