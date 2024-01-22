//import React from 'react'

import Header from "../../src/Components/Services/Header";
import Personal from "../../src/Components/Services/Profile/Personal";
import Sidebar from "../../src/Components/Services/Profile/Sidebar";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
function ServicesSetings() {
  const location = useLocation();

  // Get a specific query parameter
  const myParam = new URLSearchParams(location.search).get("id");
  console.log(myParam);
  const fetchCarts = async () => {
    const response = await axios.get(
      `https://rocktea-mall-api-test.up.railway.app/rocktea/signup/services/${myParam}`,
    );
    console.log("data", response.data);
    return response.data;
  };
  const { data: userProfile, isLoading: loading } = useQuery(
    "detail",
    fetchCarts,
    { enabled: true, staleTime: 5 * (60 * 1000), cacheTime: 10 * (60 * 1000) },
  );
  return (
    <>
      <Header />
      <div className="mt-20">
        <section className="flex   gap-3 items-start  max-w-[1300px] mx-auto mb-5">
          <Sidebar user={userProfile} />
          <div className="w-[70%]">
            <Personal user={userProfile} loading={loading} />
          </div>
        </section>
      </div>
    </>
  );
}

export default ServicesSetings;
