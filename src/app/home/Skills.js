import React from "react";

function Skills() {
  return (
    <div id="skills" className="container mx-auto mt-20 py-12 px-4">
      <h1 className="text-3xl font-bold text-primary text-center">
        MY EXPERTISE
      </h1>
      <p className="text-center mx-auto max-w-[600px]">
        Transforming ideas into fast, scalable, and visually stunning web
        experiences. I focus on clean code, seamless interactions, and optimized
        performance to deliver exceptional digital solutions.
      </p>

      <div className=" text-center  mt-12 grid grid-cols-3  sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-6  auto-rows-auto gap-10 content-center capitalize">
        <div className="text-center">
          <i className="devicon-html5-plain text-5xl"></i>
          <p className="text-md mt-2">html5</p>
        </div>

        <div className="text-center">
          <i className="devicon-css3-plain text-5xl"></i>
          <p className="text-md mt-2">css3</p>
        </div>

        <div className="text-center">
          <i className="devicon-sass-original text-5xl"></i>
          <p className="text-md mt-2">scss</p>
        </div>

        <div className="text-center">
          <i className="devicon-tailwindcss-original text-5xl"></i>
          <p className="text-md mt-2">tailwindcss</p>
        </div>

        <div className="text-center">
          <i className="devicon-reactbootstrap-original text-5xl"></i>
          <p className="text-md mt-2">react bootstrap</p>
        </div>

        <div className="text-center">
          <i className="devicon-materialui-plain text-5xl"></i>
          <p className="text-md mt-2">material ui</p>
        </div>

        <div className="text-center">
          <i className="devicon-jquery-plain text-5xl"></i>
          <p className="text-md mt-2">jquery</p>
        </div>

        <div className="text-center">
          <i className="devicon-javascript-plain text-5xl"></i>
          <p className="text-md mt-2">javascript</p>
        </div>

        <div className="text-center">
          <i className="devicon-react-original text-5xl"></i>
          <p className="text-md mt-2">react js</p>
        </div>

        <div className="text-center">
          <i className="devicon-nextjs-plain text-5xl "></i>
          <p className="text-md mt-2">next js</p>
        </div>
        <div className="text-center">
          <i className="devicon-ionic-original text-5xl"></i>
          <p className="text-md mt-2">ionic</p>
        </div>

        <div className="text-center">
          <i className="devicon-git-plain text-5xl"></i>
          <p className="text-md mt-2">git</p>
        </div>

        <div className="text-center">
          <i className="devicon-wordpress-plain text-5xl"></i>
          <p className="text-md mt-2">wordpress</p>
        </div>

        <div className="text-center">
          <i className="devicon-photoshop-plain text-5xl"></i>
          <p className="text-md mt-2"> Adobe Photoshop</p>
        </div>
        <div className="text-center">
          <i className="devicon-illustrator-plain text-5xl"></i>
          <p className="text-md mt-2"> Adobe Illustrator</p>
        </div>

        <div className="text-center">
          <i className="devicon-figma-plain text-5xl"></i>
          <p className="text-md mt-2"> Figma</p>
        </div>
        <div className="text-center">
          <i className="devicon-aftereffects-plain text-5xl"></i>
          <p className="text-md mt-2"> Adobe After Effects</p>
        </div>
        <div className="text-center">
          <i className="devicon-xd-plain text-5xl"></i>
          <p className="text-md mt-2"> Adobe XD</p>
        </div>
        <div className="text-center">
          <i className="devicon-canva-original text-5xl"></i>
          <p className="text-md mt-2"> Canva</p>
        </div>
        <div className="text-center">
          <i className="devicon-vercel-plain text-5xl"></i>
          <p className="text-md mt-2"> Vercel</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
