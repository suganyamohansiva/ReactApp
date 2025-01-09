

export const ReactForm = () => {
  return (
    <div>
        <h1>
        React Forms
        </h1>
        <p>
        Just like in HTML, React uses forms to allow users to interact with the web page.

Adding Forms in React
You add a form with React like any other element:
<h2>Handling Forms</h2>
<ul>
  <li>
Handling forms is about how you handle the data when it changes value or gets submitted.
</li>
<li>
In HTML, form data is usually handled by the DOM.
</li>
<li>
In React, form data is usually handled by the components.
</li>
<li>
When the data is handled by the components, all the data is stored in the component state.
</li>
You can control changes by adding event handlers in the onChange attribute.
<li>
We can use the useState Hook to keep track of each inputs value and provide a "single source of truth" for the entire application.
</li>
</ul>
        </p>
    </div>
  )
}
