import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div >
    <div>
    <>
     <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
       <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
         <img
           className="mx-auto h-12 w-auto bg-white p-1.5 rounded-3xl"
           src="https://cdn.pixabay.com/photo/2016/12/12/13/23/shopping-cart-1901584_640.png"
           alt="Your Company"
         />
         <h2 className="mt-4 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
           Create an account
         </h2>
       </div>

       <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
         <form className="space-y-6" action="#" method="POST">
           <div>
             <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
               Email address
             </label>
             <div className="mt-2">
               <input
                 id="email"
                 name="email"
                 type="email"
                 autoComplete="email"
                 required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>

           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                 Password
               </label>
               <div className="text-sm">
                 <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                   Forgot password?
                 </a>
               </div>
             </div>
             <div className="mt-2">
               <input
                 id="password"
                 name="password"
                 type="password"
                 autoComplete="current-password"
                 required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>
           <div>
             <div className="flex items-center justify-between">
               <label htmlFor="confirm-password" className="block text-sm font-medium leading-6 text-gray-900">
                 Confirm Password
               </label>
             </div>
             <div className="mt-2">
               <input
                 id="confirm-password"
                 name="confirm-password"
                 type="password"
                 required
                 className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
               />
             </div>
           </div>

           <div>
             <button
               type="submit"
               className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
             >
               Sign up
             </button>
           </div>
         </form>

         <p className="mt-10 text-center text-sm text-gray-500">
           Already Registered?{' '}
           <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login to account
            </Link>
         </p>
       </div>
     </div>
   </>
     
    </div>
   </div>
  )
}

export default Signup

