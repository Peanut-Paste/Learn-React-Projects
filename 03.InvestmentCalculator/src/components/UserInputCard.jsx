import { useState } from "react";

export default function UserInputCard({ children, defaultVal, targ, onChangeValue}) {
  const [userInput, setUserInput] = useState(defaultVal);
  function handleUserInput(event) {
    let newValue = parseInt(event.target.value);
    newValue = newValue || 0
    setUserInput(newValue);
    onChangeValue(targ, newValue);
  }
  return (
    <div>
      <label>{children}</label>
      <input value={userInput} onChange={handleUserInput}></input>
    </div>
  );
}
