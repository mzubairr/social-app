import React, { useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import Home from '../pages/Home'
import About from '../pages/About'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { addUser } from '../redux/reducers/authSlice'
import { auth } from '../lib/firebase'
import Feed from '../pages/Feed'

const Approuter = () => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.authSlice.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) dispatch(addUser(false));
      else dispatch(addUser(JSON.parse(JSON.stringify(user))));
    });
  }, []);

  if (user === null) return <>Loading...</>;

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/about" element={<About />} />
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </>
        )}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>

      {/* <Footer /> */}
    </>
  )
}

export default Approuter