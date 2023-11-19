"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const View = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/albums/1/photos?_page=${currentPage}&_limit=${pageSize}`
        );
        const result = await response.json();
        setData(result); // Assuming the API response has a 'data' property
        // if(data.length != 0){
        //   setIsButtonDisabled(false)
        // }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [currentPage, pageSize]);
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-3">
        {data.map((item: any, i: any) => {
          return (
            <div key={i}>
              <Image
                src={`${item.url}`}
                width={600}
                height={600}
                alt="Picture of the author"
                unoptimized
              />
            </div>
          );
        })}
      </div>

      <div className="flex space-x-4 items-center justify-center mt-10 mb-10 p-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous Page
        </button>
        <span> {currentPage}</span>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={data.length === 0}
        >
          Next Page
        </button>
      </div>
    </>
  );
};

export default View;
