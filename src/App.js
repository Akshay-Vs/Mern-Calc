import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Iphone from './components/component-iphone/Iphone';
import Sidebar from './components/component-sidebar/Sidebar';

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="container">
          <Sidebar />
      </div>
      <Iphone/>
    </BrowserRouter>
  );
}

export default App;
