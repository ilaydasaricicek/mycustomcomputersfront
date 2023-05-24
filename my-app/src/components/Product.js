import React, { useState,useEffect } from 'react';
import { errorNote, successNote } from '../utils/ToastNotify';
import axios from 'axios';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../services/cartSlice';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [detail, setDetail] = useState({});
  const [show, setShow] = useState(false);

  const {cart} = useSelector(state => state.cart)

  const handleClose = () => setShow(false);

  const getProd = async () => {
    try {
      const resp = await axios.get(`http://localhost:5294/api/Products`);
      setProducts(resp.data);
    } catch (error) {
      errorNote(`Error: ${error}`);
    }
  };

  const addCart = (item)=> {
    dispatch(addToCart(item));
    setShow(false)
  }

  const getDetail = async (id) => {
    setShow(true)
    try {
      const resp = await axios.get(`http://localhost:5294/api/Products/${id}`);
      setDetail(resp.data);
    } catch (error) {
      errorNote(`Error: ${error}`);
    }
  };

    //effects
    useEffect(() => {
      getProd();
    return () => {  
    }
  }, [])


  return (
    <div
    className="container justify-content-center "
    style={{ minHeight: "85vh" }}
  >
    <div className="row mt-2">
      <div style={{width:"100%",border:"1px solid #ddd", borderRadius:"7px",margin:"10px 0",fontFamily:"Quicksand",padding:"10px 20px",
      display:"flex",justifyContent:"end" }}>
          <div style={{marginRight:"1.5rem",cursor:"pointer",position:"relative"}}onClick={()=>navigate("/checkout")}><i class="fa-solid fa-cart-shopping"></i>
          <span style={{display:"flex",justifyContent:"center", alignItems:"center",background:"red", color:"white",position:"absolute",width:"17px",height:"17px",borderRadius:"50%", fontSize:"10px",fontWeight:"bold",top:-7, right:-10}}>{cart.length}</span>
          </div>
          <div
          onClick={()=>navigate("/profile")}
          style={{cursor:"pointer"}}
          ><i class="fa-solid fa-user"></i></div>
      </div>
      <div className="d-flex justify-content-center align-items-center h-100 p-1" style={{border:"1px solid #ddd", borderRadius:"7px", flexWrap:"wrap"}}>
          {
            products.map(item=> (
              <div style={{minWidth:"120px" ,maxWidth:"22%",border:"1px solid #ddd", borderRadius:"7px", margin:"20px 10px",fontFamily:"Quicksand",padding:"10px"}} key={item.id} >
                  <h6 >{item.title}</h6>
                  <img style={{width:"100%",borderRadius:"7px", height:"150px"}} src={item.imageUrl} alt={item.title} />
                  <h4 style={{margin:"10px 0"}}>${item.price}</h4>
                  <div style={{width:"100%",display:"flex",justifyContent:"center", alignItems:"center"}}>
                      <button style={{background:"#27374D", color:"white",
                      borderRadius:"7px",
                      padding:"3px 0", 
                      fontFamily:"Quicksand"}} className='w-100' onClick={()=>getDetail(item.id)} type='primary' >DETAILS</button>
                  </div>  
              </div>
            ))
          }

      </div>
    </div>
    {show && (
        <Offcanvas
          show={show}
          onHide={handleClose}
          placement="end"
          style={{ width: "500px", fontFamily:"Quicksand" }}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Product Details</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <div style={{width:"100%"}}>
              <h6>{detail.title}</h6>
              <hr />
            </div>
            <div style={{width:"100%"}}>
              <img width="100%" src={detail.imageUrl} 
              alt={detail.title}
              style={{borderRadius:"7px"}} />
            </div>
            <div style={{width:"100%", marginTop:"1rem"}}>
              <h4>${detail.price}</h4>
            </div>
              <hr />
            <div style={{width:"100%", display:"flex"}}>
              <div style={{flex:1}}>
                 <b>CPU:</b> {" "}{detail.cpu}
              </div>
              <div style={{flex:1}}>
              <b>RAM:</b> {" "} {detail.ram}
                 </div>
            </div>
            <div style={{width:"100%", display:"flex"}}>
              <div style={{flex:1}}>
                 <b>Hard Disc:</b> {" "}{detail.hardDisc}
              </div>
              <div style={{flex:1}}>
               <b>Graphics:</b> {" "} {detail.graphics}
                 </div>
            </div>
            <div style={{width:"100%", display:"flex"}}>
              <div style={{flex:1}}>
                 <b>Model:</b> {" "}{detail.model}
              </div>
              <div style={{flex:1}}>
               <b>Screen Size:</b> {" "} {detail.screenSize}
                 </div>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "end" }}>
              <button onClick={handleClose} className="btn btn-outline-danger">Cancel</button>
              <button
                type="submit"
                className="btn btn-warning"
                style={{
                  background: "#27374D",
                  color: "white",
                  border:"none",
                  marginLeft: "10px",
                }}
                onClick={() => addCart(detail)}
              >
                Add to Cart
              </button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      )}
  </div>
  )
}

export default Product