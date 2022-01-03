import React from 'react';
import './Navigation.css';
import AllOrders from '../AllOrders/AllOrders';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (

    <div className="container-fluid ps-0">
      <div className="row flex-nowrap ">
        <div className="col-auto col-md-4  px-0 ps-0 pe-0" style={{width:"300px"}} >
          <div className="sidebar  d-flex flex-column align-items-center align-items-sm-start pe-3 pt-2 ps-4 min-vh-100 " style={{ color: '#fff', backgroundColor: ' #5530C5',}}>
            <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto  text-decoration-none" style={{ color: '#fff' }} >
              Menu</NavLink>
            <ul className="w-100  nav  flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
              <li className="w-100 mt-2" >
                <NavLink to="#n" className="ps-3 nav-style  py-3 px-0 " >
                  <i className="fas fa-shapes"></i> <span className="ms-2 d-none d-sm-inline">Dashboard</span>
                </NavLink>
              </li>
              <li className="w-100 mt-2" >
                <NavLink to="#n" className="ps-3 nav-style  py-3 px-0 " >
                <i className="far fa-user"></i> <span className="ms-2 d-none d-sm-inline">Customer</span>
                </NavLink>
              </li>
              <li className="w-100 mt-2" >
                <NavLink  to="/dashboard/allOrders" className="ps-3 nav-style  py-3 px-0 "><i className="fas fa-clipboard-list"></i>
                 <span className="ms-2 d-none d-sm-inline"> All Orders</span>
                </NavLink>
              </li>
              <li className="w-100 mt-2 ">
                <NavLink to="#submenu1" data-bs-toggle="collapse" className="ps-3 nav-style  py-3 px-0 " ><i className="fas fa-business-time"></i>
                <span className="ms-2 me-5 d-none d-sm-inline">Farmer </span><i className="ps-5 fas fa-chevron-down"></i> </NavLink>
                <ul className="collapse  nav flex-column ms-1 " id="submenu1" data-bs-parent="#menu">
                  <li className=" pt-2 custom-list" style={{width:'97%',marginLeft:'3%' }}>
                    <NavLink to="#gh" className="ps-4 nav-style " >Place Order </NavLink>
                  </li>
                  <li className=" pt-2 custom-list" style={{width:'97%',marginLeft:'3%' }}>
                    <NavLink to="#gh" className="ps-4 nav-style " >View Order</NavLink>
                  </li>
                </ul>
              </li>
              <li className="w-100 mt-2">
                <NavLink to="#submenu2" data-bs-toggle="collapse" className="ps-3 nav-style py-3 my-1 px-0 " ><i className="fas fa-business-time"></i>
                  <span className="ms-2 me-5 d-none d-sm-inline"> Buisness </span> <i className="ps-4 fas fa-chevron-down"></i></NavLink>
                <ul className="collapse  nav flex-column ms-1 " id="submenu2" data-bs-parent="#menu">
                  <li className=" pt-1 custom-list" style={{width:'97%',marginLeft:'3%' }}>
                    <NavLink to="#gh" className="ps-4 nav-style " >Place Order </NavLink>
                  </li>
                  <li className=" pt-2 custom-list" style={{width:'97%',marginLeft:'3%' }}>
                    <NavLink to="#gh" className="ps-4 nav-style "> View Orders </NavLink>
                  </li>
                </ul>
              </li>
              <li className="w-100 mt-2" >
                <NavLink to="#n" className="ps-3 nav-style py-3 my-1 px-0" ><i className="fas fa-angle-double-right"></i>
                  <span className="ms-2 me-5 d-none d-sm-inline"> Trade </span><i className="ps-5 fas fa-chevron-down"></i>
                </NavLink>
              </li>
              
            </ul>
            <hr />
            
          </div>
        </div>
        <div className="col py-3">
        <AllOrders/>
        </div>
      </div>
    </div>
  );
};

export default Navigation;