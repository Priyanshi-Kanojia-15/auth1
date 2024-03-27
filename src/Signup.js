import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from './actions';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import NavLink from 'react-bootstrap/NavLink'
import { NavLink } from 'react-router-dom'
import ToastContainer from 'react-bootstrap/ToastContainer'
import { useNavigate } from 'react-router-dom'
import Img from './Img'
// import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const history = useNavigate();
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    }); 
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setUserData({
            ...userData,
            [e.target.name]: e.target.value
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(userData));
         history("/Login")
        localStorage.setItem('userData', JSON.stringify(userData));
    };

    return (
        // <form onSubmit={handleSubmit}>
        //     <input type="text" name="username" onChange={handleChange} />
        //     <input type="password" name="password" onChange={handleChange} />
        //     <button type="submit" onClick={handleSubmit}>Sign Up</button>
        // </form>




        
        <div className="container mt-3 mb-4">
                <section className='d-flex justify-content-between'>
                
                    <div className="left_data mt-2 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form onSubmit={handleSubmit} className='justify-content-center'>
                            {/* <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group> */}
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' value={userData.email}  onChange={handleChange} placeholder="Enter email" />
                            </Form.Group>

                           
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' value={userData.password}  onChange={handleChange} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={handleSubmit} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span onClick={handleSubmit}><NavLink to="/Login">SignIn</NavLink></span> </p>
                        
                    </div>
                    <Img />
                 </section>
                <ToastContainer />
            </div>



    )
};

export default Signup;
