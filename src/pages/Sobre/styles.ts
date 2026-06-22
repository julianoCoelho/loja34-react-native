import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    ccontainer: {
        flex: 1,
    },
    content: {
        padding: 16,
        paddingTop: 32,
        paddingBottom: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 28,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 12,
        letterSpacing: 0.5,
    },
    aboutCard: {
        padding: 24,
        borderRadius: 16,
        borderWidth: 1.5,
        marginBottom: 32,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        marginBottom: 14,
        fontWeight: '400',
    },
    paragraphLast: {
        fontSize: 16,
        lineHeight: 26,
        textAlign: 'center',
        fontWeight: '400',
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 16,
        textAlign: 'center',
    },
    preferenceCard: {
        borderRadius: 12,
        borderWidth: 1.5,
        paddingHorizontal: 20,
        paddingVertical: 4,
        marginBottom: 32,
    },
    preferenceRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        gap: 12,
    },
    preferenceLabel: {
        flex: 1,
        fontSize: 16,
        fontWeight: '500',
    },
    teamContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 14,
    },
    memberCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        paddingVertical: 14,
        borderRadius: 8,
        borderWidth: 1.5,
    },
    memberIcon: {
        marginRight: 10,
    },
    memberName: {
        fontSize: 16,
        fontWeight: '600',
        letterSpacing: 0.2,
    },
});

export default styles;
