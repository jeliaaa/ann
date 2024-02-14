import React, { useState, useEffect } from 'react';
import './time.scss'
import { Link } from 'react-router-dom';
const Time = () => {
    // Define the specific date here
    const specificDate = '2023-02-16T20:00:00Z';

    const [timeDifference, setTimeDifference] = useState(calculateTimeDifference(specificDate));

    // Function to calculate time difference
    function calculateTimeDifference(targetDate) {
        const targetDateTime = new Date(targetDate);
        const currentDateTime = new Date();
        const timeDifference = currentDateTime - targetDateTime;

        const years = Math.floor(timeDifference / (365 * 24 * 60 * 60 * 1000));
        const days = Math.floor((timeDifference % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));
        const hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (60 * 1000));
        const seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);

        return { years, days, hours, minutes, seconds };
    }

    useEffect(() => {
        // Update the time difference every second
        const intervalId = setInterval(() => {
            setTimeDifference(calculateTimeDifference(specificDate));
        }, 1000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, [specificDate]);

    return (
        <div className='time'>
            <nav className='navigation'>
                <ul>
                    <Link to={'/gallery'}>Gallery</Link>
                    <Link to={'/story'}>Story</Link>
                    <Link to={'/message'}>Message</Link>
                </ul>
            </nav>
            <h2>What time did we spend together?</h2>
            <div className='container'>
                <div className='wrap'><h4>Years</h4> <div className='circle'><p>{timeDifference.years}</p></div></div>
                <div className='wrap'><h4>Days</h4> <div className='circle'><p>{timeDifference.days}</p></div></div>
                <div className='wrap'><h4>Hours</h4> <div className='circle'><p>{timeDifference.hours}</p></div></div>
                <div className='wrap'><h4>Minutes</h4> <div className='circle'><p>{timeDifference.minutes}</p></div></div>
                <div className='wrap'><h4>Seconds</h4> <div className='circle'><p>{timeDifference.seconds}</p></div></div>
            </div>
        </div>
    );
};

export default Time;
