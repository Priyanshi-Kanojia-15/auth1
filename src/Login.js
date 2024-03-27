import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "./actions";
// import NavLink from 'react-bootstrap/esm/NavLink';
import { NavLink } from 'react-router-dom'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ToastContainer from "react-bootstrap/ToastContainer";
import Img from "./Img";
import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(userData));
    history("/Logout");
    localStorage.getItem("userData", JSON.stringify(userData));

  };
  
    // localStorage.getItem("userData", JSON.stringify(userData));

    // const loadeuser=JSON.stringify(localStorage.getItem("userData"));
    // if (
    //   userData.email === loadeuser.email &&
    //   userData.password === loadeuser.password
    // ) {
    //   localStorage.setItem("loggedin", true);
    //   history("/Logout");
    // } else {
    //   alert("Sucseefully logged in");
    // }
  
  return (
    // <form onSubmit={handleSubmit}>
    //     <input type="text" name="username" onChange={handleChange} />
    //     <input type="password" name="password" onChange={handleChange} />
    //     <button type="submit" onChange={handleSubmit}>Log In</button>
    // </form>

    <div className="container mt-3">
      <section className="d-flex justify-content-between">
        <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
          <h3 className="text-center col-lg-6">Sign IN</h3>
          <Form>
            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </Form.Group>

            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
              <Form.Control
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </Form.Group>
            <Button
              variant="primary"
              className="col-lg-6"
              onClick={handleSubmit}
              style={{ background: "rgb(67, 185, 127)" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
          
          <p className='mt-3'>Don't Have an Account <span><NavLink to="/">Signup</NavLink></span> </p>
        </div>
        <Img />
      </section>
      <ToastContainer />
    </div>
  );
};

export default Login;
