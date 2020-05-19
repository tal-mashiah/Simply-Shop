import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history';

import Header from './cmps/header/Header.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import SearchPage from './pages/SearchPage.jsx';
import Checkout from './pages/Checkout.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <div className="App header-padding"> 
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/category/:name/:_id" component={SearchPage} exact/>
          <Route path="/product/:_id" component={ProductDetails} exact/>
          <Route path="/search/:term" component={SearchPage} exact/>
          <Route path="/checkout" component={Checkout} exact/>
          <Route path="/auth/:pageName" component={Login} exact/>
          <Route path="/auth/:pageName" component={Login} exact/>
          <Route path="/" component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
