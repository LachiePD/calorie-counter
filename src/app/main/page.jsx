"use client";
import { useState } from "react";
import putApi from "../api/putApi.js";
import Home from "./presentationalComponents/Home";

const Page = () => {
  const [countingCalories, setCountingCalories] = useState(false);

  const toggleCountingCalories = () => {
    setCountingCalories(!countingCalories);
  };

	const sendPayload = (payload) => {
    putApi.post(payload);
  };

  return (
    <Home
      countingCalories={countingCalories}
      toggleCountingCalories={toggleCountingCalories}
      sendPayload={sendPayload}
    />
  );
};

export default Page;
