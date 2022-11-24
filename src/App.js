import React from 'react';
import Dashboad from './Components/dashboard/Dashboard';
import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import Card from './Components/card/Card';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './Components/Registartion/Registration';
import Login from './Components/Login/Login';
import ReadNow from './Components/ReadNow/ReadNow';
import Business from './Components/filter/Business';
import Sports from './Components/filter/Sports';
import Entertainment from './Components/filter/Entertainment';


class App extends React.Component {
  render() {

    return <div className='main-content'>

      <BrowserRouter>
      
      <Header/>
        <Routes>
        <Route path="/card" element={<Card/>}/>
        <Route path="/" element={<Dashboad/>}/>
        <Route path="/registraion" element={<Registration/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/readnow" element={<ReadNow/>}/>
        <Route path="/business" element={<Business/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="/entertainment" element={<Entertainment/>}/>
     
      </Routes>
      <Footer/>
      </BrowserRouter>
      {/* <NewsList/> */}

    </div>

  }
}
export default App;
