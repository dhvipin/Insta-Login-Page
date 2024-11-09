// src/LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './LoginForm.css'; // To style the form

axios.defaults.baseURL = "http://localhost:7000/"

const LoginForm = () => {
    const [userData, setUserData] = useState({
        username: "",
        password: ""
    });


    const handelOnChange = (e) => {
        const { value, name } = e.target;
        setUserData((preve) => {
            return {
                ...preve,
                [name]: value,
            }
        })
    }
    const handelSubmit = async (e) => {
        e.preventDefault();
        const data = await axios.post("/create", userData);
        console.log(data);

        if (data.data.success) {
            alert(data.data.message);
            setUserData({ username: "", password: "" })
        }
    };


    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handelSubmit} action=''>
                <div className="logo">Instagram</div>
                <input
                    type="text"
                    placeholder="Phone number, username, or email"
                    name='username'
                    id='username'
                    onChange={handelOnChange}
                    value={userData.username}

                />
                <input
                    type="password"
                    placeholder="Password"
                    name='password'
                    id='password'
                    onChange={handelOnChange}
                    value={userData.password}

                />
                <button type="submit" className="login-button">Log In</button>
            </form>
        </div>
    );
};

export default LoginForm;
