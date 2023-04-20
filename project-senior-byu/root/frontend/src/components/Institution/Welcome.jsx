import React from 'react';
import FunnyStory from './FunnyStory';

function Welcome() {
  return (
    <div className="flex justify-center text-center">
        <div><div><h1 className="text-3xl font-bold mb-4">Welcome to our Institution</h1></div>
        <div><FunnyStory /></div></div>
        
      
    </div>
  );
}

export default Welcome;
