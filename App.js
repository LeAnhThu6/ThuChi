import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Screen01 from "./screens/Screen01";
import Screen02 from "./screens/Screen02";
import store from "./redux/store";
import { Provider } from "react-redux";
const stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <stack.Navigator>
          <stack.Screen name="Screen01" component={Screen01} />
          <stack.Screen name="Screen02" component={Screen02} />
        </stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
