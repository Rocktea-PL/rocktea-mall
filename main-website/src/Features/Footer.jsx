import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import RockteaLogo from "../assets/rocktea-logo.png";

function Footer() {
  return (
    <footer className="bg-[var(--deep-blue)] p-10 flex  flex-col md:flex-row items-center justify-between">
      <figure className="flex flex-col items-center justify-center">
        <img src={RockteaLogo} width={180} height={180} alt="logo" />
        <p className="text-[15px] mt-6 text-[var(--white)] md:ml-6">
          Office:No 9, office address
          <br /> goes here lagos State,Nigeria
        </p>
      </figure>

      <section className="flex items-center justify-between gap-20 text-[var(--white)]">
        <article className=" flex flex-col gap-y-8">
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem]">Links</h4>
          <ul className="flex flex-col gap-y-4">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li className="whitespace-nowrap">Rocktea PL</li>
          </ul>
        </article>

        <article className=" flex flex-col gap-y-8">
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem]">
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
          <h4 className="font-semibold text-[1rem] md:text-[1.2rem]">
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
