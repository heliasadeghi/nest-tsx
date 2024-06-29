import React, { useState } from "react";
import { useEffect, useRef } from "react";
// Define an interface for the component's props
interface ShowShortenLinkProps {
  inputValue: string;
  shortenLink: string;
}

const ItemLink: React.FC<ShowShortenLinkProps> = ({
  inputValue,
  shortenLink
}) => {
  const messageRef = useRef<HTMLSpanElement>(null);
  const [copy, setCopy] = useState(true);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(shortenLink);

      setCopy(false);
      setTimeout(() => {
        setCopy(true); // Reset copy to false after 5 seconds
      }, 3000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  useEffect(() => {
    // handleClick();
  }, [copy]);
  return (
    <div className="w-full bg-white flex flex-col sm:flex-row gap-4 justify-between sm:px-10 py-3 font-medium items-center text-[18px] mt-10 rounded-lg">
      <h3>{inputValue}</h3>
      <hr className="w-full bg-[#f3f3f3] sm:hidden" />
      <div className="flex flex-col sm:flex-row gap-5 items-center text-start text-[17px] sm:text-[18px]">
        <h3 className="text-[var(--bg-cyan)]">{shortenLink}</h3>
        {copy ? (
          <button
            className="w-full sm:w-auto px-8 py-2 bg-[var(--bg-cyan)] rounded-lg sm:rounded-full text-white font-bold text-[16px] sm:text-[20px] capitalize hover:bg-[var(--bg-cyan-hover01)] transition-all ease-linear "
            onClick={handleClick}
          >
            copy
          </button>
        ) : (
          <button
            className="w-full px-8 py-2 bg-[var(--bg-dark-violet)] rounded-lg sm:rounded-full text-white font-bold text-[16px] sm:text-[20px] capitalize hover:bg-[var(--bg-dark-violet)] transition-all ease-linear "
            onClick={handleClick}
          >
            copied!
          </button>
        )}
      </div>
    </div>
  );
};

export default ItemLink;
