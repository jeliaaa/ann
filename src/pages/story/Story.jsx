import React from 'react'
import './story.scss'
import { Link } from 'react-router-dom'
import screen1 from '../../galleryImgs/screen1.jpg'
import screen2 from '../../galleryImgs/screen2.jpg'
import screen3 from '../../galleryImgs/screen3.jpg'
const Story = () => {
    return (
        <div className='story'>
            <nav className='navigation'>
                <ul>
                    <Link to={'/time'}>Time</Link>
                    <Link to={'/story'}>Story</Link>
                    <Link to={'/message'}>Message</Link>
                </ul>
            </nav>
            <h2>Story Time</h2>
            <div className='story_div'>
                <p>გრძელი ამბავია, იქიდან არ მოვკრუგავ როდის მომეწონე და როდის რა მოხდა, პირველად რო მოგწერე, მაგის სქრინია აქვე, ჩანს ეგ დღე, პირვლეად მესიამოვნა ვიღაცის ყურადღება ეგრე ძაან მაგ დღეს</p>
                <img className='screen1' alt='...' src={screen1} />
                <p>ხინკალზეც დამპატიჟა გოგომ დაჟე</p>
                <img className='screen2' alt='...' src={screen2} />
                <p>ოოო, მერე მაგარი ამბები დატრიალდა, ნახე რისი ფოტო მაქ შენახული.</p>
                <img className='screen2' alt='...' src={screen3} />
            
            </div>
        </div>
    )
}

export default Story