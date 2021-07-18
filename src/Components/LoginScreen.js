import React from 'react'
import './Styles/LoginScreen.css'

function LoginScreen() {
    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img
                    className="loginscreen_logo"
                    src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
                    alt="bg"
                />
                <button className="loginscreen_button">
                    Sign In              </button>
                <div className="loginscreen_gradient">
                </div>
                <div className="login_body">
                    <>
                        <h1>Unlimited films, TV programmmes and
                            more.
                        </h1>
                        <h2>
                            Watch anywhere. Cancel at any time.
                        </h2>
                        <h3>
                            Ready to watch?Enter your email to create or restart your membership.
                        </h3>
                        <div className="loginscreen_input">
                            <form>
                                <input type="email" placeholder="Email Address" />
                                <button className="loginscreen_getstarted">GET STARTED</button>
                            </form>
                        </div>
                    </>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
