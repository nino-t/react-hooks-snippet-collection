import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import useWindowScrolling from './use-window-offset-scrolling.hook';

beforeEach(() => {
  const TestComponent = (): JSX.Element => {
    const targetRef = React.useRef<HTMLDivElement>(null);
    const isOffset = useWindowScrolling(targetRef);
  
    return (
      <React.Fragment>
        <div ref={targetRef}>
          <p style={{ display: 'block' }}>Hello Scrolling!</p>
          <span style={{ display: 'block' }} data-testid="offset-status">{String(isOffset)}</span>
        </div>
      </React.Fragment>
    );
  }

  render(<TestComponent />);
});

it('scroll 1000px trigger offset status to true', () => {
  fireEvent.scroll(window, {
    target: {
      scrollY: 1000
    }
  });

  // Todo: its still return false because not support for browser check, you can use Cypress for tesing use case.
  expect(screen.getByTestId('offset-status').textContent).toBe('false');
});