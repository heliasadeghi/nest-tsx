import React from "react";

// Define an interface for the props
interface PossibilityItem {
  id: number;
  name: string;
  title: string;
}

interface Possibility {
  id: number;
  items: PossibilityItem[];
  title: string;
}
// Define an interface for the component's props
interface FooterDetailsProps {
  possibilitiesData: Possibility[];
}

const FooterDetails: React.FC<FooterDetailsProps> = ({ possibilitiesData }) => {
  return (
    <>
      {possibilitiesData.map((elem) => (
        <div className=" flex flex-col sm:items-start justify-start">
          <h2 className="font-bold capitalize mb-5 text-white ">
            {elem?.title}
          </h2>
          <ul className="flex gap-4 flex-col ">
            {elem.items.map((data) => (
              <li
                key={data.id}
                className="capitalize font-medium text-[var(--bg-gray-01)] hover:text-[var(--bg-cyan)] transition-all ease-linear duration-100 cursor-pointer"
              >
                {data.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default FooterDetails;
