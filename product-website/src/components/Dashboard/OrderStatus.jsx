import { FaAngleLeft,FaAngleRight,  } from "react-icons/fa"
const fakeData = [
    {
      
     client : 'Jane Doe',
      status: 'Pending',
      tracking: 12222,
      price: 30.0,
      deliveryStatus: 'Delivered',
      date:'10-Sep-2022'
    },
    {
       
       client : 'Jane Doe',
        status: 'Received',
        tracking: 12222,
        price: 30.0,
        deliveryStatus: 'pending',
        date:'10-Sep-2022'
      },
      {
       
        client : 'Jane Doe',
         status: 'Pending',
         tracking: 12222,
         price: 30.0,
         deliveryStatus: 'enroute',
         date:'10-Sep-2022'
       },
       {
       
        client : 'Jane Doe',
         status: 'Recieved',
         tracking: 12222,
         price: 30.0,
         deliveryStatus: 'pending',
         date:'10-Sep-2022'
       },
       {
       
        client : 'Jane Doe',
         status: 'Pending',
         tracking: 12222,
         price: 30.0,
         deliveryStatus: 'enroute',
         date:'10-Sep-2022'
       },
       {
       
        client : 'Jane Doe',
         status: 'Pending',
         tracking: 12222,
         price: 30.0,
         deliveryStatus: 'deliverd',
         date:'10-Sep-2022'
       },
    
]
function OrderStatus() {
   
        const handleCheckboxChange = (orderId) => {
          // Handle checkbox change if needed
          console.log('Checkbox changed for order ID:', orderId);
        }
    return (
        <section className="mt-5">
            <div className="bg-white flex items-center justify-between py-7 p-5 rounded-lg">
                <h3 className="font-semibold text-[1.3rem]">Order Status</h3>
                <div className="flex items-center gap-x-4 justify-between">
                    <span>1/10</span>
                    <div className="flex items-center gap-x-3">
<button className="border border-black rounded-md p-1 font-[400]"><FaAngleLeft/></button>
<button className="border border-black rounded-md p-1 font-[400]"><FaAngleRight/></button>
</div>
<form className="flex items-center gap-2">
<label htmlFor="goTo"> Go To</label>
<input type="text" placeholder="1-20 pages" className="border border-black rounded-md w-[100px] outline-none px-2 py-1 text-sm" />
</form>

                </div>
            </div>

            <article className="mt-5">
            <div className="overflow-x-auto ">
      <table className="min-w-full bg-white rounded-lg">
        <thead className="">
          <tr className="">
          <th className="py-2">Status</th>
            <th className="text-sm md:text-lg whitespace-nowrap py-2 ">Client Name</th>
            <th className="text-sm md:text-lg whitespace-nowrap py-2">Tracking Id</th>
            <th className="text-sm md:text-lg whitespace-nowrap py-2">Cost</th>
            <th className="text-sm md:text-lg whitespace-nowrap py-2">Payment Status</th>
            <th className="text-sm md:text-lg whitespace-nowrap py-2">Order Date</th>
            <th className="text-sm md:text-lg whitespace-nowrap py-2">Delivery Status</th>
          </tr>
        </thead>
        <tbody>
        {fakeData.map((item, index) => (
            <tr key={index}>
                 <td className=" p-2">
                <div className="flex items-center justify-center">
                  <input
                    type="checkbox"
                    className={`checkbox ${
                      index  !== -1 ? 'unchecked border-none' : 'checked'
                    }`}
                    onChange={() => handleCheckboxChange(item.orderId)}
                  />
                </div>
              </td>
              
              <td className="text-center p-2 text-sm md:text-[1rem]">{item.client}</td>
              <td className="text-center p-2 text-sm md:text-[1rem]">#{item.tracking}</td>
              <td className="text-center p-2 text-sm md:text-[1rem]">${item.price.toFixed(2)}</td>
              <td className={`text-center border-2 border-solid w-[100px] capitalize rounded-lg p-2 text-sm md:text-[1rem] flex items-center justify-center mx-auto gap-5  ${
  item.status === 'Pending'
    ? ' border-red-500 my-2'
    : ' border-green-700 my-2'
}`}>{item.status}</td>
              <td className="text-center p-2 text-sm md:text-[1rem]">{item.date}</td>

              <td className={`text-center border-2 border-solid w-[100px] capitalize rounded-lg p-2 text-sm md:text-[1rem] flex items-center justify-center mx-auto gap-5  ${
  item.deliveryStatus === 'pending'
    ? ' border-red-500 my-2'
    : item.deliveryStatus === 'enroute'
    ? ' border-yellow-400 my-2'
    : ' border-green-700 my-2'
}`}>{item.deliveryStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
            </article>
        </section>
    )
}

export default OrderStatus
