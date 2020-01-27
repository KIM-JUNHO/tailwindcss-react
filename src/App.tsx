import React from 'react';
import logo from './img/logo.svg';
import beachwork from './img/beach-work.jpg';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 sm:bg-green-500 md:bg-red-500 lg:bg-yellow-500 xl:bg-pink-500">
      <div className="px-8 py-12 max-w-md mx-auto">
        <img className="h-10" src={logo} alt="Workcation"></img>
        <img
          className="mt-6 rounded-lg shadow-xl"
          src={beachwork}
          alt="Woman workcationing on the beach"
        ></img>
        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
          You can work from anywhere.
          <span className="text-indigo-500">Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-700">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>
        <div className="mt-4">
          <a
            href="#"
            className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold"
          >
            Book your escape
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
