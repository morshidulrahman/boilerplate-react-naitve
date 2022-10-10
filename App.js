import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./app/screens/HomeScreen";
import { Provider } from "react-redux";
import { store } from "./app/Redux/store";
import Welcomescreen from "./app/screens/Welcomescreen";
import Purchasesection from "./app/screens/Purchasesection";
import Shopenlive from "./app/screens/Shopenlive";
import Shirtreview from "./app/screens/Shirtreview";
import ProductScreen from "./app/screens/ProductScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
            {/* <Stack.Screen name="welcome" component={Welcomescreen} /> */}
            {/* <Stack.Screen name="purchase" component={Purchasesection} /> */}
            {/* <Stack.Screen name="shopenlive" component={Shopenlive} /> */}
            <Stack.Screen name="Shirtreview" component={Shirtreview} />
            {/* <Stack.Screen name="ProductScreen" component={ProductScreen} /> */}
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
