import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen'
import AppNavigation from './components/routing/AppNavigation';
import { store } from './store/Store';


const App = () => {

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        //This will wrap store with our full application and
        // we can use the global state anywhere throughout the app     
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
};

export default App;
