import { NavigationContainer } from "@react-navigation/native";
import { Route } from "./src/screens/navigators/Route";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import { Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <PaperProvider>
          <Route />
        </PaperProvider>
      </NavigationContainer>
    </Provider>
  );
}
