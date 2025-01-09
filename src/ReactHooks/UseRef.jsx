export const UseRef = () => {
    return (
      <div>
          <h1>React useRef Hook</h1>
          <p>
          The useRef Hook allows you to persist values between renders.
  <ul>
    <li>
  It can be used to store a mutable value that does not cause a re-render when updated.
  </li>
  It can be used to access a DOM element directly.
  <li>
  Does Not Cause Re-renders
  If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render.
  </li>
  To avoid this, we can use the useRef Hook.
  
  <h2>Accessing DOM Elements</h2>
  In general, we want to let React handle all DOM manipulation.
  <li>
  But there are some instances where useRef can be used without causing issues.
  </li>
  In React, we can add a ref attribute to an element to access it directly in the DOM.
  </ul>
          </p>
      </div>
    )
  }
  

