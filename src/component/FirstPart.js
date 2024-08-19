import React from "react";

export default function FirstPart() {
  return (
    <div className="w-full"> {/* Ensure no overflow on the body */}
      <img
        src="images/img1.jpg"
        alt="Tractor Crane Images"
        className="
        xl:block xl:w-full xl:h-[500px]  xl:mt-8
        lg:block lg:w-full lg:h-[500px]  lg:mt-8
        md:block md:w-full md:h-[500px]  md:mt-8
        sm:block sm:mx-auto sm:h-[500px] sm:w-full sm:mt-4"
      />

      <h1
        className="
          xl:text-4xl xl:font-extrabold xl:mt-[-450px] xl:text-slate-800 xl:text-center 
          lg:text-4xl lg:font-extrabold lg:mt-[-450px] lg:text-slate-800 lg:text-center
          md:text-2xl md:font-extrabold md:mt-[-400px] md:text-slate-800 md:text-center
          sm:text-2xl sm:font-extrabold sm:mt-[-400px] sm:text-slate-800 sm:text-center"
      >
        Welcome to Burj Services Company
      </h1>
      <p
        className="
        xl:text-md xl:mt-16 xl:max-w-2xl xl:mx-auto 
        lg:text-lg lg:max-w-2xl lg:mt-16 lg:mx-auto lg:text-slate-600 lg:font-bold 
        md:text-center md:text-md md:max-w-2xl md:mt-16 md:mx-auto md:text-slate-600 md:font-bold
        sm:text-center sm:text-sm sm:max-w-2xl sm:mt-16 sm:mx-auto sm:text-slate-600 sm:font-bold"
      >
        At Burj Tractor Company, we specialize in providing top-of-the-line
        agricultural machinery that meets the needs of modern farming. Explore
        our range of tractors, combine harvesters, and more to take your farming
        to the next level.
      </p>

      <div className="
      xl:flex xl:justify-center xl:space-x-16 xl:mt-8 
      lg:flex lg:justify-center lg:space-x-16 lg:mt-1
      md:flex md:justify-center md:space-x-12 md:mb-64 md:mt-16
      sm:flex sm:justify-center sm:space-x-12 sm:mb-64 sm:mt-16">
        <button
          className="
          lg:bg-white lg:text-2xl lg:w-36 lg:h-16 lg:rounded-3xl lg:text-slate-800 lg:hover:bg-slate-200 
          md:w-28 md:h-12 md:text-slate-800 md:bg-white md:text-xl md:hover:bg-slate-200 md:rounded-2xl md:mt-20
          sm:w-28 sm:h-12 sm:text-slate-800 sm:bg-white sm:text-xl sm:hover:bg-slate-200 sm:rounded-2xl sm:mt-20"
        >
          About Us
        </button>
        <button
          className="lg:bg-white lg:text-2xl lg:w-36 lg:h-16 lg:rounded-3xl lg:text-slate-800 lg:hover:bg-slate-200
           md:w-28 md:h-12 md:text-slate-800 md:bg-white md:text-xl md:hover:bg-slate-200 md:rounded-2xl md:mt-20
           sm:w-28 sm:h-12 sm:text-slate-800 sm:bg-white sm:text-xl sm:hover:bg-slate-200 sm:rounded-2xl sm:mt-20"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
}
