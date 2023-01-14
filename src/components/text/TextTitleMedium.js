import { Text } from "react-native-paper";

export function TextTitleMedium({ children }) {
  return (
    <Text
      style={[
        {
          lineHeight: 24,
          fontSize: 16,
          letterSpacing: 0.15,
          fontWeight: "500",
          opacity: 0.87,
        },
      ]}
    >
      {children}
    </Text>
  );
}