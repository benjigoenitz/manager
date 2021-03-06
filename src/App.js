import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: "AIzaSyBM-rnlsF5U63ZmvXODJTKLdVdW9mVo2vo",
            authDomain: "manager-4dc02.firebaseapp.com",
            databaseURL: "https://manager-4dc02.firebaseio.com",
            projectId: "manager-4dc02",
            storageBucket: "manager-4dc02.appspot.com",
            messagingSenderId: "626320202642"
            };
            
        firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={(store)}>
                <Router />
            </Provider>
        );
    }
}

export default App;
