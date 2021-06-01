import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import GlobalContext from './src/context';

export default function App() {
  return (
    <GlobalContext>
      <StatusBar backgroundColor="#008B8B" />
      <Routes />
    </GlobalContext>
  );
}
