import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import styles from './styles';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';

interface BadgeProps extends ViewProps {
  label: string;
  variant?: BadgeVariant;
}

export default function Badge({ label, variant = 'default', style, ...props }: BadgeProps) {
  return (
    <View style={[styles.badge, styles[variant], style]} {...props}>
      <Text style={[styles.text, styles[`text_${variant}` as keyof typeof styles]]}>
        {label}
      </Text>
    </View>
  );
}