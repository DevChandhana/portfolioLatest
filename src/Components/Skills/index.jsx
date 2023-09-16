const Skills = () => {
  const skills = [
    { name: "React Native", icon: require("../../assets/reactnative.png") },
    { name: "ReactJs", icon: require("../../assets/react.png") },
    { name: "NextJs", icon: require("../../assets/next.png") },
    { name: "JavaScript", icon: require("../../assets/js.png") },
    { name: "TypeScript", icon: require("../../assets/ts.png") },
    { name: "Tailwind", icon: require("../../assets/tailwind.png") },
    { name: "Redux", icon: require("../../assets/redux.png") },
  ];
  return (
    <div id="Skills" className="w-screen shadow-lg shadow-purple-700 ">
      <h1 className="text-2xl font-bold md:ml-72 my-10">Below are my skills</h1>

      <div className="flex flex-wrap justify-center   ">
        <div className="md:flex flex-wrap mx-2">
          {skills.map((item) => (
            <div className="rounded-2xl p-1 m-6 border-white border flex items-center gap-2 mx-0 md:mx-4 mt-4 md:mt-0">
              <img
                src={item.icon}
                style={{ height: 20, width: 20 }}
                alt="items"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fill-opacity="1"
          d="M0,96L30,101.3C60,107,120,117,180,128C240,139,300,149,360,138.7C420,128,480,96,540,80C600,64,660,64,720,74.7C780,85,840,107,900,96C960,85,1020,43,1080,37.3C1140,32,1200,64,1260,90.7C1320,117,1380,139,1410,149.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};
export default Skills;
