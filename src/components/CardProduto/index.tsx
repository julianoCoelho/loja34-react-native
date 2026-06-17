import React from 'react';
import { Image, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Badge from '../Badge';
import styles from './styles';

export interface Produto {
    id: number;
    nome: string;
    preco: number;
    imagemUrl?: string;
    categoria?: string;
    descricao?: string;
    estoque?: number;
}

interface CardProdutoProps extends TouchableOpacityProps {
    produto: Produto;
    onPress: () => void;
    onAddPress?: () => void;
}

export default function CardProduto({ produto, onPress, onAddPress, style, ...props }: CardProdutoProps) {
    const precoFormatado = produto.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    return (
        <TouchableOpacity
            style={[styles.card, style]}
            onPress={onPress}
            activeOpacity={0.8}
            {...props}
        >
            {produto.imagemUrl ? (
                <Image source={{ uri: produto.imagemUrl }} style={styles.image} resizeMode="cover" />
            ) : (
                <View style={styles.imagePlaceholder}>
                    <Ionicons name="image-outline" size={28} color="#9ca3af" />
                </View>
            )}

            <View style={styles.info}>
                <View style={styles.topRow}>
                    <Text style={styles.nome} numberOfLines={2}>
                        {produto.nome}
                    </Text>
                    {produto.categoria && <Badge label={produto.categoria} variant="info" />}
                </View>

                <View style={styles.footer}>
                    <Text style={styles.preco}>{precoFormatado}</Text>

                    {onAddPress && (
                        <TouchableOpacity style={styles.addButton} onPress={onAddPress} activeOpacity={0.7}>
                            <Ionicons name="add" size={18} color="#ffffff" />
                        </TouchableOpacity>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
}