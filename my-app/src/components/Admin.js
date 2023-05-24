import React, { useState,useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from 'react-redux';
import {getProductsAdmin} from "../services/adminSlice";
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from 'axios';

const Admin = () => {
  //hooks
  const dispatch = useDispatch()
  const [products, setProducts] = useState([]);
  const [orders, setOrders] =  useState([]);
  const [user, setUser] = useState([]);
  

  const customStyles = {
    rows: {
      style: {
        border: "1px solid #27374d",
        fontSize: "14px",
        height: "65px"
      }
    },
    headCells: {
      style : {
        background: "#415b80",
        color: "white",
        fontSize: "14px"
      }
    }
  }


  const productColumns = [
    {
      name: 'Photo',
      selector: row => <img style={{width:"50px", height:"50px",borderRadius:"25px"}} src={`${row.imageUrl}`} alt="photo" /> ,  
  },
    {
        name: 'Title',
        selector: row => row.title,     
    },
    {
        name: 'Brand',
        selector: row => row.brand,  
    },
    {
        name: 'Screen Size',
        selector: row => row.model,   
    },
    {
      name: 'CPU',
      selector: row => row.cpu,  
  },
  {
    name: 'RAM',
    selector: row => row.ram,
  },
  {
    name: 'Hard Disc',
    selector: row => row.hardDisc, 
  },
  {
    name: 'Graphics',
    selector: row => row.graphics  ,
  },
  {
    name: 'Price',
    selector: row => row.price  ,
  },
  {
    name: 'Stock',
    selector: row => row.stock ,
  },
  ];

  const orderColumns = [
    {
      name: 'Customer',
      selector: row => row.firstName + row.lastName,  
  },
    {
        name: 'Price',
        selector: row => row.price,     
    },
    {
        name: 'Address',
        selector: row => row.addres,  
    },
    {
        name: 'Shipping Method',
        selector: row => row.shippingMethod,   
    },
    {
      name: 'Status',
      selector: row => row.orderStatus,  
  }
  ];

  const userColumns = [
    {
      name: 'Customer',
      selector: row => row.firstName + " " + row.lastName,  
  },
    {
        name: 'Email',
        selector: row => row.email,     
    },
    {
        name: 'Status',
        selector: row => row.status,  
    }
  ];


  const getProd = async () => {
    try {
      const resp = await axios.get("http://localhost:5294/api/Products");
      setProducts(resp.data)
    } catch (error) {
      errorNote(`Error: ${error}`);
    }
  };

  const getOrders = async ()=> {
    try {
      const resp = await axios.get("http://localhost:5294/api/Orders");
      setOrders(resp.data)
      
    } catch (error) {
      errorNote(`Error: ${error}`);
    }
  };

  const getUsers = async ()=> {
    try {
      const resp = await axios.get("http://localhost:5294/api/Users");
      setUser(resp.data)
      
    } catch (error) {
      errorNote(`Error: ${error}`);
    }
  };
  


  //effects
  useEffect(() => {
      getProd();
      getOrders();
      getUsers()
    return () => {
      
    }
  }, [])
  

  return (
    <div
      className="container justify-content-center "
      style={{ minHeight: "85vh" }}
    >
      <div className="row mt-4">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div
              className="row mb-4"
              style={{ border: "1px solid gray", borderRadius: "12px",paddingTop:"10px" }}
            >
              <DataTable
                title="Products"
                columns={productColumns}
                data={products}
                pagination
                striped
                responsive
                customStyles={customStyles}
              />
            </div>
            <div
              className="row mb-4"
              style={{ border: "1px solid gray", borderRadius: "12px",paddingTop:"10px" }}
            >
              <DataTable
                title="Orders"
                columns={orderColumns}
                data={orders}
                pagination
                striped
                responsive
                customStyles={customStyles}
              />
            </div>
            <div
              className="row"
              style={{ border: "1px solid gray", borderRadius: "12px",paddingTop:"10px" }}
            >
              <DataTable
                title="Customers"
                columns={userColumns}
                data={user}
                pagination
                striped
                responsive
                customStyles={customStyles}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin