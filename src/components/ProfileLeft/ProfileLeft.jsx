import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InforCard from '../InfoCard/InforCard'
import LogoSearch from '../LogoSearch/LogoSearch'
import './ProfileLeft.css'


const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
        <LogoSearch />
        <InforCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft