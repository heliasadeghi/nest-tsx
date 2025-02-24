import App from "@/components/modules/App/App";


import React, { useState } from "react";

const SectionApi: React.FC = () => {
  return (
    // background section ShortenLink
    <div className="container  sm:mx-auto  ">
      <div className=" rounded-sm  sm:w-full relative">
        <div className="bg-[var(--bg-dark-violet)] sm:w-full rounded-lg w-[298px]  sm:mx-0 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-lg w-[298px] h-[168px]"
            width="1110"
            height="168"

          >
            <path
              fill="#4B3F6B"
              fillRule="evenodd"
              d="M647-93.924c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552c89.976-51.322 130.765-171.152 103.88-241.807C1327.115-119.515 1275.593-184 1027-184c-248.593 0-380 37.353-380 90.076zm-781 213c0 52.724 15.5 90.486 73 114.877 57.5 24.391 113.055 2.134 168.786 14.894 55.731 12.76 55.731 94.962 108.214 145.549s163.142 62.874 253.12 11.552C559.095 354.626 599.884 234.796 573 164.141 546.115 93.485 494.593 29 246 29c-248.593 0-380 37.353-380 90.076z"
            />
          </svg>
        </div>
        {/* get link and add api in components app */}
        <App />
      </div>

      <div></div>
    </div>
  );
};

export default SectionApi;
