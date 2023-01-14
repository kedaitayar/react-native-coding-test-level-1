import { Text } from "react-native-paper";

export function TextHeadlineSmall({ children, style }) {
  return (
    <Text
      style={[
        {
          lineHeight: 32,
          fontSize: 24,
          letterSpacing: 0,
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