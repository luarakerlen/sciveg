import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme';
import { SafeAreaView, Text } from 'react-native';
import {
	useFonts,
	Poppins_400Regular,
	Poppins_500Medium,
	Poppins_700Bold,
	Poppins_800ExtraBold,
	Poppins_900Black,
} from '@expo-google-fonts/poppins';

export default function App() {
	const [fontsLoaded] = useFonts({
		Poppins_400Regular,
		Poppins_500Medium,
		Poppins_700Bold,
		Poppins_800ExtraBold,
		Poppins_900Black,
	});

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<ThemeProvider theme={theme}>
			<StatusBar style='light' translucent backgroundColor='transparent' />
			<SafeAreaView style={{ backgroundColor: 'red', flex: 1 }}>
				<Text>Testando</Text>
			</SafeAreaView>
		</ThemeProvider>
	);
}
