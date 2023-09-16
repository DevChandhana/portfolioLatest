const Experience = () => {
    const exp = [
      {
        name: "UV InfraTech Systems Pvt LTd",
        from: "Sept 2019",
        to: "Mar 2022",
        Role: "Associate Software Developer",
        Skills: [
          "ReactJs",
          "React Native",
          "TypeScript",
          "Redux",
          "Jest",
          "AWS Cognito",
          "Firebase",
          "Payment Gateways",
        ],
        desc: "Worked as a complete frontend developer and got a chance to work on both web and mobile applications",
      },
      {
        name: "SRS Infoway (Infosys)",
        from: "Apr 2022",
        to: "Sept 2022",
        Role: "Software Developer",
        Skills: ["ReactJs", "NextJS", "TailwindCSS"],
        desc: "Worked as a Contract employee to Infosys and got a chance to work on a project where mobile responsiveness doesn't exist",
      },
      {
        name: "Affluent Global Services",
        from: "Oct 2022",
        to: "Apr 2023",
        Role: "Software Developer",
        Skills: ["React Native", "TypeScript", "Redux", "Jest"],
        desc: "Worked for HDFC Bank in rewriting their existing netbanking mobile application in react native, I worked completely on Deposits section of the app",
      },
      {
        name: "Antino Labs Pvt LTd",
        from: "Apr 2023",
        to: "Sept 2023",
        Role: "Senior Software Developer",
        Skills: [
          "ReactJs",
          "React Native",
          "TypeScript",
          "Redux",
          "Payment Gateways",
          "NextJs",
        ],
        desc: "Worked as a Sr developer while leading one application and as senior developer in 2 more projects",
      },
    ];
    return (
      <div id="Experience" className="flex justify-center w-screen">
        <div>
          <div className="flex justify-center my-6">
            <h1 className="text-[35px] font-extrabold text-purple-800">
              Experiences
            </h1>
          </div>
          <div className="flex justify-center">
            <h1 className="text-lg font-bold  my-2">
              Below are my work experiences
            </h1>
          </div>
          <div>
            <div>
              {exp.map((item) => (
                <div className="border rounded-md border-blue-500 p-3 my-4 w-[570px] shadow-blue-500 shadow-sm">
                  <h1 className="text-slate-100 text-xl font-bold">
                    {item.Role}
                  </h1>
                  <h3 className="text-slate-500 text-md font-bold my-1">
                    {item.name}
                  </h3>
                  <p className="text-slate-600 text-sm font-semibold">
                    {item.from} - {item.to}
                  </p>
                  <p className="my-2 text-md font-thin text-slate-400">
                    {item.desc}
                  </p>
                  <div className="flex">
                    <p>skills:</p>
                    <div className="ml-2">
                      {item.Skills.map((data) => (
                        <span className="mx-1 text-sm font-medium text-slate-500">
                          {data}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}
export default Experience;