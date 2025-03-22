import React from 'react';
import './room.scss';
import { useNavigate } from 'react-router-dom';

export default function Card({ el }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    // Convert room title to URL-friendly slug
    const roomSlug = el.roomTitle.toLowerCase().replace(/\s+/g, '-');
    navigate(`/RoomDetails/${roomSlug}`);
  };

  return (
    <div className='roomCard'>
      <div className='roomcardImg' onClick={handleViewDetails} style={{ cursor: 'pointer' }}>
        <img src={el.roomImg} alt={el.roomTitle} />
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
            <img src={el.star} alt="star" />
            <img src={el.star} alt="star" />
            <img src={el.star} alt="star" />
            <img src={el.star} alt="star" />
            <img src={el.star} alt="star" />
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
          <div className='viewDetails' onClick={handleViewDetails} style={{ cursor: 'pointer' }}>
            <button>View Details</button>
          </div>
          <div className='BookNow'>
            <button>Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
