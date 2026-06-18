import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

export default function Sobre() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>

      <View style={styles.header}>
        <Feather name="shopping-bag" size={48} color={theme.colors.primary} />
        <Text style={styles.title}>Sobre Loja 34</Text>
      </View>

      <View style={styles.aboutCard}>
        <Text style={styles.paragraph}>
          A Loja 34 nasceu da vontade de trazer os melhores produtos com a melhor experiência de compras diretamente para a palma da sua mão. 
        </Text>
        <Text style={styles.paragraphLast}>
          Nosso foco é oferecer variedade, qualidade e um atendimento de excelência. Tudo o que você precisa, a um clique de distância!
        </Text>
      </View>

      <Feather name="users" size={20} style={styles.subtitle} />
      <Text style={styles.subtitle}>Desenvolvedores</Text>

      <View style={styles.teamContainer}>

        <View style={styles.memberCard}>
          <Feather name="user" size={18} color={theme.colors.primary} style={styles.memberIcon} />
          <Text style={styles.memberName}>Juliano Coelho</Text>
        </View>

        <View style={styles.memberCard}>
          <Feather name="user" size={18} color={theme.colors.primary} style={styles.memberIcon} />
          <Text style={styles.memberName}>Luiz Antonio</Text>
        </View>

        <View style={styles.memberCard}>
          <Feather name="user" size={18} color={theme.colors.primary} style={styles.memberIcon} />
          <Text style={styles.memberName}>Mariana Oliveira</Text>
        </View>

        <View style={styles.memberCard}>
          <Feather name="user" size={18} color={theme.colors.primary} style={styles.memberIcon} />
          <Text style={styles.memberName}>Matheus da Silveira</Text>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.radius.lg,
    paddingTop: 32,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginTop: 12,
    letterSpacing: 0.5,
  },
  aboutCard: {
    backgroundColor: theme.colors.card,
    padding: 24,
    borderRadius: theme.radius.lg,
    borderWidth: 1.5,
    borderColor: theme.colors.border,
    marginBottom: 36,
  },
  paragraph: {
    fontSize: 16,
    color: theme.colors.text,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 14,
    fontWeight: '400',
  },
  paragraphLast: {
    fontSize: 16,
    color: theme.colors.text,
    lineHeight: 26,
    textAlign: 'center',
    fontWeight: '400',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '700',
    color: theme.colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  teamContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 14,
  },
  memberCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.card,
    width: '85%',
    paddingVertical: 14,
    borderRadius: theme.radius.md,
    borderWidth: 1.5,
    borderColor: theme.colors.border,
  },
  memberIcon: {
    marginRight: 10,
  },
  memberName: {
    fontSize: 16,
    color: theme.colors.text,
    fontWeight: '600',
    letterSpacing: 0.2,
  }
});