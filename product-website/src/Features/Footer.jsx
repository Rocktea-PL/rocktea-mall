import { FaWhatsapp, FaPhone } from "react-icons/fa";
import { useStoreContext } from "../Hooks/UserAuthContext";
function Footer() {
  const { store } = useStoreContext();

  return (
    <footer className="  w-full flex flex-col lg:items-center  lg:justify-center  bg-[var(--footer-bg)] lg:p-10  text-white">
      <section className="flex flex-col lg:flex-row  lg:justify-center gap-y-6 lg:gap-20">
        <figure className="flex flex-col gap-2">
          {store.logo ? (
            <img
              src={store.logo}
              alt="logo"
              width={50}
              height={50}
              className="rounded-full"
            />
          ) : (
            <div className="w-[50px] h-[50px] bg-black rounded-full text-white flex items-center justify-center uppercase shadow-md font-semibold text-md">
              {store.name?.slice(0, 2)}
            </div>
          )}
          <p>84 Aso Villa, President lodge way, Abuja.</p>
        </figure>
        <article className="flex flex-col lg:flex-row  justify-between gap-y-10 lg:gap-20">
          <div>
            <h3 className="border-b-[0.5px] border-b-solid border-b-gray-300 pb-2 lg:border-0">
              Follow Us
            </h3>
            <ul className="flex flex-col gap-3 mt-3 text-gray-300">
              <li>Facebook</li>
              <li>Whatsapp</li>
              <li>Instagram</li>
              <li>Twitter(X)</li>
            </ul>
          </div>
          <div>
            <h3 className="border-b-[0.5px] border-b-solid border-b-gray-300 pb-2 lg:border-0">
              Need help?
            </h3>
            <ul className="flex flex-col gap-3 mt-3 text-gray-300">
              <li className="flex items-center gap-1">
                <FaPhone /> +2345566666
              </li>
              <li className="flex items-center gap-1">
                <FaWhatsapp className="text-[#4FCE5D]" /> +23455557777
              </li>
            </ul>
          </div>
          <div>
            <h3 className="border-b-[0.5px] border-b-solid border-b-gray-300 pb-2 lg:border-0">
              Products
            </h3>
            <ul className="flex flex-col gap-3 mt-3 text-gray-300">
              <li>Baby Wears</li>
              <li>BabY Toys</li>
              <li>Baby Soap</li>
              <li>Baby Toothpaste</li>
              <li>Baby Carrier</li>
            </ul>
          </div>
        </article>
      </section>

      <p className=" text-[12px] lg:text-sm mt-10 mx-auto mb-5 px-10 sm:px-0">
        &copy;2023, This website is a product of{" "}
        <span className="text-[var(--orange)] font-semibold">RockTea PL </span>{" "}
        All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
