import React, { Fragment,useState } from 'react'
import '../css/Navbar.css'

const Navbar = () => {
    const [showmenu,setShowMenu] = useState(false)
    return (
        <Fragment>
            <nav>
                <a href='#'>
                    <h1>Medcare<span className='dot'>.</span></h1>
                </a>
                <div className= {showmenu ? "menu mobile-menu": "menu"}>
                    <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href='#services'>Services</a></li>
                    <li><a href='#ProtFolio'>Portfolio</a></li>
                    <li><a href='#blog'>Blog</a></li>
                    <li><a href='#contact'>Contact</a></li>
                    </ul>
                    
                </div>
                <div className="right">
                    <a href='#contact' className='contact-btn'>Contact</a>
                    <div className={showmenu ? "bar deactive": "bar"} onClick={()=> setShowMenu(!showmenu)}>
                        <i className="fa-solid fa-bars"></i>
                    </div>

                    <div className={showmenu ? "close active": "close"} onClick={() => setShowMenu(!showmenu)}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar