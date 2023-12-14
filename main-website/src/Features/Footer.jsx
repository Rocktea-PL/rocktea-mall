import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import RockteaLogo from "../assets/rocktea-logo.png";

function Footer() {
  return (
    <footer className="bg-[var(--deep-blue)] p-6 lg:p-10 flex  flex-col  lg:items-center justify-between">
      <article className=" xxsm:grid xxsm:!grid-cols-1  grid grid-cols-2 lg:flex-row lg:grid-cols-4 justify-between gap-10 lg:gap-20 text-[var(--white)] px-0">
        <figure className="flex flex-col items-center justify-center">
          <img src={RockteaLogo} width={180} height={180} alt="logo" />
          <p className="text-[15px] mt-6 text-[var(--white)] lg:ml-6">
            Office:No 9, office address
            <br /> goes here lagos State,Nigeria
          </p>
        </figure>

        <article className=" flex flex-col it gap-y-8">
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem] border-b-[0.5px] border-b-solid border-b-gray-500 pb-3  lg:border-0">
            Links
          </h4>
          <ul className="flex flex-col gap-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li className="whitespace-nowrap">Rocktea PL</li>
          </ul>
        </article>

        <article className=" flex flex-col gap-y-8">
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem] border-b-[0.5px] border-b-solid border-b-gray-500 pb-3  lg:border-0">
            Contact Us
          </h4>
          <ul className="flex flex-col gap-y-4">
            <li>+2348039701889</li>
            <li>+2348030749709</li>
            <li>+2347036789858</li>
            <li>info@rockteapl.com</li>
          </ul>
        </article>

        <article className=" flex flex-col gap-y-8">
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem] border-b-[0.5px] border-b-solid border-b-gray-500 pb-3 lg:border-0">
            Follow Us
          </h4>
          <ul className="flex flex-col gap-y-4">
            <li className="flex items-center gap-2">
              <a
                href="https://www.facebook.com/rockteapl?mibextid=LQQJ4d"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2"
              >
                {" "}
                <FaFacebook />
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="https://instagram.com/rockteamall_?r=nametag"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaInstagram /> Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="https://twitter.com/rockteamall/status/1704136787960975760?s=48&t=4CIBUFhuNgFxp__1ERxg8Q"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2"
              >
                <FaTwitter />
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/rock-tea-pl-2677a0285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                rel="noreferrer"
                target="_blank"
                className="flex items-center gap-2"
              >
                {" "}
                <FaLinkedin />
                LinkedIn
              </a>
            </li>
          </ul>
        </article>
      </article>
      <p className=" text-[12px] sm:text-sm mt-10 mx-auto mb-5 px-10 sm:px-0 text-white">
        &copy;2023
        <span className="text-orange font-semibold leading-[2]">
          {" "}
          RockTeaMall{" "}
        </span>{" "}
        <br />
        <span className="text-[0.85rem]">All Rights Reserved.</span>
      </p>
    </footer>
  );
}

export default Footer;
