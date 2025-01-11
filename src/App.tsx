import {SafeAreaView, ScrollView, StatusBar, Text, useColorScheme, View} from "react-native";
import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions
} from "react-native/Libraries/NewAppScreen";
import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationHeader} from "./components";
import {MemoListScreen} from "./screens";
import {RouterParamList} from "./type/routerParam";


const Stack = createNativeStackNavigator<RouterParamList>();


function App() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex:1
    };

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="home"
                    screenOptions={() => ({
                        header: () => (
                            <NavigationHeader
                            />
                        ),
                    })}>
                    <Stack.Screen
                        name="home"
                        component={MemoListScreen}
                        initialParams={{title: "123123123"}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

export default App;