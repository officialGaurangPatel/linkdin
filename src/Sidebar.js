import React from 'react';
import './Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

const Sidebar = () => {

    const { user: user } = useSelector(selectUser);

    const recentItems = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
    return (
        <div className='sidebar'>
            <div className='sidebar__top'>
                <img src="https://images.unsplash.com/photo-1657315627733-3feecc8c1f6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
                <Avatar className="sidebar__avatar" src={user && user.photoUrl ? user.photoUrl : user.email[0]}>
                </Avatar>
                <h2>{user && user.displayName} </h2>
                <h4>{user && user.email}</h4>
            </div>
            <div className='sidebar__stats'>
                <div className='sidebar__stat'>
                    <p>Who Viewed you</p>
                    <p className='sidebar__statNumber'>2,543</p>
                </div>
                <div className='sidebar__stat'>
                    <p>Views on post</p>
                    <p className='sidebar__statNumber'>2,443</p>
                </div>
            </div>

            <div className='sidebar__bottom'>
                <p>Recents</p>
                {recentItems('react')}
                {recentItems('programming')}
                {recentItems('software')}
                {recentItems('design')}
                {recentItems('developer')}
            </div>
        </div>
    )
}

export default Sidebar