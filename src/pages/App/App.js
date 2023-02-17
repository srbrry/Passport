import { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import Locations from "../Locations/Locations";
import LocationDetailPage from "../LocationDetailPage/LocationDetailPage";
import AuthPage from "../AuthPage/AuthPage"
import NavBar from "../../components/NavBar/NavBar";
import './App.css';

import { getUser } from "../../utilities/users-service"

export default function App() {

      //getUser will insert token if there is one in local storage 
      //otherwise it will be a value of "null"
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes >
            <Route path="/locations" element={<Locations />} />
            <Route path=":location" element={<LocationDetailPage />} />
            <Route path="/*" element={<Navigate to="/locations" />} />
          </Routes> 
        </> 
        :
        <AuthPage setUser={setUser}/>
      }
    </main>
  );
}


