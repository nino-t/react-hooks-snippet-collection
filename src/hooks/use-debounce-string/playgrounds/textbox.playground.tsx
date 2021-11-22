import React from 'react';
import useDebounceString from '../use-debounce-string.hook';

/**
 * Example with textbox
 * @returns React.NodeElement
 */
const TextBox: React.FC = () => {
  const [text, setText] = React.useState<string>('');
  const debouncedText = useDebounceString(text, 600); // 6 seconds

  return (
    <React.Fragment>
      <h3>Change input string</h3>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <p style={{ display: 'block' }}>Result: {debouncedText}</p>
    </React.Fragment>
  );
}

export default TextBox;