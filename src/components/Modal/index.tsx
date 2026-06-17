import React from 'react';
import { Modal as RNModal, ModalProps as RNModalProps, Text, TouchableOpacity, TouchableWithoutFeedback, View, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

interface ModalProps extends Omit<RNModalProps, 'visible'> {
    visible: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
    closeOnBackdropPress?: boolean;
    showCloseButton?: boolean;
}

export default function Modal({
    visible,
    onClose,
    title,
    children,
    closeOnBackdropPress = true,
    showCloseButton = true,
    animationType = 'fade',
    ...props
}: ModalProps) {
    return (
        <RNModal
            visible={visible}
            transparent
            animationType={animationType}
            onRequestClose={onClose}
            statusBarTranslucent
            {...props}
        >
            <TouchableWithoutFeedback onPress={closeOnBackdropPress ? onClose : undefined}>
                <View style={styles.backdrop}>
                    <TouchableWithoutFeedback>
                        <View style={styles.card}>
                            {(title || showCloseButton) && (
                                <View style={styles.header}>
                                    {title ? (
                                        <Text style={styles.title} numberOfLines={1}>
                                            {title}
                                        </Text>
                                    ) : (
                                        <View />
                                    )}

                                    {showCloseButton && (
                                        <TouchableOpacity
                                            style={styles.closeButton}
                                            onPress={onClose}
                                            activeOpacity={0.7}
                                            accessibilityLabel="Fechar"
                                        >
                                            <Ionicons name="close" size={20} color="#374151" />
                                        </TouchableOpacity>
                                    )}
                                </View>
                            )}

                            <View style={styles.content}>{children}</View>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </RNModal>
    );
}
