import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history';

import Header from './cmps/header/Header.jsx';
import Home from './views/Home.jsx';
import CategoryPage from './views/CategoryPage.jsx';
import SearchPage from './views/SearchPage.jsx';

function App() {
  return (
    <div className="App header-padding"> 
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/category/:_id" component={CategoryPage} exact/>
          <Route path="/search/:term" component={SearchPage} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
