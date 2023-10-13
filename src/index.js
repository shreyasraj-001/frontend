import React from 'react';
import App from './App';
import Home from './component/page/Home';
import Menu from './component/page/Menu';
import Contact from './component/page/Contact';
import About from './component/page/About';
import Login from './component/page/Login';
import Newproduct from './component/page/Newproduct';
import Signup from './component/page/Signup';

import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='menu' element={<Menu />} />
      <Route path='about' element={<About />} />
      <Route path='login' element={<Login />} />
      <Route path='contact' element={<Contact />} />
      <Route path='signup' element={<Signup />} />
      <Route path='newproduct' element={<Newproduct />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
