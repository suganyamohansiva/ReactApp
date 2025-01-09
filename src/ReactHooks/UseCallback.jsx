export const UseCallback = () => {
    return (
      <div>
          <h1>
          React useCallback Hook
          </h1>
          <p>
          The React useCallback Hook returns a memoized callback function.
          <ul>
  <li>
  Think of memoization as caching a value so that it does not need to be recalculated.
  </li>
  <li>
  This allows us to isolate resource intensive functions so that they will not automatically run on every render.
  </li>
  <li>
  The useCallback Hook only runs when one of its dependencies update.
  </li>
  This can improve performance.
  <li>
  The useCallback and useMemo Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useMemo in the useMemo chapter.
  </li>
  <li>
  One reason to use useCallback is to prevent a component from re-rendering unless its props have changed.
  </li>
  In this example, you might think that the Todos component will not re-render unless the todos change:
  </ul>
          </p>
      </div>
    )
  }
  

