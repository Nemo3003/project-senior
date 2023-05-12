import React from "react";

const SchedulePage = () => {
  return (
    <div >
    <div className="bg-gray-100 ">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Schedule</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <p className="text-lg text-gray-700">
            Here is the schedule of classes for the current semester.
          </p>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Monday</h2>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
              <li>8:00am - 9:15am: Calculus I</li>
              <li>9:30am - 10:45am: Computer Science I</li>
              <li>11:00am - 12:15pm: History of Art</li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900">Tuesday</h2>
            <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
              <li>8:00am - 9:15am: Chemistry I</li>
              <li>11:00am - 12:15pm: English Composition</li>
           </ul>
         </div>
         <div className="mt-8">
           <h2 className="text-2xl font-bold text-gray-900">Wednesday</h2>
           <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
             <li>8:00am - 9:15am: Calculus I</li>
             <li>9:30am - 10:45am: Computer Science I</li>
             <li>11:00am - 12:15pm: History of Art</li>
           </ul>
         </div>
         <div className="mt-8">
           <h2 className="text-2xl font-bold text-gray-900">Thursday</h2>
           <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
             <li>8:00am - 9:15am: Chemistry I</li>
             <li>9:30am - 10:45am: Computer Science I</li>
             <li>11:00am - 12:15pm: English Composition</li>
           </ul>
         </div>
         <div className="mt-8">
           <h2 className="text-2xl font-bold text-gray-900">Friday</h2>
           <ul className="mt-4 list-disc list-inside text-lg text-gray-700">
             <li>8:00am - 9:15am: History of Art</li>
             <li>9:30am - 10:45am: Chemistry I</li>
             <li>11:00am - 12:15pm: English Composition</li>
           </ul>
         </div>
         
       </div>
       
     </main>
     
   </div>
   </div>
 );
};

export default SchedulePage;
