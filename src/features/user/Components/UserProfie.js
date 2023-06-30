import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserInfo, selectUserOrders } from '../userSlice';


export default function UserProfile() {
  const user = useSelector(selectUserInfo)
  const dispatch = useDispatch()

  const handleEdit=()=>{
    
  } 

  const handleRemove=()=>{

  }  

  return (
    <div>
     <div>
    <div>
    <h2 className="text-3xl my-5 font-bold tracking-tight text-gray-900">My Profile</h2>
        <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              Name: {user.name?user.name:'New User'}
            </h1>
            <h3 className="text xl my-5 font-bold tracking-tight text-gray-900">
              Email Address:  {user.email}
            </h3>
            <div className="flow-root">
            
            </div>
          </div>


          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className='mt-0.5 2xl text-sm text-gray-500'>Your Addresses :</p>
            {
              user.addresses.map((address,idx)=>{
              return <div className="flex justify-between my-2 gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                  >
                    <div className="flex gap-x-4">
                    
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {address.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.street}
                        </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {address.city}
                      </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {address.pinCode}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {address.phone}
                      </p>
                    <button className="font-medium text-indigo-500 leading-6 " onClick={e=>handleEdit(e,idx)}>
                        Edit
                      </button>
                      <button className="font-medium text-red-500 leading-6 " onClick={e=>handleRemove(e,idx)}>
                          Remove
                      </button>
                    </div>
                  </div>
              
              })
            }

            <div className="flex justify-between my-2 text-base font-medium text-gray-900">

           
           
          </div>
        </div>
      </div>

            
        </div>
        </div>
    </div>
  );
}
