import React, { useState } from "react";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignIn = () => {
        // Basic validation
        if (!email || !password) {
            alert("Email aur password dono fill karo 😅");
            return;
        }

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                alert("User SignIn Successfully 😎");
            })
            .catch((error) => {
                console.log(error);
                navigate("/404", { state: { message: "Login failed! Try harder 😜" } });
            });
    };

  
    


    const handleGoogleSignIn = () => {  
        signInWithPopup(auth, GoogleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            alert("Google Sign-In Successful 😎");
        })
        .catch((error) => {
            console.log(error);
            navigate("/404", { state: { message: "Google Sign-In failed! Try again 😜" } });
        });
    }

    return (
        <div className="sign-up-wrapper">
            <div className="sign-In-form">
                <h1 className="sign-In-title">Sign In</h1>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        placeholder="Enter Email"
                        className="input-field"
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        placeholder="Enter Password"
                        className="input-field"
                    />
                </div>
                <div>
                    <button onClick={handleSignIn} className="sign-In-button">
                        Sign In
                    </button>
                    <br />
                    <br />
                    <button onClick={handleGoogleSignIn} className="sign-In-button">
                        Sign In With Google
                    </button>
                 </div>

                <p>
                    Don't have an account?{" "}
                    <Link to="/signup" style={{ color: "blue", cursor: "pointer" }}>
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
