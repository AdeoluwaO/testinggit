/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
 StatusBar
} from 'react-native';
import MainStack from './src/Routes/MainStack';
import SignUp from './src/screens/SignUp';

export type Auth = {
  Intro: undefined,
  SignUp: undefined,
  Guest: undefined,
  Login: undefined
}

const Stack = createNativeStackNavigator<Auth>()


const App = () => {
  return (
    <>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        
      }}>
        <Stack.Screen name='Intro' component={MainStack}/>
        <Stack.Screen name='SignUp' component={SignUp} />
      </Stack.Navigator>
    </>
  );
};

export default App;
