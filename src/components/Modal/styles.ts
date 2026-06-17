import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(17, 24, 39, 0.55)',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    card: {
        width: '100%',
        maxWidth: 420,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        paddingBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 12,
        elevation: 8,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 18,
        paddingHorizontal: 20,
        paddingBottom: 12,
    },
    title: {
        flex: 1,
        fontSize: 17,
        fontWeight: '700',
        color: '#111827',
        marginRight: 8,
    },
    closeButton: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#f3f4f6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        paddingHorizontal: 20,
    },
});

export default styles;
