import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import RockteaLogo from "../assets/rocktea-logo.png";

function Footer() {
  return (
    <footer className="bg-[var(--deep-blue)] p-6 lg:p-10 flex  flex-col lg:flex-row lg:items-center justify-between">
      <figure className="flex flex-col md:items-center justify-center">
        <img src={RockteaLogo} width={180} height={180} alt="logo" />
        <p className="text-[15px] mt-6 text-[var(--white)] lg:ml-6">
          Office:No 9, office address
          <br /> goes here lagos State,Nigeria
        </p>
      </figure>

      <section className="flex flex-col md:flex-row lg:items-center justify-between gap-10 lg:gap-20 text-[var(--white)] px-0 lg:px-[3rem]">
        <article className=" flex flex-col it gap-y-8">
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem] border-b-[0.5px] border-b-solid border-b-white lg:border-0">Links</h4>
          <ul className="flex flex-col gap-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li className="whitespace-nowrap">Rocktea PL</li>
          </ul>
        </article>

        <article className=" flex flex-col gap-y-8">
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem] border-b-[0.5px] border-b-solid border-b-white lg:border-0">
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
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem] border-b-[0.5px] border-b-solid border-b-white lg:border-0">
            Follow Us
          </h4>
          <ul className="flex flex-col gap-y-4">
            <li className="flex items-center gap-2">
              <FaFacebook />
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram />
              Instagram
            </li>
            <li className="flex items-center gap-2">
              <FaTwitter />
              Twitter
            </li>
            <li className="flex items-center gap-2">
              <FaLinkedin />
              LinkedIn
            </li>
          </ul>
        </article>
      </section>
    </footer>
  );
}

export default Footer;
