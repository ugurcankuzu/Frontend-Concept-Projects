import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Index from './pages/index';
import ChatPage from './pages/chat';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Index/>}/>
      <Route path='/room/:id' element={<ChatPage/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
