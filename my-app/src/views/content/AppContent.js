import React from 'react';
import { useLocation } from 'react-router-dom';
//components
import Checkout from "../../components/Checkout";
import Product from "../../components/Product";
import Profile from "../../components/Profile";
import Admin from "../../components/Admin";

const AppContent = () => {

  const location = useLocation().pathname

  if(location.split("/")[1] === "checkout"){
    return  <Checkout/>
  }else if (location.split("/")[1] === "product"){
    return <Product/>
  }else if (location.split("/")[1] === "admin"){
    return <Admin/>
  }else if (location.split("/")[1] === "profile"){
    return <Profile/>
  }
    
}

export default AppContent