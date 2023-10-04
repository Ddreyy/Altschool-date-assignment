import React, { useEffect, useState } from 'react';

import useHelloWorld from './custom-hooks/useHelloWorld.js';

import './style.css';

const months = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};


const useDate = () => {
  const date = new Date();

  const getDay = () => {
    return date.getDay();
  };

  const getMonth = () => {
    return date.getMonth();
  };

  const addDay = (numberOfDays) => {
    //N.B if day after adding is greater than number of days for that month, date returned should be a new month date
    const result = date.getDay() + numberOfDays;
    return result
   
  };

  const addMonth = (numberOfMonths) => {
    //N.B if month after adding is greater than 11, date returned should be a new year
    return date.getMonth() + numberOfMonths;
  };

  return { date, getDay, getMonth, addDay, addMonth };
};

export default function App() {

  const { date, getDay, getMonth, addDay, addMonth } = useDate();
  const [newDate , setNewDate] = useState(date)
  const [newMonth , setNewMonth] = useState(date)

  const handleAddDay = () => {
    setNewDate(addDay(20))
    if(addDay(20) > months.October){
      console.log("it's a new month cause it exceeds the number of days for the specified month ")
    }else{
      console.log("this is still the current month with " ,addDay(20) , "of days ")
    }
  }
  const handleAddMonth = () => {
    setNewMonth(addMonth(3))
    if(addMonth(3) > Object.keys(months).length){
      console.log("a new year")
    }else{
      console.log(getMonth())
    }
  }


  return (
    <div>
      <div>
        <h1>Current Date</h1>
        <p>Date: {date.toString()}</p>
        <p>Day: {getDay()}</p>
        <p>Month: {getMonth()}</p>

        <h1>New Date</h1>
        <p>Days: {date.toString()}</p>
        
        <p>Day: {getDay()}</p>
        <p>Month: {getMonth()}</p>

        <p>month: {newDate.toString()}</p>
        <p>Date: {newMonth.toString()}</p>

        <button onClick = {handleAddDay}>Add days</button>
        <button onClick = {handleAddMonth}>Add months</button>
      </div>
    </div>
  );
}
