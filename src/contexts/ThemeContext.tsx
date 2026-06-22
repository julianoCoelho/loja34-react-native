import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightColors, darkColors, radius, ThemeColors } from './themeStyles';

export { radius, ThemeColors };

export interface AppTheme {
    colors: ThemeColors;
    radius: typeof radius;
    isDark: boolean;
}

interface ThemeContextType {
    theme: AppTheme;
    isDark: boolean;
    toggleTheme: () => void;
}

const STORAGE_KEY = '@Loja34:theme_preference';

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        async function loadThemePreference() {
            try {
                const saved = await AsyncStorage.getItem(STORAGE_KEY);
                if (saved !== null) {
                    setIsDark(saved === 'dark');
                }
            } catch (error) {
                console.error('Erro ao carregar preferência de tema:', error);
            }
        }
        loadThemePreference();
    }, []);

    const toggleTheme = async () => {
        try {
            const next = !isDark;
            setIsDark(next);
            await AsyncStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light');
        } catch (error) {
            console.error('Erro ao salvar preferência de tema:', error);
        }
    };

    const theme: AppTheme = useMemo(
        () => ({
            colors: isDark ? darkColors : lightColors,
            radius,
            isDark,
        }),
        [isDark]
    );

    return (
        <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme deve ser usado dentro de um ThemeProvider');
    }
    return context;
}
