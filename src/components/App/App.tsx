import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import {Navbar} from "../Content/NavBar/Navbar";
import {Login} from "../Content/Registration/Login";
import {ContactsContainer} from "../Content/MyContacts/Contacts/ContactsContainer";
import {useAppDispatch} from "../../store";
import {initializedAppAsync} from "../../store/contentSlice";

function App() {
    const dispatch = useAppDispatch()
    useEffect(() => dispatch(initializedAppAsync()))
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path = "/login" element={<Login/>}/>
            <Route path = "/contacts" element={<ContactsContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
