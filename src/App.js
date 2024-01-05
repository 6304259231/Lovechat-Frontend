import React ,{useState}  from 'react';
import './App.css';
import Login from './Routes/Login'
import Navbar from './Navbar';
import Register from './Routes/Register';
import  { BrowserRouter , Route , Routes } from 'react-router-dom'
import Mychat from './Routes/Mychat';
import Settings from './Routes/Settings';
import Network from './Routes/Network'


function App() {
  let [login ,setLogin] = useState(false)

  return (
    <BrowserRouter>
      <Navbar login={login}/>
      <Routes>
         <Route path="/register" element={<Register/>}/>
         <Route path="/" element={<Login setLogin={setLogin}/>}/>
         <Route path="/mychat" element={<Mychat/>}/>
         <Route path="/network" element={<Network/>}/>
         <Route path="/settings" element={<Settings setLogin={setLogin}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
