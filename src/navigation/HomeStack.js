import { createStackNavigator } from '@react-navigation/stack';

import Home from '@screens/Home';
import CardView from '@screens/CardView';
import CardList from '../screens/CardList';

const Stack = createStackNavigator();

const HomeStack = () => {
   return (
      <Stack.Navigator>
         <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="CardView"
            component={CardView}
            options={{ headerShown: false }}
         />
         <Stack.Screen
            name="CardList"
            component={CardList}
            options={{ headerShown: false }}
         />
      </Stack.Navigator>
   );
};

export default HomeStack;
