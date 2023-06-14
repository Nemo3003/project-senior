import React, { useState } from 'react';
import classNames from 'classnames';
import CampusPage from './CampusPage';
import ResourcePage from './ResourcesPage';
import SchedulePage from './SchedulePage';

//import Robot from './Robot';

const tabs = [
  { id: 'campus', label: 'Campus' },
  { id: 'resources', label: 'Resources' },
];

const Student = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="w-[200vh] h-[80vh] content-evenly ">
    <div className="flex justify-center screen-h-[50vh] p-[6rem]">
    <div className="p-4">
      <div className="flex mb-4">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={classNames(
              'mr-4 px-2 py-1 rounded-md',
              { 'bg-primary text-white': activeTab === tab.id },
              { 'bg-gray-200': activeTab !== tab.id }
            )}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
        
      </div>
      {activeTab === 'campus' && (
        <div>
          <h1 className="text-3xl mb-2">Campus</h1>
          <CampusPage/>
        </div>
      )}
     
      {activeTab === 'resources' && (
        <div>
          <h1 className="text-2xl mb-2">Resources</h1>
          <ResourcePage/>
        </div>
      )}
      
    </div>
  </div>
  </div>
  )  
};

export default Student;
