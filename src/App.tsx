import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import TextBoxPlayground from './hooks/use-debounce-string/playgrounds/textbox.playground';

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <span>use-debounce-string playgrounds</span>
          <ul>
            <li>
              <Link to="/use-debounce-string/playgrounds/textbox">Textbox: Example with textbox, input change</Link>
            </li>
          </ul>
        </li>
      </ul>
      <div style={{ borderTop: '1px solid red', padding: '2rem 4rem' }}>
        <Routes>
          <Route path="/" caseSensitive={true} element={<p>Welcome to react hooks snippets</p>} />
          <Route path="/use-debounce-string/playgrounds/textbox" element={<TextBoxPlayground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
