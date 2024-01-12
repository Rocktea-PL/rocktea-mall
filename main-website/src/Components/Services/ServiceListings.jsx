import { FaLocationDot } from "react-icons/fa6";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import SkeletonCard from "../../Features/Loaders/CardLoaders";
export default function ServiceListings() {
  const fetchCarts = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/business_info/`,
      {},
    );
    // console.log('data', response.data)
    return response.data;
  };
  const { data: servicesList, isLoading: loading } = useQuery(
    "services",
    fetchCarts,
    { enabled: true, staleTime: 5 * (60 * 1000), cacheTime: 10 * (60 * 1000) },
  );

  const listLength = servicesList?.length || 6
console.log(listLength)
  return (
    <>
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-md">
        {loading
              ? Array.from({ length: listLength }, (_, index) => (
                  <SkeletonCard key={index} count={listLength} />
                )) : servicesList?.length > 0 &&
         
          servicesList.map((data) => (
            <div key={data.id}>
              <Link to={`/services/details/${data?.id}`}>
                <figure className="w-full lg:w-[280px]  h-[250px]">
                  <img
                    src={data.business_photograph}
                    className="w-full h-full object-cover rounded-md"
                    alt={data.text}
                  />
                </figure>
                <div className="w-full lg:w-[280px] h-[250px] bg-white px-4 py-5 shadow-md rounded-b-md flex flex-col gap-y-2">
                  <h4 className="!text-[22px] font-semibold ">{data?.name}</h4>
                  <p>{data.about}</p>
                  <h4 className="!text-[20px] !mt-0 text-orange font-semibold">
                    ₦20,000/hr
                  </h4>
                  <h5 className="!text-[12px] mb-2">
                    {data?.years_of_experience}{" "}
                    {data?.years_of_experience > 1 ? "years" : " year"}
                  </h5>

                  <hr />
                  <span className="flex items-center justify-center gap-3 text-[15px] mt-3">
                    <FaLocationDot /> Ikoyi, Lagos
                  </span>
                </div>
              </Link>
            </div>
          ))}

        {services.map((data) => (
          <div key={data.id}>
            <Link to={`/services/details/${data?.id}`}>
              <figure className="w-full lg:w-[280px]  h-[250px]">
                <img
                  src={data.image}
                  className="w-full h-full object-cover rounded-md"
                  alt={data.text}
                />
              </figure>
              <div className="w-full lg:w-[280px] max-h-[250px] bg-white px-4 py-5 shadow-md rounded-b-md flex flex-col gap-y-2">
                <p>{data.text}</p>
                <h4 className="!text-[22px] font-semibold ">{data.name}</h4>
                <h4 className="!text-[20px] !mt-0 text-orange font-semibold">
                  ₦20,000/hr
                </h4>
                <h5 className="!text-[12px] mb-2">4+ Years of experience</h5>

                <hr />
                <span className="flex items-center justify-center gap-3 text-[15px] mt-3">
                  <FaLocationDot /> Ikoyi, Lagos
                </span>
              </div>
            </Link>
          </div>
        ))}
      </article>
      <button className="border border-orange h-14 w-full md:w-[400px] rounded-md  mt-8 flex items-center justify-center mx-auto">
        Load More{" "}
      </button>
    </>
  );
}
const services = [
  {
    id: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "plumber",
    name: "John Plumbing....",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1621436699529-27d0d04884e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "make up Artist",
    name: "viva Studios....",
  },
  {
    id: 3,
    image:
      "https://plus.unsplash.com/premium_photo-1661741573027-7b95db386a03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Fashion Designer",
    name: "Benita Fashion....",
  },
  {
    id: 4,
    image:
      "https://plus.unsplash.com/premium_photo-1683120912204-c16b67c17008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "bricklayer",
    name: "Better Services....",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "mechanic",
    name: "Ariks WorkShop....",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1621436699529-27d0d04884e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "make up Artist",
    name: "viva Studios....",
  },
  {
    id: 7,
    image:
      "https://plus.unsplash.com/premium_photo-1661741573027-7b95db386a03?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Fashion Designer",
    name: "Benita Fashion....",
  },
  {
    id: 8,
    image:
      "https://plus.unsplash.com/premium_photo-1683120912204-c16b67c17008?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "bricklayer",
    name: "Better Services....",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "mechanic",
    name: "Ariks WorkShop....",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "mechanic",
    name: "Ariks WorkShop....",
  },
  {
    id: 11,
    image:
      "https://plus.unsplash.com/premium_photo-1663013675008-bd5a7898ac4f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "plumber",
    name: "John Plumbing....",
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1621436699529-27d0d04884e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "make up Artist",
    name: "viva Studios....",
  },
];
