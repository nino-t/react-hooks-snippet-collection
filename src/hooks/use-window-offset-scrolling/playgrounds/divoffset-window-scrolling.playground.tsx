import React from 'react';
import useWindowScrolling from '../use-window-offset-scrolling.hook';

const DivOffetWindowScrolling = () => {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const isOffset = useWindowScrolling(targetRef);

  React.useEffect(() => {
    if (isOffset) {
      console.log('Is offset');
    } else {
      console.log('Is onset');
    }
  }, [isOffset]);

  const makeRangeOfArray = (range: number): number[] => {
    return Array.from({length: range}, (_, i) => i + 1);
  }

  return (
    <React.Fragment>
      <div style={{ border: '1px solid red', height: 200, display: 'flex' }} ref={targetRef}>
        <p>Box 1</p>
      </div>
      {
        makeRangeOfArray(10).map((item) => (
          <div style={{ border: '1px solid blue', height: 200, display: 'flex' }} key={item}>
            <p>Box Mapping {item}</p>
          </div>            
        ))
      }
    </React.Fragment>
  );
}

export default DivOffetWindowScrolling;