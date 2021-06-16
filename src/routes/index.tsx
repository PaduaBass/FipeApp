import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import Home from '../pages/Home';
const Routes: React.FC = () => {
    const Stack = createStackNavigator();
    const screenOptions: StackNavigationOptions = {
        headerShown: false,
    }
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" options={screenOptions} key="Home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;