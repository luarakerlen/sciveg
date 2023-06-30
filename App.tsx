import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';
import { SafeAreaView, Text } from 'react-native';

export default function App() {
	return (
		<ThemeProvider theme={theme}>
			<StatusBar style='light' translucent backgroundColor='transparent' />
			<SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
				<Text>Testando</Text>
			</SafeAreaView>
		</ThemeProvider>
	);
}
