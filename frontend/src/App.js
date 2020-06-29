import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Header from './cmps/header/Header.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import SearchPage from './pages/SearchPage.jsx';
import Checkout from './pages/Checkout.jsx';
import Login from './pages/Login.jsx';
import Account from './pages/Account.jsx';
import NotFound from './pages/NotFound.jsx';
import GrowlMessage from './cmps/general/GrowlMessage.jsx';
import Spinner from './cmps/general/Spinner.jsx';


function App() {
  return (
    <div className="App header-padding">
      <Router history={history}>
        <GrowlMessage />
        <Spinner />
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/category/:name/:_id" component={SearchPage} exact />
          <Route path="/product/:_id" component={ProductDetails} exact />
          <Route path="/search/:term" component={SearchPage} exact />
          <Route path="/checkout" component={Checkout} exact />
          <Route path="/auth/:pageName" component={Login} exact />
          <Route path="/account/:pageName" component={Account} exact />
          <Route path="/" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
