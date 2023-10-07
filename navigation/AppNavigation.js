import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScrollViewAnim from "../Examples/ScrollViewAnim";
import InterpolatecoColors from "../Examples/InterpolateColors"
import IntroductR2 from "../Examples/IntroductR2";
import BoxGrabHereThere from "../Examples/BoxGrabHereThere"
const Stack = createNativeStackNavigator();

const AppNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name="scroll"
            component={ScrollViewAnim}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="interpol"
            component={InterpolatecoColors}
            options={{ headerStyle: { backgroundColor: "white" } }}
        />
        <Stack.Screen
            name="intro"
            component={IntroductR2}
            // options={{ headerShown: false }}
            options={{ headerStyle: { backgroundColor: "white" } }}
        />
          <Stack.Screen
            name="box"
            component={BoxGrabHereThere}
            // options={{ headerShown: false }}
            options={{ headerStyle: { backgroundColor: "white" } }}
        />
    </Stack.Navigator>
);

export default AppNavigator;