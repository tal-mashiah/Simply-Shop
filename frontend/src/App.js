import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history';

import Header from './cmps/header/Header.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import SearchPage from './pages/SearchPage.jsx';
import Checkout from './pages/Checkout.jsx';
import Login from './pages/Login.jsx';

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
          <Route path="/:pageName" component={Login}/>
          <Route path="/:pageName" component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
