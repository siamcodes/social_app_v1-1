import React from 'react';
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';

import LoadingScreen from './screens/LoadingScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCvG_C-fJyg0MxheHue-3U4egII4U4sC5M",
  authDomain: "socialappv1-48a9e.firebaseapp.com",
  databaseURL: "https://socialappv1-48a9e.firebaseio.com",
  projectId: "socialappv1-48a9e",
  storageBucket: "socialappv1-48a9e.appspot.com",
  messagingSenderId: "16737524887",
  appId: "1:16737524887:web:e8527ec6dc77f867ed9dd2",
  measurementId: "G-X5E6YX7F3T"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
});

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen,
});

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }

  )
)










