import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.08,
        shadowRadius: 3,
        elevation: 2,
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 10,
        backgroundColor: '#f3f4f6',
    },
    imagePlaceholder: {
        width: 72,
        height: 72,
        borderRadius: 10,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    info: {
        flex: 1,
        marginLeft: 12,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 8,
    },
    nome: {
        flex: 1,
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    preco: {
        fontSize: 16,
        fontWeight: '700',
        color: '#2563eb',
    },
    addButton: {
        backgroundColor: '#2563eb',
        width: 28,
        height: 28,
        borderRadius: 14,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;