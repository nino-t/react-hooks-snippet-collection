import React from 'react';

/**
 * make a string input with delay changes
 * @param value a string that will change at any time
 * @param delay the time limit for a change to be updated (in milliseconds)
 * @returns the last string of changes in the delay time range
 */
const useDebounceString = (value: string, delay: number): string => {
  const [debouncedValue, setDebouncedValue] = React.useState<string>(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounceString;