import { NavigationContainer } from "@react-navigation/native";
import { Route } from "./src/screens/navigators/Route";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <NavigationContainer>
      <PaperProvider>
        <Route />
      </PaperProvider>
    </NavigationContainer>
  );
}
