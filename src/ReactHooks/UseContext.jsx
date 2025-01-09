export const UseContext = () => {
    return (
      <div>
      <h1>React useContext Hook</h1>
      <p>
React Context is a way to manage state globally.
<ul>
  <li>
It can be used together with the useState Hook to share state between deeply nested components more easily than with useState alone.
</li>

<li>
State should be held by the highest parent component in the stack that requires access to the state.

</li>

To illustrate, we have many nested components. The component at the top and bottom of the stack need access to the state.
<li>
To do this without Context, we will need to pass the state as "props" through each nested component. This is called "prop drilling".
</li>
</ul>
</p>
      </div>
    );
  };
  