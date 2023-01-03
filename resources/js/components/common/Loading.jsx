import { useState } from 'react';
import { useEffectOnce } from 'react-use';

const Loading = () => {
  const [show, setShow] = useState(true);
  useEffectOnce(() => {
    setTimeout(() => {
      setShow(false);
    }, 500);
  });

  if (!show) {
    return false;
  }

  return (
    <div className="absolute inset-0 z-10 w-full h-full bg-white dark:bg-dark-300 flex items-center justify-center">
      <span className="loader"></span>
    </div>
  );
};
export default Loading;
