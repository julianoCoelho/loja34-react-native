import React, { useState } from 'react';
import { View, Text, ScrollView, Switch, Pressable, Image } from 'react-native';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import { useTheme } from '../../contexts/ThemeContext';

interface Desenvolvedor {
  id: number;
  nome: string;
  cargo: string;
  bio: string;
  foto: any;
}

export default function Sobre() {
  const { theme, isDark, toggleTheme } = useTheme();
  const colors = theme.colors;

  const [devAtivo, setDevAtivo] = useState<Desenvolvedor | null>(null);

  const desenvolvedores: Desenvolvedor[] = [
    {
      id: 1,
      nome: 'Juliano Coelho',
      cargo: 'Desenvolvedor',
      bio: 'Desenvolveu o sistema de Autenticação global com Context API e garantiu a persistência da sessão do usuário no aplicativo utilizando AsyncStorage.',
      foto: require('../../../assets/juliano.jpeg')
    },
    {
      id: 2,
      nome: 'Luiz Antonio',
      cargo: 'Desenvolvedor',
      bio: 'Implementou o CRUD completo dos produtos, integrado à API, além de estruturar as validações de formulário e feedback visual.',
      foto: require('../../../assets/luiz.jpg')
    },
    {
      id: 3,
      nome: 'Mariana Oliveira',
      cargo: 'Desenvolvedor',
      bio: 'Responsável por conectar o catálogo à API via HTTP, implementação dos filtros dinâmicos de busca e pelo gerenciamento dos estados de carregamento e exibição na listagme de produtos.',
      foto: require('../../../assets/mariana.png')
    },
    {
      id: 4,
      nome: 'Matheus da Silveira',
      cargo: 'Desenvolvedor',
      bio: 'Responsável pela implementação do Dark Mode dinâmico (Context API), além de gerenciar a organização das branches no GitHub e gerar o build final do aplicativo (APK).',
      foto: require('../../../assets/matheus.png')
    }
  ];

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
      <Text style={{ color: colors.textSecondary, marginBottom: 12, fontSize: 14 }}>
        Toque no nome para ver mais sobre nós:
        </Text>

        <View style={styles.teamContainer}>
        {desenvolvedores.map((dev) => (
          <Pressable
            key={dev.id}
            onPress={() => {
              if (devAtivo?.id === dev.id) {
                setDevAtivo(null);
              } else {
                setDevAtivo(dev);
              }
            }}
            style={({ pressed }) => [
              styles.memberCard,
              { backgroundColor: colors.card, borderColor: colors.border },
              pressed && { opacity: 0.7 },
              devAtivo?.id === dev.id && { borderColor: colors.primary, backgroundColor: colors.primary + '15' }
            ]}
          >
            <Feather 
              name="user" 
              size={18} 
              color={devAtivo?.id === dev.id ? colors.primary : colors.textSecondary} 
              style={styles.memberIcon} 
            />
            <Text style={[
              styles.memberName, 
              { color: devAtivo?.id === dev.id ? colors.primary : colors.text }
            ]}>
              {dev.nome}
            </Text>
          </Pressable>
        ))}
      </View>

      <View style={[styles.detailsContainer, { borderColor: colors.border }]}>
        {devAtivo ? (
          <View style={[styles.devInfoCard, { backgroundColor: colors.card }]}>
            <Image source={devAtivo.foto} style={styles.avatar} />
            <View style={styles.devTextInfo}>
              <Text style={[styles.devCargo, { color: colors.primary }]}> {devAtivo.cargo}</Text>
              <Text style={[styles.devBio, { color: colors.text }]}>{devAtivo.bio}</Text>
            </View>
            </View>
        ) : (
          <View style={styles.emptyDetails}>
            <Feather name="info" size={24} color={colors.textSecondary} style={{ opacity: 0.5, marginBottom: 8 }} />
            <Text style={{ color: colors.textSecondary, textAlign: 'center' }}>
              Nenhum desenvolvedor selecionado.
            </Text>
          </View>
        )}
        </View>
    </ScrollView>
  );
}
