// import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AllOrders from './Pages/AllOrders/AllOrders';
import Navigation from './Pages/Shared/Navigation';

function App() {
  return (
    <div>
     
       <BrowserRouter>
       <Navigation/>
    <Routes>
      
      {/* <Route path="/dashboard/allOrders" element={<AllOrders />} /> */}
   
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
