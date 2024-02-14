import React from 'react'
import './message.scss'
import { Link } from 'react-router-dom'
const Message = () => {
    return (
        <div className='message'>
            <nav className='navigation'>
                <ul>
                    <Link to={'/time'}>Time</Link>
                    <Link to={'/story'}>Story</Link>
                    <Link to={'/message'}>Message</Link>
                </ul>
            </nav>
            <p>ჰომ, აქ ბევრი არ ვიცი რა დავწერო, მიყვარხარ ძალიან ძალიან, გახსოვდეს ყოველთვის ეგ, და როცა დაგჭირდეს, ნებისმიერ დროს, ამ ღილაკს დააჭირე ჩემო გულო.</p>
            <a href="tel:+995579166280">==== ალე ====</a>
        </div>
    )
}

export default Message