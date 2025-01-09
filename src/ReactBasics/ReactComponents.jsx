export const ReactComponents = () => {
    return (
      <div>
        <h2>React Components</h2>
        <p>
          <ul>
            <li>
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
</li>
<li>
Components come in two types, Class components and Function components, in this tutorial we will concentrate on Function components.
</li>
<li>
In older React code bases, you may find Class components primarily used. It is now suggested to use Function components along with Hooks, which were added in React 16.8. There is an optional section on Class components for your reference.
</li>
Create Your First Component
When creating a React component, the component's name MUST start with an upper case letter.
<li>
Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
</li>
<li>
The component also requires a render() method, this method returns HTML.
</li>
</ul>
</p>
      </div>
    );
  };
  
  

