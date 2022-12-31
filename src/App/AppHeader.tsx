import React from 'react';
import { Link } from 'react-router-dom';

interface IProps {}

const AppHeader = ({}: IProps) => {
  return (
    <header className="flex h-12 bg-neutral-100 px-6 shadow-md">
      <Link className="flex flex-1 items-center" to={'/'}>
        <img src="/vite.svg" className="mr-2 w-9" alt="Vite logo" />
        <h1 className="m-0 inline-block text-2xl font-normal text-gray-800">Vite React</h1>
      </Link>
    </header>
  );
};

export default AppHeader;
