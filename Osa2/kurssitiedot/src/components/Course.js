const Course = props => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      {props.courses.map(course => (
        <div key={course.id}>
          <Header course={course} />
          <Content parts={course} />
          <Total parts={course} />
        </div>
      ))}
    </div>
  )
}

const Header = props => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.parts.map(part => (
        <Part key={part.id} part={part.name} exercises={part.exercises} />
      ))}
    </div>
  )
}

const Part = props => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Total = ({ parts }) => {
  const yhteensa = [];
  const lisaa = (total, num) => {
    return total + num;
  };
  return (
    <div>
      {
        <p>
            Yhteensä &nbsp;
            {console.log(
              parts.parts.map((part) => yhteensa.push(part.exercises))
            )}
            {yhteensa.reduce(lisaa)}
            &nbsp; harjoitusta
        </p>
      }
    </div>
  );
};


//"vienti"
export default Course;