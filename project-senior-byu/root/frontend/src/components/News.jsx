import React from 'react';

const News = () => {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Latest News from OCACOPLUS
        </h3>
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
              02/16/2023:
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                OCACOPLUS Introduces Revolutionary New Product: Water that Makes You Smarter!
              </a>
            </dd>
          </div>
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
            03/16/2023:
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                OCACOPLUS Announces Partnership with Aliens to Create the Ultimate Health Supplement
              </a>
            </dd>
          </div>
          <div className="py-3 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-500">
            04/16/2023:
            </dt>
            <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
              <a href="#" className="text-indigo-600 hover:text-indigo-900">
                Breaking News: OCACOPLUS CEO Claims to Have Invented Time Travel, Plans to Test it on Employees
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default News;
