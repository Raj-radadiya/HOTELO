import React, { useEffect } from 'react'
import RoomView from './RoomView'
import { useParams, useNavigate } from 'react-router-dom';
import { RoomPhoto } from '../../utils';

export default function Room() {
    const { roomSlug } = useParams();
    const navigate = useNavigate();
    
    const room = RoomPhoto.find(room => 
        room.roomTitle.toLowerCase().replace(/\s+/g, '-') === roomSlug
    );

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!room) {
        navigate('/');
        return null;
    }

    return (
        <div>
            <RoomView room={room} />
        </div>
    )
}
