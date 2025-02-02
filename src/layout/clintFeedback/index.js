import React from 'react'
import './clint.scss'
export default function ClintReview({ el }) {
    return (
        <div>
            <div className='reviewCard'>
                <div className='contentBg'>
                    <div className='reviewRating'>
                        <img src={el.star} alt='el.star' />
                        <img src={el.star} alt='el.star' />
                        <img src={el.star} alt='el.star' />
                        <img src={el.star} alt='el.star' />
                        <img src={el.star} alt='el.star' />
                        <span>(5.0)</span>
                    </div>
                    <div className='reviewText'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna ali. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                    </div>
                </div>
                <div className='reviewUser'>
                    <div className='customerImg'>
                        <img src={el.clintImg} alt='customerFirst' />
                    </div>
                    <div className='customerName'>
                        <h3>{el.clintName}</h3>
                        <span>{el.clintProffection}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}