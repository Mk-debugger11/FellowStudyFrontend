import React from 'react'
import ProfileDashboard from '../components/myAccount/profileDashboard'
function MyAccount() {
  return (
    <>
    <div className='w-full px-10 pt-10'>
      <h1 className='text-4xl'>My Account</h1>
      <p className='text-[#64758b]'>Manage your profile, orders, and account settings</p>
    </div>
    <ProfileDashboard/>
    </>
  )
}

export default MyAccount