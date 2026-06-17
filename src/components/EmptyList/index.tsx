import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
	message?: string;
};

const EmptyList: React.FC<Props> = ({ message = 'Nenhum item encontrado' }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>{message}</Text>
		</View>
	);
};

export default EmptyList;