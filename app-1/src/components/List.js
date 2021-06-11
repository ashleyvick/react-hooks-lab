import React from "react";
import Todo from "./Todo";

const List = (props) => {
  return (
    <div>
      {props.list.map((element, index) => {
        return <ul key={index}>{element}</ul>;
      })}
    </div>
  );
};

export default List;
