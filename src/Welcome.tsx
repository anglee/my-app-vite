import { Button } from 'antd';
import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import Logo from './Logo';

const Welcome = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-1 place-items-center">
      <div className="mx-auto mt-20 max-w-4xl  px-6 text-center">
        <div className="flex justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <Logo src="/vite.svg" alt="Vite logo" shadowColor="#646cffaa" />
          </a>
          <a href="https://reactjs.org" target="_blank" rel="noreferrer">
            <Logo src={reactLogo} alt="React logo" shadowColor="#61dafbaa" isSpinning />
          </a>
        </div>
        <h1 className="my-8 text-center text-5xl font-bold text-gray-800">Vite + React</h1>
        <div className="p-8 text-center">
          <Button size="large" onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <p className="py-4 font-normal text-gray-500">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="my-4 text-center text-base font-normal text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  );
};

export default Welcome;
