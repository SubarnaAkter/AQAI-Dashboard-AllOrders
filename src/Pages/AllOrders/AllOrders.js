import React from 'react';
import { Table } from 'react-bootstrap';
import './AllOrders.css';
const AllOrders = () => {
  const billingAddress = {
      name: 'Sathishkumar',
      mobileNo: '+ 91 99999 99999',
      address:'3rd Floor,Tower C, Rattha Tek Meadows,Elcot Sez, Sholinganallur, Chennai - 600 119',
      alternativeNo : '+91 99999 99999',
      customerFrom:' 00 / 00 / 0000'
}

   const delivaryAddress={
    orderId:' 00000000000000',
    sONo :" 000000000",
    address:'3rd Floor,Tower C, Rattha Tek Meadows,</br>Elcot Sez, Sholinganallur, Chennai - 600 119',
   
    customerFrom : '00/00/0000',
    orderedTotal :" 00,000.00",
        }

      const allOrders=[
        {
          id:1,
          productName:'Aseel Cross',
          orderedQuantity:'0000',
          orderedPrice:'00,000'
         
        },
        
        {
          id:2,
          productName:'Aseel Cross',
          orderedQuantity:'0000',
          orderedPrice:'00,000'
         
        },
        {
          id:3,
          productName:'Aseel Cross',
          orderedQuantity:'0000',
          orderedPrice:'00,000'
         
        },
        {
          id:4,
          productName:'Aseel Cross',
          orderedQuantity:'0000',
          orderedPrice:'00,000'
         
        }
      ]
return (
  <div>
    <div className="row row-cols-1 row-cols-md-1 g-4 " style={{backgroundColor:'#EBE4FF'}}>
      <div className="col">
        <div className="card card-style">
          <div className="card-body ps-4 pt-3">
            <h4 className="card-title fw-bold" style={{ color: '#5530C5' }}>All Orders</h4>
            <p className="card-text">Lorem ipsum is simply dummy.</p>
            <hr />
            <h5 className='mb-4 fw-bold'>Customers Oreder Details</h5>

            <div className="ms-3 row shadow-sm p-2">
             
              <div className="col">
                <p className='text-danger  fw-bold'>Billing Address</p>
                <div className='lh-1'>
                <p className='fw-bold'>Name: {billingAddress.name}</p>
                  <p className='fw-bold'>Mobile No.:{billingAddress.mobileNo}</p>
                  <p><span className='fw-bold'>Address:</span> <br/> 
                  {billingAddress.address}</p>
                  <p className='fw-bold'>Alternative No.:{billingAddress.alternativeNo}</p>
                  <p>Customer From:{billingAddress.customerFrom}</p>
                </div>
              </div>
              <div className="col">
                <p className='text-info fw-bold'>Delivery Address</p>
                <div className='lh-1'>
                  <p className='fw-bold'>Order Id: {delivaryAddress.orderId}</p>
                  <p className='fw-bold'>SO No.:{delivaryAddress.sONo}</p>
                  <p><span className='fw-bold'>Address:</span> <br/> 
                  {delivaryAddress.address}</p>
                  <p>Customer From:{delivaryAddress.customerFrom}</p>
                  <p className='fw-bold'>Order Total:  ₹ {delivaryAddress.orderedTotal}</p>
                </div>
              </div>
            </div>

            <div>
            <h5 className='mb-4 fw-bold mt-4'>List of products ordered by customer</h5>
            <div>
            <Table responsive  className="text-center" style={{ borderCollapse:'separate',
                borderSpacing:'0 5px'}}>
                    <thead style={{backgroundColor:'#5F3ECB',color:'white'}}>
                        <tr>
                            <th>Product Name</th>
                            <th>Ordered Quantity</th>
                            <th>Ordered Price</th>
                            <th>Status Update</th>
                        </tr>
                    </thead>
                    <tbody style={{backgroundColor:'#EBE4FF', }}>

                        {
                            allOrders.map(order => <tr className="m-3"
                                key={order.id} >

                               
                                <td >{order.productName}</td>
                                <td>{order.orderedQuantity}</td>
                                <td>₹ {order.orderedPrice}</td>
                                <td >
                                     <button className="me-3 border-0 ps-5 bg-white"
                                     style={{borderRadius:'18px'}}>Booked <i className="ps-3 pe-3 fas fa-angle-down"></i>
                                    </button> 

                                   
                                </td>

                            </tr>)
                        }

                    </tbody>
                </Table>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


);
};

export default AllOrders;