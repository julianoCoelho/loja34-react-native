import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../pages/Home";
import { Sobre } from "../pages/Sobre";
import { Contato } from "../pages/Contato";
import { CustomDrawer } from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

export const DrawerRoutes = () => {
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveBackgroundColor: 'red',
        drawerInactiveBackgroundColor: 'gray',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'white',
        drawerStyle: {
          backgroundColor: '#cdcdcd',
          gap: 10
        }
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Contato" component={Contato} />
    </Drawer.Navigator>
  )
}