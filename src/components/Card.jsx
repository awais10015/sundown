import React from 'react';

const Card = ({ image }) => {
  return (
    <div className="w-80 flex flex-col justify-center items-center min-w-[320px] h-[400px] rounded-xl overflow-hidden shadow-lg bg-white flex-shrink-0">
      <img 
        src={image} 
        alt="Card" 
        className="w-50 h-auto  object-cover" 
      />
      <div className="p-4 text-sm text-gray-700">
        <p>
          Retained production support across <br />
          retail and events in NY, CHI, LA. <br />
          Creative Design, Design <br />
          management, Production/Project <br />
          Management, and execution of work <br />
          from concept to installation across <br />
          the Country.
        </p>
      </div>
    </div>
  );
};

export default Card;
