import React from 'react'
import Herobanner from './HeroBannerSlider'
import RoomCard from './roomCard'
import Queation from './userquestion'
import CustomerReview from './customerReview'
import TeamMember from './teamMember'

export default function Home() {
  return (
    <div>
      <Herobanner/>
      <RoomCard/>
      <Queation/>
      <CustomerReview/>
      <TeamMember/>
    </div>
  )
}
