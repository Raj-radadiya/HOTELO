import React from 'react';
import './account.scss';
export default function Account() {
    return (
        <div>
            <div className='mainsection'>
                <section>
                    <div className='container'>
                        <div className='accountFlex'>
                            <div className='loginCard'>
                                <div className='sectionTitle'>
                                    <h2>Login Now</h2>
                                </div>
                                <div className='loginForm'>
                                    <form>
                                        <input type='email' placeholder='email' />
                                        <input type='passwrd' placeholder='password' />
                                        <div className='rememberPassword'>
                                            <div>
                                                <input type='checkbox' />
                                            </div>
                                            <div>
                                                <p>Remember Password</p>
                                            </div>
                                        </div>
                                        <div className='loginBtn'>
                                            <button>Login</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className='loginCard'>
                                <div className='sectionTitle'>
                                    <h2>Register  Now</h2>
                                </div>
                                <div className='loginForm'>
                                    <form>
                                        <input type='text' placeholder='Full Name' />
                                        <input type='email' placeholder='email' />
                                        <input type='passwrd' placeholder='password' />
                                        <div className='rememberPassword'>
                                            <div>
                                                <input type='checkbox' />
                                            </div>
                                            <div>
                                                <p>I will follow all of the privacy policy.</p>
                                            </div>
                                        </div>
                                        <div className='loginBtn'>
                                            <button>Register</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
