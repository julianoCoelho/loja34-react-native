import React, { useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View, } from 'react-native';
import styles from './styles';

interface InputProps extends TextInputProps {
    label?: string;
    error?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
}

export default function Input({ label, error, leftIcon, rightIcon, secureTextEntry, style, ...props }: InputProps) {
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const isPassword = secureTextEntry;

    return (
        <View style={styles.wrapper}>
            {label && <Text style={styles.label}>{label}</Text>}

            <View style={[styles.inputRow, error ? styles.inputRowError : styles.inputRowNormal]}>
                {leftIcon && <View style={styles.icon}>{leftIcon}</View>}

                <TextInput
                    style={[styles.input, style]}
                    placeholderTextColor="#9ca3af"
                    secureTextEntry={isPassword && !senhaVisivel}
                    autoCapitalize="none"
                    {...props}
                />

                {isPassword ? (
                    <TouchableOpacity
                        style={styles.icon}
                        onPress={() => setSenhaVisivel((v) => !v)}
                        activeOpacity={0.7}
                    >
                        <Text style={styles.eyeText}>{senhaVisivel ? '🙈' : '👁️'}</Text>
                    </TouchableOpacity>
                ) : (
                    rightIcon && <View style={styles.icon}>{rightIcon}</View>
                )}
            </View>

            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
}

