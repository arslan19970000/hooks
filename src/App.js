import React from 'react'

import Productpage from './pages/productpage'

import Download from './components/Download'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Logout from './components/Logout';

import Home from './pages/Home'
import Footer from './components/Footer';
import Header from './components/Header';
import Goto from './components/Goto';
import Notgo from './components/Notgo';
import ProductList from './components/Premium';
import CreateProducts from './components/crud/CreateProducts';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => {
  return (
    <>
    
    <Router>
        <Header/>
            <Routes>
                
            <Route path='/' element={<Register/>}/>
            
                <Route path='/home' element={<Home/>}/>
                
                <Route path="/products" element={< Productpage/>}/>
                <Route path='/createproducts' element={<CreateProducts/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}>
                <Route path='Goto'element={<Goto/>}/>
                <Route path='Notgo' element={<Notgo/>}/>
                </Route>
                <Route path='/premium' element={<ProductList/>}/>
                

                
            </Routes>
           <Footer/>
           
        </Router>
    

    </>
  )
}

export default App