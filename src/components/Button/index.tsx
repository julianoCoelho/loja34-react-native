import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

// Definindo os tipos das variantes aceitas pelo botão
type ButtonVariant = 'default' | 'secondary' | 'danger' | 'theme' | 'logout';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onPress: () => void; // No React Native usamos onPress no lugar de onClick
}

export default function Button({ children, onPress, variant = 'default', style, ...props }: ButtonProps) {
  
  // Verifica se o botão é do tipo 'theme' (ícone redondo) para não renderizar a tag de texto por fora
  const isThemeIcon = variant === 'theme';

  return (
    <TouchableOpacity 
      style={[styles.btn, styles[variant], style]} 
      onPress={onPress} 
      activeOpacity={0.7} // Dá um efeito suave de clique
      {...props}
    >
      {isThemeIcon ? (
        children
      ) : (
          {typeof children === 'string' ? (
            <Text style={[styles.text, styles[`text_${variant}` as keyof typeof styles]]}>
              {children}
            </Text>
          ) : (
            children
          )}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  /* Estilo base de todos os botões */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6, // Equivalente ao seu var(--radius-sm)
    borderWidth: 0,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
  },

  /* Variante: default (Botão Principal) */
  default: {
    backgroundColor: '#2563eb', // Substitua pela cor da sua marca var(--brand-primary)
  },
  text_default: {
    color: '#ffffff',
  },

  /* Variante: secondary */
  secondary: {
    backgroundColor: '#f3f4f6',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  text_secondary: {
    color: '#333333',
  },

  /* Variante: danger */
  danger: {
    backgroundColor: '#dc2626',
  },
  text_danger: {
    color: '#ffffff',
  },

  /* Variante: theme (Ícone de alternar tema) */
  theme: {
    backgroundColor: 'transparent',
    padding: 8,
    borderRadius: 99,
    width: 40,
    height: 40,
  },

  /* 🌟 Nova Variante: logout */
  logout: {
    backgroundColor: '#fee2e2', // Fundo vermelho bem claro
    borderWidth: 1,
    borderColor: '#fca5a5',
    width: '100%',
  },
  text_logout: {
    color: '#dc2626', // Texto vermelho escuro de atenção
  },
});

