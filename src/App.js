import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import NotFoundPage from "./pages/NotFoundPage";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import { useState, useEffect } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { app } from "./firebase";
import { BrowserRouter } from "react-router-dom";
// import './pages/SignUp.css'

// const NotFound = (props) => <NotFoundPage {...props} />;

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

function App() {
  const [userlogin, setuserlogin] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        console.log("user is login");
        setuserlogin(user)
      } else {
        console.log("user not login");
        setuserlogin(null);
      }

    })

  }, [])

  if (userlogin === null) {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/404" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    )

  }

  return (
    <>
    
        <div>
        <h1>Hello User Login {userlogin.email}</h1>
        <button onClick={() => { signOut(auth) }}>LogOut</button>
        </div>

    </>
  );
}

export default App;


