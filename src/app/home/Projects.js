
import Image from "next/image";
import Link from "next/link";
import arrow from "../../assets/img/arrow.png";

export const dynamic = 'force-dynamic';

async function Projects() {
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
        My Recent Work
      </h1>
      <p className="text-center mx-auto max-w-[600px]">
        A collection of my latest web projects, built with clean design, smooth
        user experience, and modern technology.
      </p>

      <div className=" mt-12 grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-10  content-center capitalize ">
        {projects?.map((project) => (
          <Link
            href={project.url}
            className="relative bg-white  p-2 md:p-4 h-[380px] rounded-lg shadow-xl overflow-hidden group"
            key={project._ID}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={200}
              className="w-full h-full object-cover"
            />
            <div className="text-sm md:text-md mt-5 flex justify-between items-center gap-5 font-light absolute bottom-[-100px]  md:left-10 left-[10px] bg-secondary text-white p-4 px-6 rounded-xl  shadow-2xl transition-all ease-in  duration-[400ms]  md:group-hover:bottom-10 group-hover:bottom-5 group-hover:bg-gray-900">
              <h3> {project.title}</h3>
              <Image src={arrow} alt="arrow" width={15} height={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
