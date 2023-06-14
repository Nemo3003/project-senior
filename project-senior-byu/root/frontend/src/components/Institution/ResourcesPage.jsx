import React from "react";

const ResourcesPage = () => {
  return (
    <div className="bg-gray-100 flex justify-center screen-h-[50vh] p-[6rem]">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <p className="text-lg text-gray-700">
            Here you can find a list of useful resources for students.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Academic Resources
            </h2>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
              <li>Library resources and databases</li>
              <li>Tutoring and academic support services</li>
              <li>Career services and job placement assistance</li>
              <li>Internship and research opportunities</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Student Life Resources
            </h2>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
              <li>Housing and dining information</li>
              <li>Student organizations and clubs</li>
               <li>Health and wellness services</li>
             <li>Disability services and accommodations</li>
           </ul>
         </div>
       </div>
     </main>
   </div>
 );
};

export default ResourcesPage;
