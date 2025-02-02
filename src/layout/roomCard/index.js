import React from 'react';
import './room.scss';
import CommonBtn from '../button';

export default function Card({ el }) {

    return (
        <div className='roomCard'>
            <div className='roomcardImg'>
                <img src={el.roomImg} alt='room' />
            </div>
            <div className='roomCardDetails'>
                <div className='roomPrice'>
                    <p>{el.price}</p>
                </div>
                <div className='roomTitleRating'>
                    <div className='roomTitle'>
                        <h5>{el.roomTitle}</h5>
                    </div>
                    <div className='roomRating'>
                        <img src={el.star} alt='Star' />
                        <img src={el.star} alt='Star' />
                        <img src={el.star} alt='Star' />
                        <img src={el.star} alt='Star' />
                        <img src={el.star} alt='Star' />
                    </div>
                </div>
                <div className='roomFacility'>
                    <div className='roomFacilityItem'>
                        <img src={el.bed} alt='Bed' />
                        <span>{el.totalBed}</span>
                    </div>
                    <div className='roomFacilityItem'>
                        <img src={el.bath} alt='Bath' />
                        <span>{el.totalBath}</span>
                    </div>
                    <div className='roomFacilityItem1'>
                        <img src={el.wifi} alt='Wifi' />
                        <span>{el.totalWifi}</span>
                    </div>
                </div>
                <div className='roomDescription'>
                    <p>{el.para}</p>
                </div>
                <div className='roomBtn'>
                    <div className='viewDetails'>
                        <CommonBtn />
                    </div>
                    <div className='BookNow'>
                        <CommonBtn />
                    </div>
                </div>
            </div>
        </div>
    )
}