import { FaAngleLeft, FaAngleRight, FaStar } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Members() {
  const sliderSettings = {
    // removes default buttons
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2500,
    
cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)'
  };
  return (
    <section className="  mx-auto mb-0">
      <h2 className=" text-md xsm:text-[40px] text-center my-10 font-semibold leading-tight">
        Hear From <span className="text-[var(--yellow)]">Our Members</span>
      </h2>

      <Slider {...sliderSettings} className="">

        {members.map((data) => (
          <div key={data.id} className="!flex !items-center justify-center gap-x-5">
            <div>
            <img src={data.image}  alt="" className="w-[200px] h-[200px] object-cover rounded-md" />
            </div>
     
            <div className="max-w-[50%]">
            <div className="flex items-center justify-center md:justify-start gap-3 gap-y-1">
              <h4 className="font-semibold">{data.name}</h4>
              <h5 className="text-[0.8rem]">{data.day}</h5>
            </div>
            <div className="my-3 flex items-center md:items-start justify-center md:justify-start flex-col">
              <span className="flex items-center md:items-start gap-1 text-[var(--yellow)] mb-2">
                <FaStar /> <FaStar /> <FaStar /> <FaStar />{" "}
                <FaStar className="text-gray-300" />
              </span>
              <p className="text-[15px] text-center md:text-start">
                {" "}
                &quot;{data.quote}&quot;
              </p>
              <div className="flex gap-8 mt-4">
                <button className="w-[30px] border-2 border-solid border-[var(--yellow)] h-[30px] flex items-center justify-center rounded-full">
                  <FaAngleLeft className="text-[var(--yellow)]" />
                </button>
                <button className="w-[30px] border-2 border-solid border-[var(--yellow)] h-[30px] flex items-center justify-center rounded-full">
                  <FaAngleRight className="text-[var(--yellow)]" />
                </button>
              </div>
            </div>
          </div>
          
         </div>
       
        ))}
        
        
         
        
         
      </Slider>
    </section>
  );
}


          
export default Members;
 const members = [
  {
    id:1,
    name:'Samuel L.',
    day:'7 days ago',
    image:'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
    quote:`I’ve tried other affiliate networks, but this one’s
    tracking accuracy is on a whole different level. The real-time
    data ensures that I’m always up-to-date with my performance
    metrics, making it easier to adjust my approach when
    needed.`
  },
  {
    id:2,
    name:'Jane D.',
    day:'6 days ago',
    image:'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
    quote:`I’ve tried other affiliate networks, but this one’s
    tracking accuracy is on a whole different level. The real-time
    data ensures that I’m always up-to-date with my performance
    metrics, making it easier to adjust my approach when
    needed.`
  },
  {
    id:3,
    name:'Lucy M.',
    day:'5 days ago',
    image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
    quote:`I’ve tried other affiliate networks, but this one’s
    tracking accuracy is on a whole different level. The real-time
    data ensures that I’m always up-to-date with my performance
    metrics, making it easier to adjust my approach when
    needed.`
  },
  {
    id:4,
    name:'Jackson B.',
    day:'4 days ago',
    image:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=1000&q=60',
    quote:`I’ve tried other affiliate networks, but this one’s
    tracking accuracy is on a whole different level. The real-time
    data ensures that I’m always up-to-date with my performance
    metrics, making it easier to adjust my approach when
    needed.`
  },
 ]