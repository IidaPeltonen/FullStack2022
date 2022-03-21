/* Iida Peltonen 2022 */

import React from "react";
//Cotse-komponentin tuonti omasta golderistaan
import Course from "./components/Course";

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Kissakuvat",
      id: 2,
      parts: [
        {
          name: "Ottaminen",
          exercises: 6,
          id: 1,
        },
        {
          name: "Käsittely",
          exercises: 2,
          id: 2,
        },
        {
          name: "Ihailu",
          exercises: 19,
          id: 3,
        },
      ],
    },
    {
      name: "Kokkaus",
      id: 3,
      parts: [
        {
          name: "Tekeminen",
          exercises: 2,
          id: 1,
        },
        {
          name: "Syöminen",
          exercises: 20,
          id: 2,
        },
        {
          name: "Juominen",
          exercises: 1,
          id: 3,
        },
      ],
    },
  ];

  return (
    <div>
      <Course courses={courses} />
    </div>
  );
};

export default App;
