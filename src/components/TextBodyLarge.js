import { Text } from "react-native-paper";

export function TextBodyLarge({ children, style }) {
  return (
    <Text
      style={[
        {
          lineHeight: 24,
          fontSize: 16,
          letterSpacing: 0.5,
          fontWeight: "400",
          opacity: 0.87,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
}