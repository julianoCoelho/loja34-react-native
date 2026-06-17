import { StackActions, useNavigation } from "@react-navigation/native";

import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../routes/TabRoutes";

export const Contato = () => {
  const navigation = useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const handleHome = () => {
    navigation.dispatch(StackActions.popToTop());
  }
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.text}>Tela de Contato</Text>
      <Button title="Voltar para home" onPress={handleHome} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'green',
  }
});