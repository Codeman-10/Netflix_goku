import React, { useEffect, useState } from 'react'
import './Styles/Nav.css'
function Nav() {
    const [show, handleShow] = useState(false);

    const transtitionNavBar = () => {
        window.scrollY > 100 ?
            handleShow(true) : handleShow(false)
    }

    useEffect(() => {
        window.addEventListener("scroll", transtitionNavBar);
        return () => window.removeEventListener("scroll", transtitionNavBar)
    }, [])

    return (
        <div className={`nav ${show &&"nav_black"}`}>
            <div className="nav_contents">
                <img
                    className="nav_logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt=""
                />
                <img
                    className="nav_avatar"
                    src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
                    alt=""
                />
            </div>
        </div>
    )
}

export default Nav
