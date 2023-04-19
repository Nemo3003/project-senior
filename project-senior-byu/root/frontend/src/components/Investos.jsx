import React from 'react';

const Investors = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Meet our Investors!
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          At OCACOPLUS, we have some of the most unique and eccentric investors in the business. Get to know them below!
        </p>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="sm:col-span-1">
            <img className="max-w-xs rounded-lg shadow-lg" src="https://via.placeholder.com/150" alt="Investor 1"/>
          </div>
          <div className="mt-5 sm:mt-0 sm:col-span-2">
            <h4 className="text-lg font-bold text-gray-900">The Fortune Teller</h4>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Meet our investor who predicts the future! He's never wrong, and has predicted that OCACOPLUS will be the biggest health supplement company in the world by 2025.</p>
          </div>
        </div>
        <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="sm:col-span-1">
            <img className="max-w-xs rounded-lg shadow-lg" src="https://via.placeholder.com/150" alt="Investor 2"/>
          </div>
          <div className="mt-5 sm:mt-0 sm:col-span-2">
            <h4 className="text-lg font-bold text-gray-900">The Ghost</h4>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Yes, you read that right! Our investor is a ghost who communicates with us through a medium. He's been investing in OCACOPLUS for centuries, and always knows the right moves to make.</p>
          </div>
        </div>
        <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <div className="sm:col-span-1">
            <img className="max-w-xs rounded-lg shadow-lg" src="https://via.placeholder.com/150" alt="Investor 3"/>
          </div>
          <div className="mt-5 sm:mt-0 sm:col-span-2">
            <h4 className="text-lg font-bold text-gray-900">The Time Traveler</h4>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Our investor who travels through time! He's seen the future and knows that OCACOPLUS will be the biggest health supplement company in the world. He's also told us about a few stocks that we should invest in before they explode in the future.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investors;
