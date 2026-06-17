import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Contato } from "../pages/Contato";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { ParamListBase } from "@react-navigation/native";


export interface RootStackParamList extends ParamListBase {
  Home: undefined;
  Sobre: {
    nome: string;
    email: string;
  };
  Contato: undefined
}
const Tab = createBottomTabNavigator<RootStackParamList>();

export const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "green"
      }}
    >
      <Tab.Screen name='Home' component={Home} options={{
        tabBarIcon: ({ color }) => <MaterialIcons name='home' color={color} size={30} />
      }} />
      <Tab.Screen name='Sobre' component={Sobre} options={{
        tabBarIcon: ({ color }) => <MaterialIcons name='file-present' color={color} size={30} />
      }} />
      <Tab.Screen name='Contato' component={Contato} options={{
        tabBarIcon: ({ color }) => <MaterialIcons name='phone' color={color} size={30} />
      }} />
    </Tab.Navigator>
  )
}