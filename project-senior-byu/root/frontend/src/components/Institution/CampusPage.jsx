import React from "react";

const CampusPage = () => {
  return (
    <div className="bg-gray-100 ">
      <h1>Campus page</h1>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <p className="text-lg text-gray-700">
            Here you can find information about the university campus.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Location</h2>
            <p className="mt-4 text-lg text-gray-700">
              The university campus is located in a beautiful and scenic area
              just outside the city center. It is easily accessible by public
              transportation and is within walking distance of several
              restaurants and shops.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Facilities</h2>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
              <li>State-of-the-art classrooms and labs</li>
              <li>Student center with food court, lounge areas, and recreation facilities</li>
                 <li>Athletic center with gymnasium, swimming pool, and fitness classes</li>
                 <li>Outdoor sports fields and courts</li>
                 <li>On-campus housing for students</li>
               </ul>
             </div>
           </div>
         </div>
       </div>
     );
   };
export default CampusPage;
             
