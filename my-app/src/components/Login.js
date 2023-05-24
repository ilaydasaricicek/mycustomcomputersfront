import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Log_in } from "../services/authSlice";

const Login = () => {

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {loading} = useSelector((state)=> state.auth)

  const onChange = (e) => {
    setUserInfo({
        ...userInfo,
        [e.target.name]: e.target.value,
    });
};

  const loginUser = () => {
    dispatch(Log_in({ userInfo, navigate }));
};

  const loginOnEnter = (event) => {
    if (event.key === "Enter") {
        loginUser()
    }
}


  return (
    <div
    className="container justify-content-center "
    style={{ minHeight: "85vh" ,paddingTop:"100px"}}
  >
    <div className="row mt-4">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div style={{border:"1px solid gray", borderRadius:"7px", minHeight:"30rem"}} className="col-6 d-flex justify-content-center align-items-center">
          <form onSubmit={loginUser}>
          <div style={{height:"2rem"}} className="form-outline d-flex justify-content-center align-items-center"> <i class="fa-solid fa-circle-user fa-2xl"></i></div>
          <hr />
              {/* <!-- Email input --> */}
            <div className="form-outline mb-2">
              <input type="email" id="form3Example3" className="form-control form-control-lg"
                placeholder="Enter a valid email address" 
                name="email"
                autoComplete="email"
                value={userInfo.email}
                onChange={onChange}/>
              <label className="form-label" for="form3Example3">Email address</label>
            </div>
  
            {/* <!-- Password input --> */}
            <div className="form-outline mb-3">
              <input type="password" id="form3Example4" className="form-control form-control-lg"
                name="password"
                onKeyDown={loginOnEnter}
                placeholder="Enter password" 
                autoComplete='password'
                value={userInfo.password}
                onChange={onChange}/>
              <label className="form-label" for="form3Example4">Password</label>
            </div>
            <div className="text-center text-lg-start mt-4 pt-2">
              <button type="submit" className="btn btn-lg w-100"
                style={{background:"#8B1874",color:"whitesmoke"}}
                >Login</button>
              <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/register"
                  className="link-danger">{loading ? "Loading" : "Register"} </a></p>
            </div>
          </form>
              

        </div>
      </div>
    </div>
  </div>
  )
}

export default Login