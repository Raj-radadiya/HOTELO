import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './rendering/home'
import Header from './layout/header'
import Footer from './layout/footer'
import Room from './rendering/room Details'
import About from './rendering/about'
import Blog from './rendering/blog'
import Account from './rendering/pages/account'
import Pages from './rendering/pages'
import RoomCard from './rendering/home/roomCard'
import TeamMember from './rendering/home/teamMember'

export default function Routing() {
    return (
        <BrowserRouter basename="/">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/account' element={<Account />} />
                <Route path='/ourRooms' element={<RoomCard />} />
                <Route path='/ourTeams' element={<TeamMember />} />
                <Route path='/about' element={<About />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/pages' element={<Pages />} />
                <Route path='/RoomDetails/:roomSlug' element={<Room />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
