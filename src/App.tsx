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
import {QueryClient, QueryClientProvider} from 'react-query';
import memoListData from "../data/memos.json"
import {queryKeyConstant} from "./constance"


const Stack = createNativeStackNavigator<RouterParamList>();
const queryClient = new QueryClient();
queryClient.setQueryData(queryKeyConstant.getMemoList, memoListData)


function App() {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
        flex:1
    };

    return (
        <QueryClientProvider client={queryClient}>
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
                                <NavigationHeader />
                            ),
                        })}>
                        <Stack.Screen
                            name="home"
                            component={MemoListScreen}
                            initialParams={{title: "메모 리스트"}}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </QueryClientProvider>
    );
}

export default App;