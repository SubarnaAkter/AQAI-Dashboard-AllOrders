import React from 'react';
import './Navigation.css';
import {  Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllOrders from '../AllOrders/AllOrders';


const Navigation = () => {
  return (

    <div className="container-fluid ps-0">
      <div className="row flex-nowrap ">
        <div className="col-auto col-md-4  px-0 ps-0 pe-0" style={{width:"300px"}} >
          <div className="h-100 d-flex flex-column align-items-center align-items-sm-start pe-3 pt-2 ps-4 min-vh-100 text-white" style={{ color: '#fff', backgroundColor: ' #5530C5' }}>
            <NavLink href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none" >
              Menu</NavLink>
            <ul className="w-100  nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start " id="menu">
              <li className="ps-3 nav-item custom-list" >
                <NavLink href="#n" className="nav-link align-middle px-0" style={{ color: '#fff' }}>
                  <i className="fas fa-shapes"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                </NavLink>
              </li>
              <li className="ps-3  nav-item custom-list" >
                <NavLink href="#n" className="nav-link px-0 " style={{ color: '#fff' }}>
                <i className="far fa-user"></i> <span className="ms-1 d-none d-sm-inline">Customer</span>
                </NavLink>
              </li>
              <li className="ps-3  nav-item custom-list" >
                <Nav.Link  to="/dashboard/allOrders" className="nav-link align-middle px-0" style={{ color: '#fff' }}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline"><i className="fas fa-clipboard-list"></i> All Orders</span>
                </Nav.Link>
              </li>
              <li className=" w-100">
                <NavLink href="#submenu1" data-bs-toggle="collapse" className="ps-3 nav-link px-0 " style={{ color: '#fff',backgroundColor:"#5F3ECB", width:"100%", }}>
                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Farmer</span> </NavLink>
                <ul className="collapse  nav flex-column ms-1 " id="submenu1" data-bs-parent="#menu">
                  <li className=" pt-2 custom-list" style={{width:'97%',marginLeft:'3%' }}>
                    <NavLink href="#gh" className="ps-4" style={{ color: '#fff',width:'90%' }}>Place Order </NavLink>
                  </li>
                  <li className=" pt-2 custom-list" style={{width:'97%',marginLeft:'3%' }}>
                    <NavLink href="#gh" className="ps-4" style={{ color: '#fff' }}>View Order</NavLink>
                  </li>
                </ul>
              </li>
              <li className="w-100 mt-2">
                <NavLink href="#submenu2" data-bs-toggle="collapse" className="ps-3 nav-link px-0 " style={{ color: '#fff',backgroundColor:"#5F3ECB", width:"100%", }}>
                  <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Buisness</span> </NavLink>
                <ul className="collapse  nav flex-column ms-1 " id="submenu2" data-bs-parent="#menu">
                  <li className=" pt-2 custom-list" style={{width:'97%',marginLeft:'3%' }}>
                    <NavLink href="#gh" className="ps-4" style={{ color: '#fff' }}>Place Order </NavLink>
                  </li>
                  <li className=" pt-2 custom-list" style={{width:'97%',marginLeft:'3%' }}>
                    <NavLink href="#gh" className="ps-4" style={{ color: '#fff' }}> View Orders </NavLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item custom-list" >
                <NavLink href="#n" className="ps-3  nav-link  px-0" style={{ color: '#fff' }}>
                  <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Trade</span>
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