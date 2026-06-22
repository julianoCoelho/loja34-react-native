import React from 'react';
import { View, Text, StyleSheet, ScrollView, Switch } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';

export default function Sobre() {
  const { theme, isDark, toggleTheme } = useTheme();
  const colors = theme.colors;

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <Feather name="shopping-bag" size={48} color={colors.primary} />
        <Text style={[styles.title, { color: colors.text }]}>Sobre Loja 34</Text>
      </View>

      <View style={[styles.aboutCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <Text style={[styles.paragraph, { color: colors.text }]}>
          A Loja 34 nasceu da vontade de trazer os melhores produtos com a melhor
          experiência de compras diretamente para a palma da sua mão.
        </Text>
        <Text style={[styles.paragraphLast, { color: colors.text }]}>
          Nosso foco é oferecer variedade, qualidade e um atendimento de excelência.
          Tudo o que você precisa, a um clique de distância!
        </Text>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.primary }]}>Preferências</Text>

      <View style={[styles.preferenceCard, { backgroundColor: colors.card, borderColor: colors.border }]}>
        <View style={styles.preferenceRow}>
          <Feather name={isDark ? 'moon' : 'sun'} size={20} color={colors.primary} />
          <Text style={[styles.preferenceLabel, { color: colors.text }]}>
            {isDark ? 'Modo Escuro' : 'Modo Claro'}
          </Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme}
            trackColor={{ false: '#d1d5db', true: '#2563eb' }}
            thumbColor="#ffffff"
          />
        </View>
      </View>

      <Text style={[styles.sectionTitle, { color: colors.primary }]}>Desenvolvedores</Text>

      <View style={styles.teamContainer}>
        {['Juliano Coelho', 'Luiz Antonio', 'Mariana Oliveira', 'Matheus da Silveira'].map(
          (nome) => (
            <View
              key={nome}
              style={[styles.memberCard, { backgroundColor: colors.card, borderColor: colors.border }]}
            >
              <Feather name="user" size={18} color={colors.primary} style={styles.memberIcon} />
              <Text style={[styles.memberName, { color: colors.text }]}>{nome}</Text>
            </View>
          )
        )}
      </View>
    </ScrollView>
  );
}