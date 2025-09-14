import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaLocationArrow,
  FaMobileAlt,
  FaTelegram,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];

const Footer = () => {
  return (
    <div className="dark:bg-gray-950">
      <div className="container ">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* Shop Details */}
          <div className="py-8 px-4">
            <a
              className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl"
              href="#"
            >
              Eshop
            </a>
            <p className="text-gray-600 lg:pr-24 pt-3 dark:text-white/70">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur autem iste id magnam eum.
            </p>
            <p className="text-gray-500 mt-4">
              © 2025 Crafted with ❤️ by Doei Yasin
            </p>
            <a
              target="_blank"
              className="inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full"
              href="https://github.com/yasin-mov"
            >
              Visit My GitHub Profile
            </a>
          </div>
          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">Site Map</h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black duration-300 dark:hover:text-white dark:text-gray-400"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Second col link */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Access
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 hover:text-black duration-300 dark:hover:text-white dark:text-gray-400"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Iran ,Shiraz ,Sattar-Khan Street</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+989121111111</p>
                </div>
                {/* Social Links */}
                <div className="flex gap-4 mt-6 items-center">
                  <a
                    href="https://www.instagram.com/mo___yasin"
                    target="_blank"
                  >
                    <FaInstagram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://t.me/Mhmmd_yasin" target="_blank">
                    <FaTelegram className="text-3xl hover:text-primary duration-300" />
                  </a>
                  <a href="https://github.com/yasin-mov" target="_blank">
                    <FaGithub className="text-3xl hover:text-primary duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
