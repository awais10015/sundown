import React, { useState } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const CompanyInfo = () => {
  const [activeSection, setActiveSection] = useState("design");

  const getImage = () => {
    switch (activeSection) {
      case "design":
        return img1;
      case "project":
        return img2;
      case "execution":
        return img3;
      default:
        return img1;
    }
  };

  const getText = () => {
    switch (activeSection) {
      case "design":
        return `Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.`;
      case "project":
        return `Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.`;
      case "execution":
        return `We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience.`;
      default:
        return "";
    }
  };

  return (
    <div className="z-10 bg-[#EFEAE3] w-full px-6 py-10 flex flex-col items-start gap-10">
     
      <button className="relative w-40 h-12 border border-gray-400 rounded-3xl overflow-hidden group">
        <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0" />
        <span className="relative z-10 text-zinc-600 text-md font-bold group-hover:text-white transition-colors duration-300">
          All Projects →
        </span>
      </button>

      
      <div className="  w-full h-auto flex flex-col justify-center items-center md:flex-row  bg-black rounded-3xl gap-6">
        {/* Left Text */}
        <div className=" m-10 flex flex-col justify-center items-start  space-y-3">
          <h1
            className={`text-7xl text-start font-bold cursortext-2xl-pointer transition-colors duration-300 ${
              activeSection === "design"
                ? "text-white"
                : "text-zinc-600 hover:text-orange-500"
            }`}
            onClick={() => setActiveSection("design")}
          >
            Design
          </h1>
          <h1
            className={`text-7xl text-start font-bold cursor-pointer transition-colors duration-300 ${
              activeSection === "project"
                ? "text-white"
                : "text-zinc-600 hover:text-orange-500"
            }`}
            onClick={() => setActiveSection("project")}
          >
            Project
          </h1>
          <h1
            className={`text-7xl text-start font-bold cursor-pointer transition-colors duration-300 ${
              activeSection === "execution"
                ? "text-white"
                : "text-zinc-800 hover:text-orange-500"
            }`}
            onClick={() => setActiveSection("execution")}
          >
            Execution
          </h1>

          <p className="text-gray-400 max-w-xl">{getText()}</p>
        </div>

        <div className="w-full flex-1">
          <img
            src={getImage()}
            alt="Selected"
            className="w-full h-full object-cover rounded-br-3xl md:rounded-tr-3xl md:rounded-br-3xl sm:rounded-tr-3xl sm:rounded-br-3xl shadow-md transition duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
