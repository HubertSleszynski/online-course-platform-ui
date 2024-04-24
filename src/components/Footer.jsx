import logo from "../assets/logo.png";

// social icons
import fb from "../assets/facebook.png";
import insta from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import linkdin from "../assets/linkedIn.png";

const Footer = () => {
  return (
    <div className="bg-primary md:px-14 p-4 max-w-screen-2xl mx-auto">
      <div className="my-12 text-white flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 space-y-8">
          <a
            href=""
            className="text-2xl font-semibold flex items-center space-x-3 mt-5"
          >
            <img src={logo} alt="" className="w-10 inline-block items-center" />
            <span className="text-white">VirtuClass</span>
          </a>
          <p className="md:w-1/2">Empowering minds, one click at a time.</p>
          <div>
            <input
              type="email"
              placeholder="Your email"
              className="bg-[#9a7af159] mr-3 py-2 px-4 rounded-md outline-none"
            />
            <input
              type="submit"
              value="Subscribe"
              className="py-2 px-4 rounded-md bg-secondary -ml-2 cursor-pointer"
            />
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col md:flex-row flex-wrap justify-between gap-8 items-start">
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Platform</h4>
            <ul className="space-y-3">
              <a href="/" className="block hover:text-gray-300">
                Overview
              </a>
              <a href="/" className="block hover:text-gray-300">
                Features
              </a>
              <a href="/" className="block hover:text-gray-300">
                About
              </a>
              <a href="/" className="block hover:text-gray-300">
                Pricing
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Help</h4>
            <ul className="space-y-3">
              <a href="/" className="block">
                How does it works?
              </a>
              <a href="/" className="block">
                Where to ask question?
              </a>
              <a href="/" className="block">
                How to play?
              </a>
              <a href="/" className="block">
                What is needed for this?
              </a>
            </ul>
          </div>
          <div className="space-y-4 mt-5">
            <h4 className="text-xl">Contacts</h4>
            <ul className="space-y-3">
              <p>999-999-999</p>
              <p>888-888-888</p>
              <p>
                1234 Elm Street
                <br />
                Anytown, USA
              </p>
            </ul>
          </div>
        </div>
      </div>
      <hr className="" />

      <div className="text-white flex flex-col sm:flex-row gap-8 sm:items-center justify-between my-8">
        <p>@ VirtuClass 2024 All rights reserved.</p>
        <div className="flex items-center space-x-5">
          <img src={fb} alt="fb-link" className="w-8" />
          <img src={insta} alt="" className="w-8" />
          <img src={twitter} alt="github-link" className="w-8" />
          <img src={linkdin} alt="linkedin-link" className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
