import { useState } from 'react';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import Partners from '../src/Components/Partners';

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 2-second delay for content loading

    // Clear the timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <section className="mt-[5rem] mb-20">
      <figure className="relative h-full lg:w-full">
      {loading ? (
          <Skeleton width={'100%'} height={300} />
        ) : (
          <>
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399804/rocktea-main-website/assets/About_Us_1_hycsrn.png"
            className="hidden lg:block w-full h-full object-contain"
            alt="about hero"
          />

          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1696399801/rocktea-main-website/assets/About_Us_2_rnw8se.png"
            className=" lg:hidden w-full h-full object-contain"
            alt="about hero"
          />
          </>
        )}

        <div className='text-white'>
          <h3 className='absolute left-[50%] lg:left-10 top-[50%] max-md:translate-x-[-50%] max-md:translate-y-[-50%] lg:top-[40%] text-white text-[3rem] lg:text-[5rem]'>About us</h3>
          <p className=' hidden lg:block absolute left-10 top-[60%]'>“Discover our story: We’re more than a Brand, We’re an Experience!”</p>
        </div>
      </figure>
      <article className="flex flex-col-reverse lg:flex-row items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 px-7">
        <figure className="w-[300px] h-[300px]">
        {loading ? (
            <Skeleton width={300} height={300} />
          ) : (
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298697/rocktea-main-website/assets/Our_story_vmaky5.png"
              alt="our story"
              className="w-full h-full object-cover"
            />
          )}
        </figure>
        <div className="lg:max-w-[50%] ">
          <div className="flex gap-5 ">
          {loading ? (
              <Skeleton width={16} height={1.5} />
            ) : (
              <span className="relative  after:absolute after:content-[''] after:w-16 after:h-[1.5px]  after:bg-[var(--deep-blue)] after:top-[50%] mr-14"></span>
            )}
            {loading ? (
              <Skeleton width={200} height={40} />
            ) : (
              <h3 className="text-3xl">What are we here for?</h3>
            )}
          </div>
          {loading ? (
            <Skeleton count={3} />
          ) : (
            <p className="mt-7">
             Our mission is to empower businesses by 
providing them with a comprehensive and
user-friendly platform that simplifies the 
entire Business to Business to Customers (B2B2C)
drop-shipping process. We aim to develop a 
secure and efficient ecosystem where
manufacturers, retailers and consumers can
seamlessly collaborate, ensuring a smooth and
satisfying buying experience for all stakeholders.
            </p>
          )}
        </div>
      </article>

      <article className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 px-7">
        <figure className="w-[300px] h-[300px]">
        {loading ? (
      <Skeleton width={300} height={300} />
    ) : (
      <img
        src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298697/rocktea-main-website/assets/vision.png"
        alt="our story"
        className="w-full h-full object-cover"
      />
    )}
        </figure>
        <div className="lg:max-w-[50%] ">
          <div className="flex gap-5 ">
          {loading ? (
        <Skeleton width={16} height={1.5} />
      ) : (
        <span className="relative  after:absolute after:content-[''] after:w-16 after:h-[1.5px]  after:bg-[var(--deep-blue)] after:top-[50%] mr-14"></span>
      )}
      {loading ? (
        <Skeleton width={200} height={40} />
      ) : (
        <h3 className="text-3xl">Where are we going?</h3>
      )}
          </div>
          {loading ? (
      <Skeleton count={3} />
    ) : (
      <p className="mt-7">
        We envision a world where online shopping is not just about buying
        products but about discovering exciting new items that enhance your
        lifestyle. We want to be your go-to destination for the latest
        trends, unique finds, and everyday essentials.
      </p>
    )}
        </div>
      </article>

      <article className="flex flex-col lg:flex-row items-center justify-center gap-y-10 lg:gap-20 mt-12 bg-white rounded-lg py-10 lg:px-3 w-[350px] sm:w-full">
        <figure className="lg:max-w-[50%] w-full">
        {loading ? (
      <Skeleton width={500} height={300} />
    ) : (
      <img
        src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298696/rocktea-main-website/assets/dropshipping-icons.png"
        alt=""
        className='w-full h-full'
      />
    )}
        </figure>
        <figure className="lg:max-w-[50%] w-full lg:pr-7">
        {loading ? (
      <Skeleton width={500} height={300} />
    ) : (
      <img
        src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298697/rocktea-main-website/assets/video-card.png"
        alt=""
        className='w-full h-full'
      />
    )}
        </figure>
      </article>


      <div className='mt-10'>
<Partners />
</div>


      <article>
        

        {loading ? (
          
      <Skeleton width={500} height={400} />
    
    ) : (
      <div className=" relative overflow-hidden bg-[var(--deep-blue)] flex flex-col items-center justify-center p-10 mt-10">
          
          <h3 className="text-white text-[40px] mb-10 ">Why Choose Us</h3>
          <figure className=" hidden lg:block lg:absolute top-0 right-0 overflow-hidden w-[230px] h-auto">
            <img
              src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298695/rocktea-main-website/assets/slant-wave.png"
              alt=""
            />
          </figure>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center justify-center gap-5 lg:mx-20 z-20">
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302268/rocktea-main-website/assets/Transport_cwpvjy.svg"
                width={35}
                height={35}
                alt=""
              />
              <h4 className="font-semibold text-xl text-white mt-5">
                Superfast delivery
              </h4>
              <p className="text-[#CAC4D0] text-sm text-center mt-5">
                Orders are delivered as soon as possible
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302269/rocktea-main-website/assets/support_sbivdv.svg"
                width={35}
                height={35}
                alt=""
              />
              <h4 className="font-semibold text-xl text-white mt-5">
                24/7 Support
              </h4>
              <p className="text-[#CAC4D0] text-sm text-center mt-5">
                Our customer care service is available on the GO.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302269/rocktea-main-website/assets/Shopping_Bag_hg7dux.svg"
                width={35}
                height={35}
                alt=""
              />
              <h4 className="font-semibold text-xl text-white mt-5">
                Easy to shop
              </h4>
              <p className="text-[#CAC4D0] text-sm text-center mt-5">
                We simplify your customer’s shopping experience
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695302268/rocktea-main-website/assets/Return_On_Investment_yvcshk.svg"
                width={35}
                height={35}
                alt=""
              />
              <h4 className="font-semibold text-xl text-white mt-5">
                Great profit margin
              </h4>
              <p className="text-[#CAC4D0] text-sm text-center mt-5">
                Unlocking Your Path to Exceptional Profitability
              </p>
            </div>
          </div>
          </div>
    )}
       
      </article>

     

      <article className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-20  bg-white rounded-lg py-10 px-7 mt-10 mx-auto">
        <h3 className="text-[40px] text-black lg:mt-20">Our Team</h3>
        <div className="grid grid-cols-2 lg:grid-cols-3 place-content-center items-center gap-5">
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dwvdgmuaq/image/upload/v1695298699/rocktea-main-website/assets/team.png"
            alt=""
            
          />
          
        </div>
      </article>
    
    </section>
  );
}

export default About;
  