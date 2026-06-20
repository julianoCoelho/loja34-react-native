import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

type Props = {
	message?: string;
};

const EmptyList: React.FC<Props> = ({ message = 'Nenhum item encontrado' }) => {
	return (
		<View style={styles.container}>
			<Text style={[styles.text, { color: theme.colors.text }]}>{message}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 20,
	},
	text: {
		fontSize: 16,
		textAlign: 'center',
	},
});
export default EmptyList;