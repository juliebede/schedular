import React from "react";
import DayListItem from "./DayListItem"

export default function DayList(props) {
  const days = props.days.map((day) => {
    return (
      <DayListItem 
      key={day.id}
      selected={day.name === props.day}
      name={day.name}
      spots={day.spots}
      setDay={props.setDay}
      />
    )
  });
  return days;
}