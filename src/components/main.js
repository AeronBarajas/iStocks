import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './home';
import Dashboard from './dashboard';
import About from './about';
import stockData from './stock-data';
import Stocks from './stocks';

const Main = () => {
  return (
    <main>
       <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/stocks/:symbol"
                 render={props => <Stocks stockData={stockData} {...props} />}
          />
          <Route path="/stocks"
                 render={props => <Dashboard {...props} stockData={stockData} />}
          />
      </Switch>
    </main>
  );
}

export default Main;
