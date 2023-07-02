import React from 'react'
import ForgotPassword from '../features/auth/Components/ForgotPassword'
import NavBar from '../features/Navbar/Navbar'

function ForgotPasswordPage() {
  return (
    <div>
        <NavBar>
            <ForgotPassword />
        </NavBar> 
    </div>
  )
}

export default ForgotPasswordPage