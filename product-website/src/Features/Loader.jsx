//import React from 'react'
import { Puff } from "react-loader-spinner";
function Loader() {
  return (
    <div className="flex flex-col item-center h-[50vh] justify-center mx-auto">
      <div className="flex items-center  justify-center">
        <Puff
          height="150"
          width="150"
          radius={1}
          color="#ffa500"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>

      <p className="text-[2rem] text-center  font-bold">Please wait...</p>
    </div>
  );
}

export default Loader;
