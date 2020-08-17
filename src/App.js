import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './components/Home/Home';
import SearchInputContainer from './containers/SearchInputContainer';
import CardContainer from './containers/CardContainer';
import HeaderContainer from './containers/HeaderContainer';
import ManagementModalContainer from './containers/ManagementModalContainer';

const App = () => (
  <Provider store={store}>
    <HashRouter basename="/">
      <ManagementModalContainer />
      <HeaderContainer />
      <SearchInputContainer />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/:city" component={CardContainer} />
      </Switch>
    </HashRouter>
  </Provider>
);

export default App;
