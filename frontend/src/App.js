import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history';

import Header from './cmps/header/Header.jsx';
import Home from './views/Home.jsx';
import ProductDetails from './views/ProductDetails.jsx';
import SearchPage from './views/SearchPage.jsx';
import Checkout from './views/Checkout.jsx';
import Login from './views/Login.jsx';

function App() {
  return (
    <div className="App header-padding"> 
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/category/:name/:_id" component={SearchPage}/>
          <Route path="/product/:_id" component={ProductDetails}/>
          <Route path="/search/:term" component={SearchPage}/>
          <Route path="/checkout" component={Checkout}/>
          <Route path="/register" component={Login}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
