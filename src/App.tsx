import React from 'react';
import logo from './img/logo.svg';
import beachwork from './img/beach-work.jpg';
import DestinationCard from './components/DestinationCard';

const App: React.FC = () => {
  const popularDestinations = [
    {
      city: 'Toronto',
      averagePrice: 120,
      propertyCount: 76,
      imageUrl: require('./img/toronto.jpg'),
      imageAlt: 'Toronto skyline'
    },
    {
      city: 'Malibu',
      averagePrice: 215,
      propertyCount: 43,
      imageUrl: require('./img/malibu.jpg'),
      imageAlt: 'Cliff in Malibu'
    },
    {
      city: 'Chicago',
      averagePrice: 130,
      propertyCount: 115,
      imageUrl: require('./img/chicago.jpg'),
      imageAlt: 'Chicago skyline'
    },
    {
      city: 'Seattle',
      averagePrice: 135,
      propertyCount: 63,
      imageUrl: require('./img/seattle.jpg'),
      imageAlt: 'Seattle skyline'
    },
    {
      city: 'Colorado',
      averagePrice: 85,
      propertyCount: 47,
      imageUrl: require('./img/colorado.jpg'),
      imageAlt: 'Lake in Colorado'
    },
    {
      city: 'Miami',
      averagePrice: 115,
      propertyCount: 86,
      imageUrl: require('./img/miami.jpg'),
      imageAlt: 'Beach in Miami'
    }
  ];
  return (
    <div className="bg-gray-300">
      <div className="bg-gray-100 flex">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12">
          <div className="xl:max-w-lg xl:ml-auto">
            <img className="h-10" src={logo} alt="Workcation"></img>
            <img
              className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
              src={beachwork}
              alt="Woman workcationing on the beach"
            ></img>
            <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
              You can work from anywhere.
              <br className="hidden lg:inline"></br>
              <span className="text-indigo-500">Take advantage of it.</span>
            </h1>
            <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className="mt-4 sm:mt-6">
              <a href="#" className="btn btn-indigo shadow-lg sm:text-base">
                Book your escape
              </a>
              <a href="#" className="ml-2 btn btn-gray sm:text-base">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:relative">
          <img
            className="absolute inset-0 h-full w-full object-cover object-center"
            src={beachwork}
            alt="Woman workcationing on the beach"
          ></img>
        </div>
      </div>
      <div>
        <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
          <h2 className="text-xl text-gray-900">Popular destinations</h2>
          <p className="text-gray-600">
            A selection of great work-friendly cities with lots to see and
            explore.
          </p>
          <div className="flex flex-wrap -mx-4">
            <div className="mt-6 w-full px-4 lg:w-1/2 xl:w-1/3">
              {popularDestinations.map(destination => (
                <DestinationCard
                  city={destination.city}
                  averagePrice={destination.averagePrice}
                  propertyCount={destination.propertyCount}
                  imageUrl={destination.imageUrl}
                  imageAlt={destination.imageAlt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
