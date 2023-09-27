import React from "react";

const Error = ({ mensaje }) => {
  return (
    <div className="bg-red-700 text-white text-center p-3 uppercase rounded-lg font-bold mb-3">
      <p>{mensaje}</p>
    </div>
  );
};

export default Error;
