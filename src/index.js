import './index.css';

import {BrowserRouter, Route} from 'react-router-dom';

// import App from './App';
import Create from './Create';
import CreateNoteComponent from './CreateNoteComponent';
import Home from './Home';
import React from 'react';
import ReactDOM from 'react-dom';
import UpdateNoteComponent from './UpdateNoteComponent';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
<BrowserRouter>
  <Route exact path = "/" component = {Home} />
  <Route path = "/create" component = {Create} />

  <Route path = "/createNote" component = {CreateNoteComponent} />
  <Route path = "/updateNote/:id" component = {UpdateNoteComponent} />
</BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
