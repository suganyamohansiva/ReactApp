export const UseMemo = () => {
    return (
      <div>
          <h1>
          React useMemo Hook
          </h1>
          <p>
          The React useMemo Hook returns a memoized value.
          <ul>
  <li>
  Think of memoization as caching a value so that it does not need to be recalculated.
  
  The useMemo Hook only runs when one of its dependencies update.
  </li>
  <li>
  This can improve performance.
  
  The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.
  
  </li>
  <li>
  The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
  
  In this example, we have an expensive function that runs on every render.
  </li>
  
  When changing the count or adding a todo, you will notice a delay in execution.
  </ul>
          </p>
      </div>
    )
  }
  
