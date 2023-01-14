import { ScrollView, StatusBar, View } from "react-native";
import { Button } from "react-native-paper";

export function HomeScreen({ navigation }) {
  return (
    <ScrollView
      contentContainerStyle={[
        { flexGrow: 1, paddingTop: StatusBar.currentHeight },
      ]}
    >
      <View
        style={[{ flex: 1, justifyContent: "center", alignItems: "center" }]}
      >
        <Button
          onPress={() => {
            navigation.navigate("catalog");
          }}
        >
          View Catalog
        </Button>
      </View>
    </ScrollView>
  );
}
