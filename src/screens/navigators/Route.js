import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../HomeScreen";
import { CatalogScreen } from "../CatalogScreen";
import { DetailScreen } from "../DetailScreen";
import { ContactUsScreen } from "../ContactUsScreen";

const Stack = createNativeStackNavigator();

export function Route() {
  return (
    <Stack.Navigator initialRouteName={"home"}>
      <Stack.Screen
        name={"home"}
        component={HomeScreen}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name={"catalog"}
        component={CatalogScreen}
        options={{ title: "Catalog" }}
      />
      <Stack.Screen
        name={"detail"}
        component={DetailScreen}
        options={{ title: "Detail" }}
      />
      <Stack.Screen
        name={"contactUs"} 
        component={ContactUsScreen} 
        options={{ title: "Contact Us" }}
      />
    </Stack.Navigator>
  );
}
