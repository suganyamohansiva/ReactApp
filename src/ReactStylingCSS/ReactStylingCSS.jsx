export const ReactStylingCSS = () => {
    return (
      <div>
        <h1>Styling React Using CSS</h1>
        <p><ul>
          <li>
        There are many ways to style React with CSS, this tutorial will take a closer look at three common ways:
        </li>
        <li>
Inline styling
CSS stylesheets
CSS Modules
Inline Styling
To style an element with the inline style attribute, the value must be a JavaScript object:
</li>
<li>
camelCased Property Names
Since the inline CSS is written in a JavaScript object, properties with hyphen separators, like background-color, must be written with camel case syntax:
</li>
<li>
CSS Modules
Another way of adding styles to your application is to use CSS Modules.
</li>
CSS Modules are convenient for components that are placed in separate files.
<li>
The CSS inside a module is available only for the component that imported it, and you do not have to worry about name conflicts.
</li>
Create the CSS module with the .module.css extension, example: my-style.module.css.
</ul>
        </p>
      </div>
    )
  }
  

