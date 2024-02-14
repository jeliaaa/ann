import React from 'react'
import './main.scss'
import { Link } from 'react-router-dom'
const Main = () => {
    return (
        <div className='main'>
            <Link to={'/login'}>
                <button>Open</button>
            </Link>
        </div>
    )
}

export default Main