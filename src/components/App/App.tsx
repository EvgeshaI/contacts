import React from 'react';
import {Route, Routes} from "react-router-dom"
import './App.css';
import {Navbar} from "../Content/NavBar/Navbar";
import {Registration} from "../Content/Registration/Registration";
import {ContactsContainer} from "../Content/MyContacts/Contacts/ContactsContainer";

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
            <Route path = "/registration" element={<Registration/>}/>
            <Route path = "/contacts" element={<ContactsContainer/>}/>
        </Routes>
    </div>
  );
}

export default App;
