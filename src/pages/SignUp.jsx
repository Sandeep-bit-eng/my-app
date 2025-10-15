import React from "react";
import './SignUp.css';
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
// import { Link } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const auth = getAuth(app);


const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [stop, setStop] = useState(false);



    const handleSignUp = (e) => {
        if (!email || !password) {
            alert("Email aur password dono fill karo 😅");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password).then((value) => {
            alert("User Created Successfully");
            setStop(true);
        }).catch((error) => {
            console.log(error);
            navigate("/404", { state: { message: "Login failed! Try harder 😜" } });
        });

    };


    const handleback = () => {
        setStop(false);
        setEmail("");
        setPassword("");
    }


    return (
        <>
            {!stop ?
                (
                    <div className="sign-up-wrapper" >
                        <div className="sign-up-form">
                            <h1 className="sign-up-title">Sign Up</h1>
                            <div className="input-group">
                                <label>Email:</label>
                                <input onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="Enter Email" className="input-field" />
                            </div>
                            <div className="input-group">
                                <label>Password:</label>
                                <input onChange={e => setPassword(e.target.value)} value={password} type="password" placeholder="Enter Password" className="input-field" />
                            </div>
                            <button onClick={(e) => { handleSignUp(e) }} className="sign-up-button">Sign Up</button>
                            <p>
                                Don't have an account?{" "}
                                <Link to="/" style={{ color: "blue", cursor: "pointer" }}>
                                    Back to Sign In
                                </Link>
                            </p>
                        </div>
                    </div >
                )
                :
                (
                    <div className="sign-up-wrapper" >

                        <div className="sign-up-form">
                            <h1 className="sign-up-title" >Welecom to this Session !!</h1>

                            <div className="input-group">
                                <label>Hello This Your Email Id  : </label>
                                {email}
                            </div>
                            <div className="input-group">
                                <label>This is Your Password :  </label>
                                {password}
                            </div>
                            <div>
                                <button onClick={handleback} className="sign-up-button">Go Back</button>
                            </div>
                        </div>




                    </div>
                )}
        </>

    );
};

export default SignUp;