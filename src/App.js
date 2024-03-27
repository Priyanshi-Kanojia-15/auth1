// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// App.js
import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from "react-router-dom"
import { useDispatch } from 'react-redux';
import { signUp } from './actions';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import Header from './Header';
// import Details from './Details';
// import Home from "./component/Home";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check for user in local storage
    const user = localStorage.getItem('user');
    if (user) {
      dispatch(signUp(JSON.parse(user)));
    }
  }, [dispatch]);

  return (
    <div>
      <Header/>
      <Routes>
      <Route path='/' element={<Signup/>} />
      <Route path='/login' element={<Login />} />
      <Route path='/logout' element={<Logout />} />
      {/* <Route path='*' element={<Errror />} /> */}
    </Routes>
      {/* <h1>Authentication Example</h1> */}
      {/* <Signup/>
       <Login /> */}
      {/* <Logout />  */}
    </div>
  );
};

export default App;

