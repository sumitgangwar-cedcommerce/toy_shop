import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Shop from './Shop';
import Cart from './Cart';
import { useEffect } from 'react';

function App() {
  
  return (
    <Routes>
      <Route path='/' element ={<Layout />}>
        <Route index  element = {<Home />} />
        <Route path='shop' element = {<Shop />} />
        <Route path='cart' element = {<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
