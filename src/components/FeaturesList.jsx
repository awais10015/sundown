import React from "react";


const FeaturesList = () => {
  const items = [
    "Play New Kidvision",
    "Carmelo Anthony 7pm In Brooklyn Set",
    "Converse SoHo",
    "NYFW Popup",
    "Kelce Super Bowl Party",
    "50th Anniversary",
    "Capezio NYC Flagship",
  ];

  const SampleImage =
    "https://plus.unsplash.com/premium_photo-1666666222364-7479e7347833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="w-full bg-[#EFEAE3] z-10 pt-10 pb-8">
      <ul className="flex  bg-[#EFEAE3] flex-col items-start  relative">
        {items.map((item, index) => (
          <li
            key={index}
            className="group  border-b border-gray-700 relative w-full h-30 pl-6 pt-10 text-xl font-medium cursor-pointer hover:bg-gray-100  transition duration-300"
          >
            <span className="absolute inset-0 bg-[#FF9831] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0"></span>

            
            <span
              className="relative z-10 text-2xl font-bold sm:text-5xl sm:font-black 
            md:text-5xl md:font-black
            text-black group-hover:text-black transition-colors duration-300"
            >
              {item}
            </span>

            <div className="absolute left-150 top-1/2 -translate-y-1/2 ml-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <img
                src={SampleImage}
                alt="Preview"
                className="w-48 h-auto object-cover rounded-3xl shadow-lg"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesList;
