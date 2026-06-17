import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { Control, Controller } from 'react-hook-form';
import { Feather } from '@expo/vector-icons';
import {styles} from './styles';

// Definição das propriedades
interface ControlledInputProps {
  control: Control<any>;
  name: string;
  icon: keyof typeof Feather.glyphMap;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
  isDark?: boolean;
}


export function ControlledInput({ control, name, icon, placeholder, secureTextEntry, error, isDark }: ControlledInputProps) {
  return (
    <View style={styles.field}>
      <Text style={styles.label}>{placeholder}</Text>
      <View style={styles.inputWrap}>
        <Feather name={icon} size={16} color="#888" style={styles.inputIcon} />
        <Controller
          control={control}
          name={name}
          defaultValue=""
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={[
                styles.input, 
                { 
                  backgroundColor: isDark ? '#2d2d2d' : '#f9f9f9', 
                  color: isDark ? '#fff' : '#333',
                  borderColor: error ? '#dc2626' : '#e0e0e0' 
                }
              ]}
              placeholder={`Digite seu ${placeholder.toLowerCase()}`}
              placeholderTextColor="#888"
              onChangeText={onChange}
              value={value}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
            />
          )}
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
