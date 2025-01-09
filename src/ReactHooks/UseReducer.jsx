export const UseReducer = () => {
    return (
      <div>
          <h1>React useReducer Hook</h1>
          <p>
          The useReducer Hook is similar to the useState Hook.
  <ul>
    <li>
  It allows for custom state logic.
  
  If you find yourself keeping track of multiple pieces of state that rely on complex logic, useReducer may be useful.
  </li>
  Syntax
  The useReducer Hook accepts two arguments.
  <li>
  The reducer function contains your custom state logic and the initialStatecan be a simple value but generally will contain an object.
  </li>
  <li>
  The useReducer Hook returns the current stateand a dispatchmethod.
  </li>
  </ul>
          </p>
          </div>
    )
  }
  

