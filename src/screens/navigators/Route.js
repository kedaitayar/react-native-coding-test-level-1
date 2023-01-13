import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../HomeScreen";
import { ContactUsScreen } from "../ContactUsScreen";

const Stack = createNativeStackNavigator();

export function Route() {
  return (
    <Stack.Navigator
      initialRouteName={"home"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={"home"} component={HomeScreen} />
      <Stack.Screen name={"contactUs"} component={ContactUsScreen} />
    </Stack.Navigator>
  );
}
