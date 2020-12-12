import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './home/home';
import Detail from './detail/detail';
import Archives from './archives/archives';
import Categories from './categories/categories';
import Tags from './tags/tag';
import About from './about/about';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/detail/:id" component={Detail} />
      <Route path="/archives" component={Archives} />
      <Route path="/categories" component={Categories} />
      <Route path="/tags" component={Tags} />
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
