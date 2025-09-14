import React from "react";
import brand1 from "../../assets/Brands/brand-1.png";
import brand2 from "../../assets/Brands/brand-2.png";
import brand3 from "../../assets/Brands/brand-3.png";
import brand4 from "../../assets/Brands/brand-4.png";
import brand5 from "../../assets/Brands/brand-5.png";
const Partners = () => {
  return (
    <div className="py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10">
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center">
          <img src={brand1} alt="Brand" className="w-[80px] dark:invert" />
          <img src={brand2} alt="Brand" className="w-[80px] dark:invert" />
          <img src={brand3} alt="Brand" className="w-[80px] dark:invert" />
          <img src={brand4} alt="Brand" className="w-[80px] dark:invert" />
          <img src={brand5} alt="Brand" className="w-[80px] dark:invert" />
        </div>
      </div>
    </div>
  );
};

export default Partners;
