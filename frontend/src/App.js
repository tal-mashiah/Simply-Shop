import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

import GrowlMessage from './cmps/general/GrowlMessage.jsx';
import Spinner from './cmps/general/Spinner.jsx';
import Header from './cmps/header/Header.jsx';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import SearchPage from './pages/SearchPage.jsx';
import Checkout from './pages/Checkout.jsx';
import Login from './pages/Login.jsx';
import Account from './pages/Account.jsx';
import NotFound from './pages/NotFound.jsx';
import Footer from './cmps/footer/Footer';
import AboutUs from './pages/AboutUs.jsx';
import Terms from './pages/Terms.jsx';
import ScrollToTop from './cmps/general/ScrollToTop.jsx';

function App() {
  return (
    <div className="app header-padding">
      <Router history={history}>
        <ScrollToTop />
        <GrowlMessage />
        <Spinner />
        <Header />

        <div className="app-content">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/category/:name/:_id" component={SearchPage} exact />
            <Route path="/product/:_id" component={ProductDetails} exact />
            <Route path="/search/:term" component={SearchPage} exact />
            <Route path="/checkout" component={Checkout} exact />
            <Route path="/about" component={AboutUs} exact />
            <Route path="/terms" component={Terms} exact />
            <Route path="/auth/:pageName" component={Login} exact />
            <Route path="/account/:pageName" component={Account} exact />
            <Route path="/" component={NotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
