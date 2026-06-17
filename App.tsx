import 'react-native-gesture-handler'
import { NavigationContainer, StackRouter } from '@react-navigation/native';
//import { TabRoutes } from './src/routes/TabRoutes';
//import { DrawerRoutes } from './src/routes/DrawerRoutes';/
//import { StackRoutes } from './src/routes/StackRoutes';
//import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        {/* <TabRoutes /> */}
       {/* <DrawerRoutes />*/}
        {/* <StackRoutes /> */}
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
