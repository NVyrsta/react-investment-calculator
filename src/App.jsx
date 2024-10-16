import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const isInputValid = (userInput) => {
    return userInput.duration >= 1;
  };

  const handleChange = (inputId, newValue) => {
    setUserInput((prev) => {
      return {
        ...prev,
        [inputId]: +newValue,
      };
    });
  };
  return (
    <>
      <Header />
      <UserInput
        onChange={handleChange}
        userInput={userInput}
      />

      <Results userInput={userInput} />
    </>
  );
}

export default App;
