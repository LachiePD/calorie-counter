import { useState } from "react";
import Card from "../presentationalComponents/Card";
const CardContainer = ({ toggleCountingCalories, sendPayload }) => {
  const [payload, setPayload] = useState({
    counts: [],
    sessionCookie: null,
    time: null,
  });

  const handleClick = () => {
    handleToggle();

    console.log(payload);
    sendPayload(payload);
  };
  const handleToggle = () => {
    toggleCountingCalories();
  };

  const insertToPayload = (id, userInput) => {
    let newCounts = payload.counts;
    newCounts[id] = userInput;
    setPayload({ ...payload, counts: newCounts });
  };

  return <Card handleToggle={handleClick} insertToPayload={insertToPayload} />;
};

export default CardContainer;
