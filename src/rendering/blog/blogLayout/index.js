import React from 'react';
import './bloglayout.scss';
import blogImg from '../../../assets/image/blogImg.webp';
import { FaLongArrowAltRight } from "react-icons/fa";
import Input from '../../../layout/input';
export default function BlogLayout() {
    return (
        <div>
            <div className='containerLg'>
                <div className='mainsection'>
                    <div className='blogGrid'>
                        <div className='blogLayoutLeft'>
                            <div className='searchSection'>
                                <div className='searchText'>
                                    <h6>Search</h6>
                                </div>
                                <div className='searchInput'>
                                    <Input placeholder={'search'} />
                                </div>
                            </div>
                            <div className='recentPosts'>
                                <div className='recentPostsTitle'>
                                    <h6>Recent Posts</h6>
                                </div>
                                <div className='recentPostsDisc'>
                                    <ul>
                                        <li>
                                            <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                                        </li>
                                        <li>
                                            <a href='#'>The Importance of an Integrated Booking Engine in a Hotel’s Direct Booking.</a>
                                        </li>
                                        <li>
                                            <a href='#'>The Secret to Summertime Success on Your Hotel’s Website.</a>
                                        </li>
                                        <li>
                                            <a href='#'>How H10 Hotels grew their marketing database by capturing first-party data?</a>
                                        </li>
                                        <li>
                                            <a href='#'>How Penta Hotels Tripled Their Survey Answers Using Form Builder?</a>
                                        </li>
                                        <li>
                                            <a href='#'>Inside Palacio Estoril: Combining Historical Charm with Cutting-Edge Hospitality.</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='archives'>
                                <div className='archivesTitle'>
                                    <h6>Recent Posts</h6>
                                </div>
                                <div className='archivesDisc'>
                                    <ul>
                                        <li>
                                            <a href='#'>January 2024</a>
                                        </li>
                                        <li>
                                            <a href='#'>February 2024</a>
                                        </li>
                                        <li>
                                            <a href='#'>March 2024</a>
                                        </li>
                                        <li>
                                            <a href='#'>April 2024</a>
                                        </li>
                                        <li>
                                            <a href='#'>May 2024</a>
                                        </li>
                                        <li>
                                            <a href='#'>June 2024</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='archives'>
                                <div className='archivesTitle'>
                                    <h6>Categories</h6>
                                </div>
                                <div className='archivesDisc'>
                                    <ul>
                                        <li>
                                            <a href='#'>Europe</a>
                                        </li>
                                        <li>
                                            <a href='#'>Ireland</a>
                                        </li>
                                        <li>
                                            <a href='#'>Dubai</a>
                                        </li>
                                        <li>
                                            <a href='#'>New York</a>
                                        </li>
                                        <li>
                                            <a href='#'>Singapore</a>
                                        </li>
                                        <li>
                                            <a href='#'>Australia</a>
                                        </li>
                                        <li>
                                            <a href='#'>Hong Kong</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='tags'>
                                <div className='tagsTitle'>
                                    <h6>Tags</h6>
                                </div>
                                <div className='tagsBtn'>
                                    <button>Vacation</button>
                                    <button>Adventure</button>
                                    <button>Explore</button>
                                    <button>Destination</button>
                                    <button>Travel</button>
                                    <button>Tour</button>
                                    <button>Tourism</button>
                                    <button>Holiday</button>
                                </div>
                            </div>
                        </div>
                        <div className='blogLayoutRight'>
                            <div className='blogCard'>
                                <div className='blogImg'>
                                    <img src={blogImg} alt='blogImg' />
                                    <div className='blogLocation'>
                                        <span>Europe</span>
                                    </div>
                                </div>
                                <div className='blogInfo'>
                                    <div className='blogTitle'>
                                        <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                                    </div>
                                    <div className='blogLink'>
                                        <a href='#'>Read More</a>
                                        <FaLongArrowAltRight />
                                    </div>
                                </div>
                            </div>
                            <div className='blogCard'>
                                <div className='blogImg'>
                                    <img src={blogImg} alt='blogImg' />
                                    <div className='blogLocation'>
                                        <span>Europe</span>
                                    </div>
                                </div>
                                <div className='blogInfo'>
                                    <div className='blogTitle'>
                                        <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                                    </div>
                                    <div className='blogLink'>
                                        <a href='#'>Read More</a>
                                        <FaLongArrowAltRight />
                                    </div>
                                </div>
                            </div>
                            <div className='blogCard'>
                                <div className='blogImg'>
                                    <img src={blogImg} alt='blogImg' />
                                    <div className='blogLocation'>
                                        <span>Europe</span>
                                    </div>
                                </div>
                                <div className='blogInfo'>
                                    <div className='blogTitle'>
                                        <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                                    </div>
                                    <div className='blogLink'>
                                        <a href='#'>Read More</a>
                                        <FaLongArrowAltRight />
                                    </div>
                                </div>
                            </div>
                            <div className='blogCard'>
                                <div className='blogImg'>
                                    <img src={blogImg} alt='blogImg' />
                                    <div className='blogLocation'>
                                        <span>Europe</span>
                                    </div>
                                </div>
                                <div className='blogInfo'>
                                    <div className='blogTitle'>
                                        <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                                    </div>
                                    <div className='blogLink'>
                                        <a href='#'>Read More</a>
                                        <FaLongArrowAltRight />
                                    </div>
                                </div>
                            </div>
                            <div className='blogCard'>
                                <div className='blogImg'>
                                    <img src={blogImg} alt='blogImg' />
                                    <div className='blogLocation'>
                                        <span>Europe</span>
                                    </div>
                                </div>
                                <div className='blogInfo'>
                                    <div className='blogTitle'>
                                        <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                                    </div>
                                    <div className='blogLink'>
                                        <a href='#'>Read More</a>
                                        <FaLongArrowAltRight />
                                    </div>
                                </div>
                            </div>
                            <div className='blogCard'>
                                <div className='blogImg'>
                                    <img src={blogImg} alt='blogImg' />
                                    <div className='blogLocation'>
                                        <span>Europe</span>
                                    </div>
                                </div>
                                <div className='blogInfo'>
                                    <div className='blogTitle'>
                                        <a href='#'>A Behind the Scenes Look at Metro Hotels’ Direct Channel Success.</a>
                                    </div>
                                    <div className='blogLink'>
                                        <a href='#'>Read More</a>
                                        <FaLongArrowAltRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}