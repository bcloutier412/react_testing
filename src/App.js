import { useState } from 'react'
//////////////////////////////////////////////////////////////////////Course completion tracker//////////////////////////////////////////////////////////
/*
  @desc: Learned about the structure of react apps and how props are passed from from parent react elements. 
*/
// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   );
// };
// const Content = (props) => {
//   return (
//     <div>
//       <Part part={props.parts[0].name} exercise={props.parts[0].exercise}/>
//       <Part part={props.parts[1].name} exercise={props.parts[1].exercise}/>
//       <Part part={props.parts[2].name} exercise={props.parts[2].exercise}/>
//     </div>
//   );
// };
// const Part = (props) =>  {
//   return (
//     <div>
//     <p>
//     {props.part} {props.exercise}
//     </p>
//     </div>
//   )
// }
// const Total = (props) => {
//   return (
//     <div>
//       <p>
//         Number of exercises{" "}
//         {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}
//       </p>
//     </div>
//   );
// };
// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course.name} />
//       <Content parts={course.parts}/>
//       <Total parts={course.parts} />
//     </div>
//   );
// };



// ///////////////////////////////////////////////////////////GREETING APP//////////////////////////////////////////////////////////// 
/*
  @desc: Learned about how you can use javascript expressions directly in the react app. 
  You can also write helper functions inside of a react component because a react component is just a function that returns jsx. 
  It is unusual to do this kind of programming in java, however in javascript this is very common
  I also learned destructuring of functions and objects.
*/
// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age
//   return (
//     <div>
//       <p>
//         Hello {name}, you are {age} years old
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
//////////////////////////////////////////////////////////////////Counter////////////////////////////////////
/*
  @desc: We learned how to create a stateful component. We used the useState function which return an array with two elements. We destructure the values with the array destructuring method.
  The first value of the array is the value that is called with useState. The second value of the array is the function that is called to re render the state and the component.
   Whatever value is given to the second function will become the new value given to the useState function useState(x)
*/
const App = (props) => {
  const [ counter, setCounter ] = useState(0) 
  const increaseByOne = () => {
    setCounter(counter + 1)
  }
  const decreaseByOne = () => {
    setCounter(counter - 1)
  }
  const resetToZero = () => {
    setCounter(0)
  }
  return (
    <div>
    <Display counter={counter}/>
    <Button onClick={increaseByOne} text={'Plus'}/>
    <Button onClick={decreaseByOne} text={'Minus'}/>
    <Button onClick={resetToZero} text={'Reset'}/>
    </div> 
  )
}
const Display = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}
const Button = ({ onClick, text}) => <button onClick={onClick}>{text}</button>
export default App;
