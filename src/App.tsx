import React from 'react';
import './App.css';

import AppWithReduxService from './redux/app';
import AppWithMobx from './mobx/app';
import AppWithPlainService from './plain/app';

let App = AppWithPlainService;
//let App = AppWithReduxService;
// let App = AppWithMobx;
export default App;
