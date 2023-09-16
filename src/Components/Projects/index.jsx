import { useState } from "react";
import { projects } from "./data";
const Projects = () => {
  const types = ["All", "Web Apps", "Mobile Apps"];
  const [selectedType, setSelectedType] = useState(types[0]);
  return (
    <div
      id="Projects"
      className="flex items-center justify-center w-screen bg-black "
    >
      <div>
        <div className="flex justify-center">
          <h1 className="text-[30px] font-extrabold text-purple-800">
            Projects
          </h1>
        </div>
        <div className="flex justify-center">
          <h1 className=" text-xl font-extrabold">
            Some of the cool projects that I worked on so far
          </h1>
        </div>
        <div className="flex items-center justify-center">
          {types.map((data, index) => (
            <div
              className={`border p-2 my-10 px-5 border-blue-500 hover:bg-blue-700 ${
                selectedType === data ? "bg-blue-950" : "bg-transparent"
              } `}
              onClick={() => setSelectedType(data)}
            >
              <p>{data}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center md:w-9/12 md:ml-32 lg:ml-56 gap-7 self-center ">
          {projects.map((data) => (
            <div className="border border-blue-500 rounded-md md:w-96 p-3 shadow-md shadow-blue-500 hover:scale-105 transition-transform duration-300 h-[600px] ease-in-out">
              {data.img ? (
                <img src={data.img} alt="proj img" className="h-48 w-80 ml-5" />
              ) : (
                <div className="flex justify-center items-center h-48">
                  <p>No Image preview available</p>
                </div>
              )}
              <div className="flex flex-wrap my-4 ">
                {data.tech.map((item) => (
                  <p className="text-xs mx-2 my-1 text-purple-600 bg-purple-950 p-1 rounded-lg">
                    {item}
                  </p>
                ))}
              </div>
              <p className="text-2xl font-bold">{data.name}</p>
              <p className="text-sm mt-3 my-1 text-slate-400">{data.desc}</p>
              {data.link ? (
                <p className="text-xs font-semibold my-4">
                  Link:
                  <a className="text-center text-blue-700" href={data.link}>
                    {data.link}
                  </a>
                </p>
              ) : (
                <p className="my-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Projects;
