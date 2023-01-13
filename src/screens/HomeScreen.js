import { View } from "react-native";
import { Button } from "react-native-paper";

export function HomeScreen({ navigation }) {
  return (
    <View style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}>
      <Button
        onPress={() => {
          navigation.navigate("contactUs");
        }}
      >
        Contact Us
      </Button>
    </View>
  );
}
