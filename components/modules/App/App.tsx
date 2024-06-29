import React, { useState } from "react";
import InputShortener from "./InputShortener/InputShortener";
import LinkResult from "./LinkRequset/LinkResult";


// Define interfaces outside of the component if they're not specific to it
interface InputShortenerProps {
  setInputValue: (value: string) => void;
}

interface LinkResultProps {
  inputValue: string;
}

const App = () => {
  // Initialize state using useState hook
  const [inputValue, setInputValue] = useState("");
  console.log(inputValue);
  
  return (
    <div>
      {/* Pass props directly without destructuring */}
      <InputShortener setInputValue={setInputValue} />

      <LinkResult inputValue={inputValue} />

    </div>
  );
};

export default App;
