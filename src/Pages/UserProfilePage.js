import React from 'react'
import NavBar from "../features/Navbar/Navbar";
import UserProfile from '../features/user/Components/UserProfie'

function UserProfilePage() {
  return (
    <div>
     <NavBar>
     <UserProfile />
     </NavBar>
    </div>
  )
}

export default UserProfilePage