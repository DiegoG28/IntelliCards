import { createStackNavigator } from '@react-navigation/stack';

import OnboardingOne from '@screens/Onboarding-1';
import OnboardingTwo from '@screens/Onboarding-2';
import OnboardingThree from '@screens/Onboarding-3';

const Stack = createStackNavigator();

const OnboardingStack = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="OnboardingOne"
            component={OnboardingOne}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="OnboardingTwo"
            component={OnboardingTwo}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="OnboardingThree"
            component={OnboardingThree}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   );
};

export default OnboardingStack;
