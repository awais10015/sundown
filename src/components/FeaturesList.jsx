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
    <div className="relative w-full bg-[#EFEAE3] z-10 pt-6 sm:pt-10 pb-6 sm:pb-8">
      <ul className="flex flex-col items-start w-full">
        {items.map((item, index) => (
          <li
            key={index}
            className="group border-b border-gray-400 relative w-full px-4 sm:pl-6 py-6 sm:py-10 text-base sm:text-xl font-medium cursor-pointer hover:bg-gray-100 transition duration-300"
          >
            {/* Hover background effect */}
            <span className="absolute inset-0 bg-[#FF9831] origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out z-0" />

            {/* Text */}
            <span
              className="relative z-10 text-lg sm:text-3xl md:text-4xl lg:text-5xl font-bold sm:font-black text-black group-hover:text-black transition-colors duration-300"
            >
              {item}
            </span>

            {/* Hover Image Preview (hidden on small screens) */}
            <div className="hidden sm:block absolute left-[60%] top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
              <img
                src={SampleImage}
                alt="Preview"
                className="w-40 md:w-48 lg:w-56 h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturesList;
