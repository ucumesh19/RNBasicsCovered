import 'react-native-gesture-handler';
import * as React from 'react';
import { useEffect } from 'react';
import { Linking } from 'react-native';
import Login from '../AuthScreen/Login';
import SignUp from '../AuthScreen/SignUp';
import Profile from '../AuthScreen/Profile';
import EditProfile from '../AuthScreen/EditProfile';
import CheckApi from '../AuthScreen/CheckApi';
import ApiDetails from '../AuthScreen/ApiDetails';
import MapScreen from '../Maps/MapScreen';
import DeepLinkingTest from '../AuthScreen/DeepLinkingTest';
import DeepTest from '../AuthScreen/DeepTest';
import CameraRollScreen from '../AuthScreen/CameraRollScreen';
import ApiCall from '../AuthScreen/ApiCall';
import HomeScreen from '../AuthScreen/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";


const Stack = createStackNavigator();

const AppNavigation = () => {

    const linking = {
        prefixes: ["project://", "https://my-first-project.com/app"],
        config: {
            Login: 'login',
            MapScreen: 'maps',
            DeepLinkingTest: {
                path: "deep/:deepID",
                params: {
                    deepID: null
                }
            }
        }
    }

    useEffect(() => {
        Linking.addEventListener("url", ({ url }) => {
            // console.log("listener")
            if (url) {
                // letarr = url.split("/")
                // idParam = arr[arr.length - 1]
                // dummyDeepLinkedUrl = url;
                // if (idParam.includes("_")) {
                //   idParam = idParam.substring(0, idParam.indexOf("_"))
                // }
                // navigateToUrl(url, idParam)
                console.log("Event Listener-", url)
            }
        })
    }, [])

    return (
        <NavigationContainer linking={linking} >
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={HomeScreen}>

                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="CheckApi" component={CheckApi} />
                <Stack.Screen name="ApiDetails" component={ApiDetails} />
                <Stack.Screen name="MapScreen" component={MapScreen} />
                <Stack.Screen name="DeepLinkingTest" component={DeepLinkingTest} />
                <Stack.Screen name="DeepTest" component={DeepTest} />
                <Stack.Screen name="CameraRollScreen" component={CameraRollScreen} />
                <Stack.Screen name="ApiCall" component={ApiCall} />
            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AppNavigation;