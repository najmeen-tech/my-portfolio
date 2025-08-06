
import Image from "next/image";
import Link from "next/link";
import arrow from "../../assets/img/arrow.png";

export const dynamic = 'force-dynamic';

async function WorkExperience() {
  // Fetch data on server side
  const response = await fetch("https://shbhati.w3codemasters.com/index.php/wp-json/jet-cct/projects", {
    cache: 'no-store',
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
  const projects = await response.json();


  return (
    <div id="work" className="container mx-auto  py-12 px-4">
      <h1 className="text-3xl font-bold text-primary text-center uppercase">
      Professional Journey
      </h1>
      <p className="text-center mx-auto max-w-[600px]">
      Building Success Through Partnership and Innovation
      </p>

      <div className=" mt-12  flex flex-col gap-8 max-w-[600px] mx-auto  justify-center items-center text-center ">

        <div className=" border border-dashed border-gray-300 p-4 rounded-lg  w-full">
          <h4 className=" text-lg md:text-2xl  font-semibold text-gray-700 capitalize">
            w3codemasters -  India
          </h4>
          <p className="text-sm text-gray-500 font-semibold my-1">
            Designation: Manager & Frontend Developer
          </p>
          <p className="text-sm text-gray-500">
            March 2021 - Present
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Working as a manager and frontend developer in my husband's technology business, contributing to web development projects and business operations.
          </p>
        </div>

    
     

      </div>
    </div>
  );
}

export default WorkExperience;
