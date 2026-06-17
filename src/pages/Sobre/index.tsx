import { useRoute, useNavigation, RouteProp } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { RootStackParamList } from "../../routes/TabRoutes";



export const Sobre = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'Sobre'>>();
  const navigation = useNavigation<BottomTabNavigationProp<RootStackParamList>>();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: route.params?.nome === "" ? "Pagina Sobre" : route.params?.nome,
    })
  }, [navigation])

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sobre o Aplicativo</Text>
      <Text style={styles.text}>{route.params?.nome}</Text>
      <Text style={styles.text}>{route.params?.email}</Text>
      <Button title="Ir para contato" onPress={() => navigation.navigate("Contato")} />
      <Button title="voltar" onPress={() => navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'red',
  }
});