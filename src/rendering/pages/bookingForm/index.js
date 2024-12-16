import React from 'react';
import './bookingform.scss';
import plus from '../../../assets/icon/ei--plus.svg';
export default function Booking() {
    return (
        <div>
            <div className='mainsection'>
                <section>
                    <div className='formTitle'>
                        <h2>Book Any Accommodation With Minimalist Price And Comfortable Destinations</h2>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='filterSectionMain'>
                            <div className='filtersection'>
                                <button>Hotels</button>
                                <button>Resorts</button>
                                <button>Motels</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='formTitle'>
                            <h2>Book Hotel Rooms</h2>
                        </div>
                        <form>
                            <div className='formFlex'>
                                <div className='formName'>
                                    <label>Your Name</label>
                                    <input type='text' placeholder='Name' />
                                </div>
                                <div className='formName'>
                                    <label>Address</label>
                                    <input type='text' placeholder='Address' />
                                </div>
                            </div>
                            <div className='formFlex'>
                                <div className='formName'>
                                    <label>Email</label>
                                    <input type='email' placeholder='Name' />
                                </div>
                                <div className='formName'>
                                    <label>Phone</label>
                                    <input type='text' placeholder='Address' />
                                </div>
                            </div>
                            <div className='formRoom'>
                                <label>Rooms</label>
                                <select>
                                    <option>Select A Room</option>
                                    <option>Single Room</option>
                                    <option>Double Room</option>
                                    <option>Triple Room</option>
                                    <option>Quad Room</option>
                                    <option>Queen Room</option>
                                    <option>King Room</option>
                                    <option>Twin Room</option>
                                    <option>Studio Room</option>
                                    <option>Standard Room</option>
                                    <option>Deluxe Room</option>
                                    <option>Superior Suite</option>
                                    <option>Presidential Suite</option>
                                </select>
                            </div>
                            <div className='formFlex'>
                                <div className='formName'>
                                    <label>Starting Date</label>
                                    <input type='date' />
                                </div>
                                <div className='formName'>
                                    <label>Ending Date</label>
                                    <input type='date' placeholder='date' />
                                </div>
                            </div>
                            <div className='formFlex'>
                                <div className='formName'>
                                    <label>Adult</label>
                                    <input type='number' />
                                </div>
                                <div className='formName'>
                                    <label>Child</label>
                                    <input type='number' />
                                </div>
                            </div>
                            <div className='formFlex'>
                                <div className='formName'>
                                    <label>Rooms</label>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                                <div className='formName'>
                                    <label>Nights</label>
                                    <select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </div>
                            </div>
                            <div className='formBtn'>
                                <div className='plusIcon'>
                                    <img src={plus} alt='plus' />
                                </div>
                                <div className='bookNow'>
                                    <span>Book Now</span>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </div>
    )
}
