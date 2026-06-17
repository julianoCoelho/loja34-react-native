import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, ActivityIndicator, View, } from 'react-native';
import styles from './styles';
type ButtonVariant = 'default' | 'secondary' | 'danger' | 'outline' | 'logout';

interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  onPress: () => void;
  variant?: ButtonVariant;
  loading?: boolean;
  leftIcon?: React.ReactNode;
}

export default function Button({ children, onPress, variant = 'default', loading = false, leftIcon, style, disabled, ...props }: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      style={[
        styles.btn,
        styles[variant],
        isDisabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      activeOpacity={0.75}
      disabled={isDisabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === 'secondary' || variant === 'outline' ? '#2563eb' : '#ffffff'}
        />
      ) : (
        <>
          {leftIcon && <View style={styles.iconWrapper}>{leftIcon}</View>}
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

