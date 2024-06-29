import { log } from "console";
import React, { useState } from "react";
import ShowShortenLink from "../ShowShortenLink/showShortenLink";

// Define an interface for the props
interface InputShortenerProps {
  setInputValue: (value: string) => void;
}

const InputShortener: React.FC<InputShortenerProps> = ({ setInputValue }) => {
  const [value, setValue] = useState<string>("");
  // For debugging purposes
  const [isValid, setIsValid] = useState<boolean>(true); // Track validity of the input

  const [errorMessage, setErrorMessage] = useState<string | null>(null); // To store the error message

  const handleClick = () => {
    if (value.length === 0) {
      setErrorMessage("Invalid input. Please enter a valid URL."); // Set error message if input is invalid
      setIsValid(false); // Mark input as invalid
      return; // Exit the function early
    }
    setInputValue(value); // Update the parent component's state with the current input value
    setValue(""); // Reset the input value
    setIsValid(true); // Mark input as valid after successful operation
    setErrorMessage(null); // Reset the input value
  };

  return (
    <div className="absolute w-[298px]  p-4 sm:p-0 gap-3 sm:w-full sm:h-[168px] top-0 left-[calc(50%_-_149px)] sm:left-0 flex flex-col sm:block ">
      <input
        type="text"
        className="w-full sm:w-[65%] py-3 sm:py-4 px-3 sm:px-5 rounded-lg sm:absolute sm:top-[calc(50%_-_33px)]  sm:left-[8%] outline-none capitalize font-medium text-[16px] sm:text-[20px] "
        style={{ border: errorMessage ? "3px solid red" : "none" }}
        placeholder="shorten a link here..."
        value={value}
        onChange={(e) => {
          //   setInputValue(e.target.value);
          setValue(e.target.value);
        }} // Update local state on input change
      />
      {errorMessage && (
        <p className="text-red-600 text-[14px] sm:text-[16px] sm:top-[calc(50%_+_40px)] mt-[-10px] font-medium sm:absolute  sm:left-[8%] italic ">
          please add a link
        </p>
      )}
      <button
        className="sm:absolute sm:right-[10%] sm:px-8 py-2 sm:py-4 bg-[var(--bg-cyan)] rounded-lg font-bold sm:text-[21px] sm:font-medium sm:top-[calc(50%_-_33px)] text-white hover:bg-[var(--bg-cyan-hover01)] transition-all ease-linear duration-100 hover:scale-x-[0.98] text[var(--bg-gray-03)] capitalize"
        onClick={handleClick} // Corrected to remove unnecessary parentheses
      >
        shorten it!
      </button>
    </div>
  );
};

export default InputShortener;
