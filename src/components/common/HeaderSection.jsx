import React from "react";

export const HeaderSection = ({ title, desc }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
      </div>
      <div>
        <p className="text-gray-600 max-w-md text-end">
          {desc}
        </p>
      </div>
    </div>
  );
};
