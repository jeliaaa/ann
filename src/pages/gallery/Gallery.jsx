import React from 'react'
import './gallery.scss'
import { Link } from 'react-router-dom'
import erti from '../../galleryImgs/erti.jpg'
import ori from '../../galleryImgs/ori.jpg'
import sami from '../../galleryImgs/sami.jpg'
import otxi from '../../galleryImgs/otxi.jpg'
import xuti from '../../galleryImgs/xuti.jpg'
import ekvsi from '../../galleryImgs/ekvsi.jpg'
import shvidi from '../../galleryImgs/shvidi.jpg'
import rva from '../../galleryImgs/rva.jpg'
import cxra from '../../galleryImgs/cxra.jpg'
const Gallery = () => {
    const imgs = [erti, ori, sami, otxi, xuti, ekvsi, shvidi, rva, cxra];
    return (
        <div className='gall'>
            <nav className='navigation'>
                <ul>
                    <Link to={'/time'}>Time</Link>
                    <Link to={'/story'}>Story</Link>
                    <Link to={'/message'}>Message</Link>
                </ul>
            </nav>
            <div className='gal_body'>
                <div className="gallery">
                    <input type="checkbox" />
                    {imgs.map((e) => (
                        <img src={e} alt={e} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery