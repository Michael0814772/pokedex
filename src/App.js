import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from './components/AppNavigator';
import Pokedex from './container/Pokedex';
import PokemonDetails from './container/PokemonDetails';
import { persistor, store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Switch>
            <Route exact path='/'>
              <Pokedex />
            </Route>
            <Route path='/pokemon/:id'>
              <PokemonDetails />
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
