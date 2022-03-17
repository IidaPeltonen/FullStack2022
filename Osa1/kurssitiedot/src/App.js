import React from "react";

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1> {/* tulostaa kurssien otsikot */}
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part
        part1={props.parts.parts[0].name} /* osion nimi */
        exercises1={props.parts.parts[0].exercises} /* osion tehtävät */
      />
      <Part
        part2={props.parts.parts[1].name} /* osion nimi */
        exercises2={props.parts.parts[1].exercises} /* osion tehtävät */
      />
      <Part
        part3={props.parts.parts[2].name} /* osion nimi */
        exercises3={props.parts.parts[0].exercises} /* osion tehtävät */
      />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      {
        <p>
          Number of exercises{" "}
          {props.parts.parts[0].exercises +
            props.parts.parts[1].exercises +
            props.parts.parts[2].exercises} {/* osioen tehtävär laskettuina yhteen */}
        </p>
      }
    </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1} {/* yhdistää osion nimen ja tehtäviewn määrän */}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  )
}


const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course} />
      <Total parts={course} />
    </div>
  )
}

export default App
