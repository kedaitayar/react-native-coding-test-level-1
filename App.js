import { NavigationContainer } from "@react-navigation/native";
import { Route } from "./src/screens/navigators/Route";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Provider>
  );
}
