import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PocetnaEkran from './screens/PocetnaEkran';
import LoginEkran from './screens/LoginEkran';
import PocetnaAdminEkran from './screens/PocetnaAdminEkran';
import PocetnaPoslovodaEkran from './screens/PocetnaPoslovodaEkran';
import PocetnaRadnikEkran from './screens/PocetnaRadnikEkran';
import UnosIsporukeEkran from './screens/UnosIsporukeEkran'
import UnosKorisnikaEkran from './screens/UnosKorisnikaEkran'
import PrikazKorisnika from './screens/PrikazKorisnika';
import PrikazIsporuka from './screens/PrikazIsporuka';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import korisnikReducer from './store/reducers/korisnici';
import isporukaReducer from './store/reducers/isporuke';
import loginReducer from './store/reducers/login';


const Stack = createNativeStackNavigator();

const glavniReducer = combineReducers({
  isporuke: isporukaReducer,
  korisnici: korisnikReducer,
  login: loginReducer
})

const centralniSpremnik = createStore(glavniReducer)


export default function App() {
  return (
    <Provider store={centralniSpremnik}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Skladiste" component={PocetnaEkran} />
          <Stack.Screen name="Login" component={LoginEkran} />
          <Stack.Screen name="admin" component={PocetnaAdminEkran} />
          <Stack.Screen name="poslovoda" component={PocetnaPoslovodaEkran} />
          <Stack.Screen name="radnik" component={PocetnaRadnikEkran} />
          <Stack.Screen name="UnosIsporuke" component={UnosIsporukeEkran} />
          <Stack.Screen name="UnosKorisnika" component={UnosKorisnikaEkran} />
          <Stack.Screen name="PrikazIsporuka" component={PrikazIsporuka} />
          <Stack.Screen name="PrikazKorisnika" component={PrikazKorisnika} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



