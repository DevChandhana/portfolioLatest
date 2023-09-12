import Typed from "react-typed";
import "./styles.css";
const Banner = () => {
  return (
    <div className=" h-screen w-screen items-center md:justify-evenly   justify-center md:flex">
      <div className="w-11/12 md:w-[700px] text-center mx-6">
        <h2 className="text-[50px] font-bold">Hi, Im</h2>
        <h2 className="text-[50px] font-bold">Chandhana N</h2>
        <Typed
          strings={["I'm a Web Developer", "I'm a Mobile App Developer"]}
          typeSpeed={150}
          loop
          backDelay={100}
          backSpeed={100}
          className="typed text-purple-700 text-2xl font-bold"
        />
        <p>
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
        </p>
      </div>
      <div className="relative w-96 h-96 mt-16 md:mt-0 mx-[150px] md:mx-[100px]">
        <div className=" inset-0  rounded-full shadow-md shadow-purple-700 hover:scale-105 transition-transform duration-300 ease-in-out">
          <img
            src={require("../../assets/verified.png")}
            alt="Verified"
            className="relative z-10 w-full h-full rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Banner;
