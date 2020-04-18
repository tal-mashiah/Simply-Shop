import React from 'react';
import { Router, Switch, Route} from 'react-router';
import history from './history';

import Header from './cmps/header/Header.jsx';
import Home from './views/Home.jsx';
import CategoryPage from './views/CategoryPage.jsx';

function App() {
  return (
    <div className="App header-padding"> 
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/category" component={CategoryPage} exact/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
