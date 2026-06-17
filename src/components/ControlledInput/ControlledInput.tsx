import React from 'react';
import { View, TextInput, Text } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../styles/theme';

// Definição das propriedades
interface ControlledInputProps {
  control: Control<any>;
  name: string;
  icon: keyof typeof Feather.glyphMap;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
}

export function ControlledInput({ control, name, icon, placeholder, secureTextEntry, error }: ControlledInputProps) {
  return (
    <View style={styles.field}>
      <Text style={[styles.label, { color: theme.colors.text }]}>{placeholder}</Text>
      <View style={styles.inputWrap}>
        <Feather name={icon} size={16} color={theme.colors.textSecondary || "#888"} style={styles.inputIcon} />
        
        <Controller
          control={control}
          name={name}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[
                styles.input, 
                { 
                  backgroundColor: theme.colors.input, 
                  color: theme.colors.text,
                  borderColor: error ? theme.colors.danger : theme.colors.border 
                }
              ]}
              placeholder={`Digite seu ${placeholder.toLowerCase()}`}
              placeholderTextColor={theme.colors.textSecondary || "#888"}
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
            />
          )}
        />
      </View>
      {error && <Text style={[styles.error, { color: theme.colors.danger }]}>{error}</Text>}
    </View>
  );
}