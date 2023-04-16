import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faGear } from '@fortawesome/free-solid-svg-icons';

import HomeStack from '@navigation/HomeStack';
import Settings from '@screens/Settings';

const BottomNav = () => {
   const Tab = createBottomTabNavigator();

   return (
      <Tab.Navigator
         initialRouteName="HomeStack"
         screenOptions={{
            tabBarActiveTintColor: '#49B1E7',
         }}
      >
         <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{
               headerShown: false,
               tabBarLabel: 'Inicio',
               tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon
                     icon={faHome}
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
               tabBarLabel: 'Opciones',
               tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon
                     icon={faGear}
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
