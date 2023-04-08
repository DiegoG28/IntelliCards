import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faRightLong } from '@fortawesome/free-solid-svg-icons/faRightLong';

import HomeStack from '@navigation/HomeStack';
import Settings from '@screens/Settings';

const BottomNav = () => {
   const Tab = createBottomTabNavigator();

   return (
      <Tab.Navigator
         initialRouteName="HomeStack"
         screenOptions={{
            tabBarActiveTintColor: '#42f44b',
         }}
      >
         <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
               headerShown: false,
               tabBarLabel: 'HomeStack',
               tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon
                     icon={faRightLong}
                     size={size}
                     color={color}
                  />
               ),
            }}
         />
         <Tab.Screen
            name="Settings"
            component={Settings}
            options={{
               headerShown: false,
               tabBarLabel: 'Settings',
               tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon
                     icon={faRightLong}
                     size={size}
                     color={color}
                  />
               ),
            }}
         />
      </Tab.Navigator>
   );
};

export default BottomNav;
