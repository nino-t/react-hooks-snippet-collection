import React from 'react';

const useWindowOffsetScrolling = (targetElement: React.RefObject<HTMLDivElement>): boolean => {
  const [isOffset, setIsOffset] = React.useState<boolean>(false);
  
  React.useEffect(() => {
    const handler = (): void => {
      const { scrollTop: documentScrollTop } = document.documentElement;
      const { offsetTop, clientHeight } = targetElement.current || {
        offsetTop: 0,
        clientHeight : 0
      };

      const isOffsetScrolling = documentScrollTop > (offsetTop + clientHeight) ? true : false;

      if (isOffsetScrolling) {
        setIsOffset(true);
      } else {
        setIsOffset(false);
      }
    }

    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, [targetElement]);

  return isOffset;
}

export default useWindowOffsetScrolling;