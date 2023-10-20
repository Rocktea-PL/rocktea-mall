
import '../../../styles/Dashboard.css'
export default function Sidebar() {
  return (
    <div className="w-[30%] flex flex-col justify-between py-5 bg-white shadow-md h-screen px-3">
        <div className=''>
           
        <h4 className="text-blue text-[20px] mt-3">Dashboard</h4>
       
        <ul className="sidebar-list flex flex-col gap-y-3 mt-5">
            <li className='active'> <span  className='absolute w-2 rounded-sm h-7  -right-5 bg-blue'></span>Home</li>
            <li>Transaction</li>
            <li>Order</li>
            <li>Products</li>
            <li>Top Selling </li>
            
        </ul> 
       
        
        </div>
        <div>
        <h4 className="text-blue text-[20px] mt-3">Settings</h4>
        <ul className="sidebar-list flex flex-col gap-y-3 mt-5">
<li>Profile</li>
<li>Settings</li>
<li>Support</li>
<li>Log out</li>
        </ul>
        </div>
        
    </div>
  )
}
