import React from "react";
import Property from "./Property";

const PropertieList = () => {
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 5xl:grid-cols-5 gap-4 mt-4">
           <Property/>
           <Property/>
    </div>
  );
};

export default PropertieList;
