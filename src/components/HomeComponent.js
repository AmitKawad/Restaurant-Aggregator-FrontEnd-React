import React, { useState } from 'react'
import './HomeComponent.css'
import axios from 'axios';
import {
    BrowserRouter,
    RouterProvider,
    Routes,
    Route,
    useNavigate,
    Navigate,
    us
} from "react-router-dom";
import CustomerComponent from './CustomerComponent';


function HomeComponent() {
    const navigate = useNavigate();
    const [emailState, setEmailState] = useState('');
    const [password, setPassword] = useState('')
    const emailHandler = function (event) {
        setEmailState((previousState) => {
            return event.target.value
        })
    }
    const passwordHandler = function (event) {
        setPassword((previousState) => {
            return event.target.value
        })

    }
    const submitHandler = async function (event) {
        event.preventDefault();
        let token = ''
        const response = await axios.post(`http://localhost:3002/customer/login?email=${emailState}&password=${password}`)
        token = response.data.accessToken
        console.log('token#####33', token)
        const restaurantMenu = await axios.get(`http://localhost:3002/restaurant/menu`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        if (token.length > 0) {
            console.log('token', token)
            const expirationMs = 60 * 1000; // 1 hour in milliseconds
            const expirationTime = Date.now() + expirationMs;
            const item = { value: true, expiration: expirationTime };
            localStorage.setItem('login', JSON.stringify(item));
            const menu = restaurantMenu.data.data
            navigate('/account', { state: menu })
        } else {
            navigate('/')
        }
    }
    return (
        <div id="HomeComponentBody">
            <div className="col-md-6 login-form-1">
                <h1 className='Title'>Restaurant Aggregator</h1>
                <br></br>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="Your Email *" defaultValue={""} onChange={emailHandler} required />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Your Password *" defaultValue={""} onChange={passwordHandler} required />
                    </div>
                    <div className="form-group">
                        <input type="submit" className="btnSubmit" value="Login" />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <a href="#" className="ForgetPwd">Forgot Password?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}



export default HomeComponent