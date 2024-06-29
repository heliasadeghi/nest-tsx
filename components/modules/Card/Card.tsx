import { log } from "console";
import React, { useEffect, useState } from "react";
type SvgProp = JSX.Element;
interface CardProps {
  title: string;
  svg: SvgProp;
  positionY: string;
  positionX: string;
  mobilePosition: number;
}
const Card: React.FC<CardProps> = ({
  title,
  svg,
  positionX,
  positionY,
  mobilePosition
}) => {
  const [calculation, setCalculation] = useState(1);

  useEffect(() => {
    setCalculation(20 * mobilePosition);
  }, [mobilePosition]);
  return (
    // desktop design
    <>
      <div
        className="rounded-lg sm:w-[30%] hidden p-5 sm:p-10 pt-16 sm:flex flex-col gap-2 bg-white  h-[250px] absolute z-[2]"
        style={{ top: `${positionY}`, left: `${positionX}` }}
      >
        <div className="sm:absolute  sm:left-10 top-[-40px] w-[80px] h-[80px] rounded-full bg-[var(--bg-dark-violet)] text-[var(--bg-cyan)] flex justify-center items-center ">
          {svg}
        </div>
        <h4 className="font-[700] text-[18px] text-center sm:text-start sm:text-[24px] text-[var(--bg-dark-violet)] capitalize ">
          {title}
        </h4>
        <p className="text-[var(--bg-gray-02)] font-medium  text-[13px] sm:text-[14px] text-center sm:text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum repellat nobis beatae, assumenda autem obcaecati ad. Laboriosam
        </p>
      </div>
      {/* end desktop design  */}
      {/* start mobile design */}
      <div
        className="rounded-lg sm:w-[30%]  p-5 sm:p-10 pt-16 flex sm:hidden flex-col gap-2 bg-white  h-[250px] absolute  z-[2] bottom-0"
        style={{ top: `${calculation}%` ,position:"absolute"}}
      >
        <div className="absolute  left-24 top-[-40px] w-[80px] h-[80px] rounded-full bg-[var(--bg-dark-violet)] text-[var(--bg-cyan)] flex justify-center items-center ">
          {svg}
        </div>
        <h4 className="font-[700] text-[18px] text-center sm:text-start sm:text-[24px] text-[var(--bg-dark-violet)] capitalize ">
          {title}
        </h4>
        <p className="text-[var(--bg-gray-02)] font-medium  text-[13px] sm:text-[14px] text-center sm:text-start">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          ipsum repellat nobis beatae, assumenda autem obcaecati ad. Laboriosam
        </p>
      </div>
      {/* end mobile design */}
    </>
  );
};

export default Card;
