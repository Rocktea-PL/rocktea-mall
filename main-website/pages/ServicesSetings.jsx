//import React from 'react'

import Header from "../src/Components/Services/Header";
import Personal from "../src/Components/Services/Profile/Personal";
import Sidebar from "../src/Components/Services/Profile/Sidebar";

function ServicesSetings() {
  return (
    <>
      <Header />
      <div className="mt-20">
        <section className="flex   gap-3 items-start  max-w-[1300px] mx-auto mb-5">
          <Sidebar />
          <div className="w-[70%]">
            <Personal />
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesSetings;
