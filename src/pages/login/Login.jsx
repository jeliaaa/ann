import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './login.scss'
const Login = () => {
    const [username, setUsername] = useState('');
    const hardcodedUsername = '2023-02-16';
    const navigate = useNavigate()

    // Function to handle login
    const handleLogin = () => {
        if (username === hardcodedUsername) {
            alert('Login successful!');
            navigate('/time')
            // You can redirect or perform any action upon successful login
        } else {
            alert('შეგირცხვა ნამუსი');
        }
    };
    return (
        <div className='login'>
            <h2>Pick the most memorable date to us</h2>
            <input onChange={(e) => setUsername(e.target.value)} type="date" placeholder='date' />
            <button className='enter' onClick={handleLogin}>Enter</button>
        </div>
    )
}

export default Login