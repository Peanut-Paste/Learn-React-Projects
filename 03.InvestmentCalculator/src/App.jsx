import UserInputCard from "./components/UserInputCard";
import Result from "./components/Result";
import { useState } from "react";

const INITIAL_VALUES = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState({ ...INITIAL_VALUES });
  function handleChange(target, newValue) {
    setUserInput((prevValue) => {
      return {
        ...prevValue,
        [target]: +newValue,
      };
    });
  }

  const inputIsValid = userInput.duration > 0

  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <UserInputCard
            val={userInput.initialInvestment}
            onChangeValue={handleChange}
            targ="initialInvestment"
          >
            initial investment
          </UserInputCard>
          <UserInputCard
            val={userInput.annualInvestment}
            onChangeValue={handleChange}
            targ="annualInvestment"
          >
            annual investment
          </UserInputCard>
        </div>
        <div className="input-group">
          <UserInputCard
            val={userInput.expectedReturn}
            onChangeValue={handleChange}
            targ="expectedReturn"
          >
            expected return
          </UserInputCard>
          <UserInputCard
            val={userInput.duration}
            onChangeValue={handleChange}
            targ="duration"
          >
            duration
          </UserInputCard>
        </div>
      </section>
      <section>
        {inputIsValid && <Result userInputs={userInput} />}
        {!inputIsValid && <p className="center">Please enter a valid duration</p>}
      </section>
    </>
  );
}

export default App;
