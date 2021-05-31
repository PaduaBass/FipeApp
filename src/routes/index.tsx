import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import Home from '../pages/Home';
import Details from '../pages/Details';
const Routes: React.FC = () => {
    const Stack = createStackNavigator();
    const screenOptions: StackNavigationOptions = {
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
            backgroundColor: "#3b9adb"
        }
    }
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" options={screenOptions} key="Home" component={Home} />
            <Stack.Screen name="Details" key="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;