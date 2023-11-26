import UserInput from "../presentationalComponents/UserInput";
import { useState, } from "react";
import {validInput} from '../../util/validation.js';
const UserInputContainer = ({ insertToPayload, id }) => {
  const [input, setInput] = useState(0);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    if (validInput(inputValue) == false) {
      return;
    }
    setInput(inputValue);
    insertToPayload(id, inputValue);
  };
  return <UserInput handleChange={handleChange} id={0} input={input} />;
};

export default UserInputContainer;
