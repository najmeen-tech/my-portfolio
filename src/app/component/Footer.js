import React from "react";
import Image from "next/image";
import logo from "@/assets/img/logo.svg";
import Link from "next/link";
function Footer() {
  return (
    <div className=" py-5 px-4 text-center">
      <div className="flex items-center justify-center gap-5">
        <Link href="https://github.com/w3codemasters">
          <i className="devicon-github-original text-3xl"></i>
        </Link>
        <Link href="https://stackoverflow.com/w3codemasters">
          <i className="devicon-stackoverflow-plain text-2xl"></i>
        </Link>
        <Link href="/">
          <Image
            src={logo}
            className="mx-auto "
            alt="w3codemasters"
            width={60}
            height={60}
          />
        </Link>

        <Link href="https://www.linkedin.com/in/w3-codemasters-699a18123/">
          <i className="devicon-linkedin-plain text-2xl"></i>
        </Link>
        <Link href="https://x.com/w3codemasters">
          <i className="devicon-twitter-original text-2xl"></i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
