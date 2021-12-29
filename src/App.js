// import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import './App.css';
import AllOrders from './Pages/AllOrders/AllOrders';
import Navigation from './Pages/Shared/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
       {/* <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<AllOrders />} />
   
    </Routes>
  </BrowserRouter> */}
    </div>
  );
}

export default App;
