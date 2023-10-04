import React, { useState } from "react";

const useDate = () => {
  const currentDate = new Date();

  const getDay = () => {
    return currentDate.getDate();
  };

  const getMonth = () => {
    return currentDate.getMonth();
  };

  const addDay = (numberOfDays) => {
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() + numberOfDays);
    return newDate;
  };

  const addMonth = (numberOfMonths) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(newDate.getMonth() + numberOfMonths);
    return newDate;
  };

  return { currentDate, getDay, getMonth, addDay, addMonth };
};

export default function App() {
  const { currentDate, getDay, getMonth, addDay, addMonth } = useDate();
  const [newDate, setNewDate] = useState(currentDate);
  const [newMonth, setNewMonth] = useState(currentDate);

  const handleAddDay = () => {
    const updatedDate = addDay(20);
    setNewDate(updatedDate);
    if (updatedDate.getMonth() !== currentDate.getMonth()) {
      console.log("Wow, it's a brand new month! Time flies!");
    } else {
      console.log(`The month is still ongoing with ${updatedDate.getDate()} days`);
    }
  };

  const handleAddMonth = () => {
    const updatedMonth = addMonth(3);
    setNewMonth(updatedMonth);
    if (updatedMonth.getFullYear() !== currentDate.getFullYear()) {
      console.log("It's a new year");
    } else {
      console.log(`Current Month: ${updatedMonth.getMonth()}`);
    }
  };



  return (
    <div>
      <h1>Current Date</h1>
      <p>Date: {currentDate.toString()}</p>
      <p>Day: {getDay()}</p>
      <p>Month: {getMonth()}</p>

      <h1>New Date</h1>
      <p>Date: {newDate.toString()}</p>
      <p>Day: {newDate.getDate()}</p>
      <p>Month: {newDate.getMonth()}</p>

      <h1>New Month</h1>
      <p>Date: {newMonth.toString()}</p>
      <p>Month: {newMonth.getMonth()}</p>

      <button onClick={handleAddDay}>Add days</button>
      <button onClick={handleAddMonth}>Add months</button>
    </div>
  );
}
