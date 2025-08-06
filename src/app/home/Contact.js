import React from "react";
import Image from "next/image";
import email from "@/assets/img/email.svg";
import Link from "next/link";
function Contact() {
  return (
    <div id="contact" className="container mx-auto mt-10 py-12 px-4">
      <h1 className="text-7xl md:text-8xl font-bold text-primary text-center  mx-auto md:w-full">
        Let’s work together!
      </h1>

      <div className="   mt-12 grid grid-cols-1 md:grid-cols-1  mx-auto    auto-rows-auto gap-2 content-center ">
        <Link
          href="mailto:najmeen7867@gmail.com"
          className=" flex flex-col items-center justify-center"
        >
          <Image src={email} alt="email" width={30} height={30} />
          <span className="text-xl font-normal text-gray-500">
            najmeen7867@gmail.com
          </span>
        </Link>{" "}
        {/* <Link
          href="mailto:w3codemasters@gmail.com"
          className=" flex flex-col items-center justify-center"
        >
          <Image src={email} alt="email" width={30} height={30} />
          <span className="text-xl font-normal text-gray-500">
            w3codemasters@gmail.com
          </span>
        </Link> */}
        
      </div>
    </div>
  );
}

export default Contact;
