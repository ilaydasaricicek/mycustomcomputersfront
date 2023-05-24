import React from "react";
// 3rd party
import { ToastContainer } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
//Components
import Login from "./components/Login"
import Register from "./components/Register"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./views/Home"
import DefaultLayout from "./views/DefaultLayout"


function App() {

  return (
    <>
    <Router>
       <Routes>
         <Route
           exact
           path="/"
           name="Home"
           element={
               <Home />
           } />
         <Route
           exact
           path="/login"
           name="Login Page"
           element={
             <>
               <Header />
               <Login />
               <Footer />
             </>
           }
         />
         <Route
           exact
           path="/register"
           name="Register Page"
           element={
             <>
               <Header />
               <Register />
               <Footer />
             </>
           }
         />
         <Route
           path="*"
           name="Default"
           element={      
               <DefaultLayout />
           }
         />
       </Routes>
   </Router>
   <ToastContainer/>
 </>

  );
}

export default App;
