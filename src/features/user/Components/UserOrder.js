import {React , useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserInfo } from '../../auth/authSlice'
import { fetchLoggedInUserOrdersAsync, selectUserOrders } from '../userSlice'
import { Link } from 'react-router-dom'

function UserOrder() {
    const user = useSelector(selectUserInfo)
    const order = useSelector(selectUserOrders)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchLoggedInUserOrdersAsync(user.id))    
    }, []);
    console.log("order Object is ",order);
    
  return (
    <>
    {order.map((orders,idx)=>{
    return <div>
    <div>
        <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              Order Id Number # {orders.id}
            </h1>
            <h3 className="text xl my-5 font-bold tracking-tight text-gray-900">
              Order Status : {orders.status}
            </h3>
            <div className="flow-root">
              <ul role="list" className="-my-6 divide-y divide-gray-200">
                {orders.items.map((item) => (
                  <li key={item.id} className="flex py-6">
                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.thumbnail}
                        alt={item.thumbnail}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="ml-4 flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href={item.title}>{item.title}</a>
                          </h3>
                          <p className="ml-4">${item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.brand}
                        </p>
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <label
                            htmlFor="quantity"
                            className="inline mr-5 text-sm font-medium leading-6 text-gray-900"
                          >
                            Qty :{item.quantity}
                          </label>
                        </div>

                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$ {orders.totalAmount}</p>
            </div>
            <div className="flex justify-between my-2 text-base font-medium text-gray-900">
              <p>Total Items in Cart</p>
              <p>{orders.totalItems} items</p>
            </div>
            <p className="my-2 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
            <div
                    className="flex justify-between gap-x-6 px-5 py-5 border-solid border-2 border-gray-200"
                  >
                    <div className="flex gap-x-4">
                    
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                          {orders.selectedAddress.name}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {orders.selectedAddress.street}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                          {orders.selectedAddress.pinCode}
                        </p>
                      </div>
                    </div>
                    <div className="hidden sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm leading-6 text-gray-900">
                        Phone: {orders.selectedAddress.phone}
                      </p>
                      <p className="text-sm leading-6 text-gray-500">
                        {orders.selectedAddress.city}
                      </p>
                    </div>
                  </div>
           
          </div>
        </div>
      </div>

            
        </div>
 })}
 </>
 
  )}

export default UserOrder