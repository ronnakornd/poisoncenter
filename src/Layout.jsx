import React from 'react'
import { Outlet, Link } from "react-router-dom";
import { useState ,useEffect } from 'react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function Layout() {
const [user, setUser] = useState(null);
useEffect(() => {
  if (window.localStorage.getItem("user")) {
      var userStorage = JSON.parse(window.localStorage.getItem("user"));
      setUser(userStorage);
  }
 }, []);
  return (
    <div className="md:px-20">
        <div className=' bg-gray-100'>
        <Navbar user={user} />
        <Outlet context={[user, setUser]}/>
        <Footer/>
        </div>
    </div>
  )
}

export default Layout