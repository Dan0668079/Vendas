import { useEffect, useState } from 'react';

export const useApp = () => {
  const [value, setValue] = useState('abc');

  useEffect(() => {
    console.log('foi');
  }, []);

  const handleOnpress = () => {
    console.log('foi press');

    setValue('def');
  };

  return {
    value,
    handleOnpress,
  };
};
