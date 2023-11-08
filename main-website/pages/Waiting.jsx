import {Link} from 'react-router-dom'
function Waiting() {
    return (
        <div className="flex items-center gap-16 h-screen">
            <div className=" hidden lg:flex relative">
            <figure className="hidden lg:flex overflow-hidden h-screen">
                <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698598142/rocktea-main-website/assets/IMG_8685_cf0i5o.jpg" alt="" />
            </figure>
            <div className="absolute top-20 text-center flex flex-col items-center justify-center">
                <h2 className="text-white font-['Sora'] text-[3rem]">Request Received</h2>
                <p className="text-blue">24:00:00</p>
                <img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698598467/rocktea-main-website/assets/Group_46_nfxjtf.png" 
                className="w-[90%] mt-20"
                alt="" />
            </div>
            </div>
            
        <article className="lg:max-w-[50%] bg-white rounded-md lg:w-[600px] p-10 text-center flex flex-col items-center justify-center mx-12 ">
            <h3 className="text-lg">Your Domain is Getting Dressed for 
the Web! 🕐</h3>
<img src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698598076/rocktea-main-website/assets/image_184_ygswkt.png" className='mt-10 w-[70px] h-[70px]' alt="" />
<p className="mt-8 text-[1.2rem]">Please hold on while we prepare your domain
for its grand online debut. you will receive  a mail 
within the next 72hrs. </p>

<p className="mt-10 mb-8 text-[1.2rem]">The mail will contain your e-store Unique URL.</p>
<Link className='/'>
<button className="w-[200px] text-blue h-14 bg-orange rounded-lg">Home</button>
</Link>
        </article>
        </div>
    )
}

export default Waiting

