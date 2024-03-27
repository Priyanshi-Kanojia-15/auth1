import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from './actions';
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
const Logout = () => {
    const history=useNavigate();
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('userData');
        dispatch(logOut());
        history("/")
    };

    return (
        
       
        <div className='p-3'>
        <h1>Successfully Logged In in AccuKnox</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        {/* <button onClick={handleLogout}>Log Out</button> */}
        <Button variant="danger" onClick={handleLogout}>Logout</Button>
        </div>
      
        
    );
};

export default Logout;























