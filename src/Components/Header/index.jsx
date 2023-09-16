import React from "react";
import {
  AtSymbolIcon,
  QueueListIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const links = [
    { name: "About" },
    { name: "Skills" },
    { name: "Experience" },
    { name: "Projects" },
    { name: "Contact" },
  ];
  return (
    <div className=" shadow-sm md:shadow-blue-200 w-screen bg-black">
      <div className="md:flex  items-center justify-evenly">
        <div className="flex items-center justify-between gap-2 py-4 px-8">
          <div className="flex gap-2 items-center">
            <AtSymbolIcon
              className=" text-blue-500"
              style={{ height: 30, width: 30 }}
            />
            <p className="text-2xl font-extrabold ">Portfolio</p>
          </div>
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <QueueListIcon
                className="text-blue-500  my-3 mx-8 cursor-pointer "
                style={{ height: 35, width: 35 }}
              />
            ) : (
              <XMarkIcon
                className="text-blue-500  my-3 mx-8 cursor-pointer "
                style={{ height: 35, width: 35 }}
              />
            )}
          </div>
        </div>
        <div
          className={`  bg-black md:flex mx-24  md:mx-0 transition-all duration-700  ease-out  ${
            !isOpen ? " top-30" : " absolute top-[-400px]"
          }`}
        >
          <div className="md:flex">
            {links.map((item) => (
              <div>
                <Link
                  className="font-semibold text-xl mx-6 cursor-pointer"
                  duration={500}
                  smooth={true}
                  spy={true}
                  to={item.name}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
          <button className="bg-blue-500 p-1 rounded  mx-4 mt-4 md:mt-0 md:mx-4 ">
            <a
              className="font-semibold text-xl mx-6 cursor-pointer"
              href="https://github.com/DevChandhana"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;

<svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="b" gradientTransform="rotate(30 .5 .5)">
      <stop offset="0%" stop-color="#8EC5FC" />
      <stop offset="100%" stop-color="#E0C3FC" />
    </linearGradient>
    <clipPath id="a">
      <path
        fill="currentColor"
        d="M860 627.5Q804 755 687.5 829T445 858.5Q319 814 194.5 735T74 501q4-155 119-244.5T440.5 128Q573 89 700 157.5T871.5 363Q916 500 860 627.5Z"
      />
    </clipPath>
  </defs>
  <g clip-path="url(#a)">
    <path
      fill="url(#b)"
      d="M860 627.5Q804 755 687.5 829T445 858.5Q319 814 194.5 735T74 501q4-155 119-244.5T440.5 128Q573 89 700 157.5T871.5 363Q916 500 860 627.5Z"
    />
  </g>
</svg>;
