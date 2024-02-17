
import WaitingSvg from '../src/assets/waiting.svg'
import WaitingYoutube from '../src/assets/waiting-youtube.png'
import People from '../src/assets/people.png'
import { useEffect } from 'react';
import { useState } from 'react';

export default function Waiting() {
  const countdownDuration = 24 * 60 * 60 * 1000; // 72 hours in milliseconds
  const [remainingTime, setRemainingTime] = useState(countdownDuration);

  useEffect(() => {
    const startTime = localStorage.getItem('countdownStartTime');
    if (startTime) {
      const elapsed = Date.now() - parseInt(startTime);
      if (elapsed < countdownDuration) {
        setRemainingTime(countdownDuration - elapsed);
      } else {
        setRemainingTime(0);
        localStorage.removeItem('countdownStartTime');
      }
    } else {
      localStorage.setItem('countdownStartTime', Date.now());
    }

    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1000;
        } else {
          clearInterval(interval);
          localStorage.removeItem('countdownStartTime');
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / (60 * 60 * 1000));
    const minutes = Math.floor((time % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((time % (60 * 1000)) / 1000);
    return (
      <div className='flex items-center gap-3 mb-5'>
            <h3 className='border border-gray-300 text-orange bg-[#D9D9D924] py-3 px-4 rounded-md'>{hours.toString().padStart(2, '0')}  </h3>
            <span className='text-gray-500 text-lg'> : </span>
            <h3 className='border border-gray-300 text-orange bg-[#D9D9D924] py-3 px-4 rounded-md'>{minutes
      .toString() .padStart(2, '0')} </h3>
            <span className='text-gray-500 text-lg'> : </span>
            <h3 className='border border-gray-300 text-orange bg-[#D9D9D924] py-3 px-4 rounded-md'>{seconds.toString().padStart(2, '0')}  </h3>

          </div>
    ) 
  };

  return (
    <div className=' h-full bg-white mb-10'>
      <article className='bg-white pb-10 md:p-10 flex flex-col lg:flex-row items-center justify-center gap-x-10 '>
        <img width={500} height={500} src={WaitingSvg} alt="waitinglist " />
        <div className='lg:max-w-[55%] max-md:mx-auto flex flex-col items-center justify-center lg:items-start lg:justify-start'>
          <h1 className='text-md font-semibold text-blue text-center lg:text-start px-3 md:px-0'>Store Creation Process Complete</h1>
          <p className='text-orange my-3'>Congratulations!</p>
          {formatTime(remainingTime)}
          <p className='flex flex-col px-10 lg:px-0'>
       <span>   Dear valued entrepreneur,</span> <br className=''/>
<span>Thank you for completing the store creation process with us. Please note that our team will now commence the validation of your business, which typically requires a 24-hour period. Subsequently, your domain name will be created.</span> <br />
<span>Additionally, within the initial 7 business days following your store creation, you can anticipate receiving tailored packages for your business, including delivery bags and branded tags, designed to enhance the uniqueness of your products. Our Team will reach out to you to facilitate the quick delivery.</span> <br />
Welcome to RockTea Mall.
          </p>
          <a href='#community' className='bg-orange px-6 h-14 rounded-lg mt-5 flex items-center justify-center'>Let’s keep you busy</a>
        </div>
      </article>

      <article className='p-10 bg-[#FAFAFAB8] transition-all delay-500 duration-500 ease-in' id='community'>
      <div className='flex relative'>
      <div>
        <h3 className='text-orange mb-5 text-md md:text-[2.2rem] leading-tight'>Hear from our community <br /> of Entrepreneurs.</h3>
        <p>The RockTea Mall community comprises a growing number of <br /> dropshippers, fostering synergy and growth among all business owners.</p>
        </div>
        <img src={People} width={300} height={300} alt="people" className='absolute right-5 lg:right-20 top-[50%] md:top-0 z-[1]' />
      </div>
      {/** Review Cards  */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7 place-content-center relative z-50'>
        {reviews.map((item) => (
          <div key={item.id} className='bg-white p-4 rounded-lg shadow-md'>
          <h4 className='text-[1.2rem] font-semibold text-blue my-3'>Gemma Fashion Store</h4>
          <p>Thanks to RockTea Mall, Geemah Fashion Stores soared to new heights. Their platform and support transformed my dropshipping venture into a thriving success story.</p>
          <div className='flex items-center gap-x-3 mt-4'>
           <img width={80} height={80} src={item?.img} alt="" className='rounded-full w-[50px] h-[50px] object-cover'/>
           <span>
             <p>Omolola Gemal</p>
             <p>CEO, Geema Fashion Store</p>
           </span>
          </div>
                 </div>
        ))}
      </div>
      </article>
      <article className='p-10 '>
        <h3 className='text-orange mb-5 text-md md:text-[2.2rem] '>Preview the appearance of your store.</h3>
        <p>Watch our detailed tutorial on seamlessly navigating the <br /> RockTea Mall Dropshipper&#39;s dashboard.</p>
       <div className='flex flex-col lg:flex-row items-center gap-16 lg:gap-x-20 justify-center'>
        <figure className='w-full h-[400px]'>
        <img  src={WaitingYoutube} alt="youtube" className='w-full h-full object-cover flex items-center justify-center mx-auto mt-7 rounded-lg' />
        <h4 className='text-md font-medium mt-3'>Getting Started with RockTea Mall</h4>
        </figure>
        <figure className='w-full h-[400px]'>
        <img  src={WaitingYoutube} alt="youtube" className='w-full h-full object-cover flex items-center justify-center mx-auto mt-7 rounded-lg' />
        <h4 className='text-md font-medium mt-3 '>Growing your business with RockTea Mall</h4>
        </figure>
       </div>
      </article>
    </div>
  )
}


const reviews = [
  {
    id:1,
    store:'Gemma Fashion Store',
    text:`Thanks to RockTea Mall, Geemah Fashion Stores soared to new heights. Their platform and support transformed my dropshipping venture into a thriving success story.`,
    img:'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.1.1295037106.1699551090&semt=sph'
  },
  {
    id:2,
    store:'Gemma Fashion Store',
    text:`Thanks to RockTea Mall, Geemah Fashion Stores soared to new heights. Their platform and support transformed my dropshipping venture into a thriving success story.`,
    img:'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.1.1295037106.1699551090&semt=sph'
  },
  {
    id:3,
    store:'Gemma Fashion Store',
    text:`Thanks to RockTea Mall, Geemah Fashion Stores soared to new heights. Their platform and support transformed my dropshipping venture into a thriving success story.`,
    img:'https://img.freepik.com/free-photo/young-woman-with-round-glasses-yellow-sweater_273609-7091.jpg?size=626&ext=jpg&ga=GA1.1.1295037106.1699551090&semt=sph'
  }
]





/*
`${hours.toString().padStart(2, '0')} : ${minutes
      .toString()
      .padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;

import { Link } from "react-router-dom";
function Waiting() {
  // let store_id = localStorage.getItem('id')
  return (
    <div className="flex items-center gap-16 h-screen">
      <div className=" hidden lg:flex relative">
        <figure className="hidden lg:flex overflow-hidden h-screen">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698598142/rocktea-main-website/assets/IMG_8685_cf0i5o.jpg"
            alt=""
          />
        </figure>
        <div className="absolute top-20 text-center flex flex-col items-center justify-center">
          <h2 className="text-white font-['Sora'] text-[3rem]">
            Request Received
          </h2>
          <p className="text-blue">24:00:00</p>
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698598467/rocktea-main-website/assets/Group_46_nfxjtf.png"
            className="w-[90%] mt-20"
            alt=""
          />
        </div>
      </div>

      <article className="lg:max-w-[50%] bg-white rounded-md lg:w-[600px] p-10 text-center flex flex-col items-center justify-center mx-12 ">
        <h3 className="text-lg">
          Your Domain is Getting Dressed for the Web! 🕐
        </h3>
        <img
          src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1698598076/rocktea-main-website/assets/image_184_ygswkt.png"
          className="mt-10 w-[70px] h-[70px]"
          alt=""
        />
        <p className="mt-8 text-[1.2rem]">
          Please hold on while we prepare your domain for its grand online
          debut. you will receive a mail within the next 72hrs.{" "}
        </p>

        <p className="mt-10 mb-8 text-[1.2rem]">
          The mail will contain your e-store Unique URL.
        </p>

        <Link to="/signin">
          <button className="w-[200px] text-blue h-14 bg-orange rounded-lg mt-5">
            Continue
          </button>
        </Link>
      </article>
    </div>
  );
}

export default Waiting;*/
