import React, { useState } from 'react';
import Chatbot from 'react-simple-chatbot';
import { FaComment } from 'react-icons/fa';

const ChatbotPage = () => {
  const [showChat, setShowChat] = useState(false);
  const [chatEnded, setChatEnded] = useState(false); // add a state for chatEnded

  const handleChatToggle = () => {
    setShowChat(!showChat);
  };
// TODO: Fix this
const steps = [
  {
    id: 'Greet',
    message: 'Hello, Welcome to OCACOPLUS',
    trigger: 'Done',
  },
  {
    id: 'Done',
    message: 'Please enter your name!',
    trigger: 'waiting1',
  },
  {
    id: 'waiting1',
    user: true,
    trigger: 'GreetWithName',
  },
  {
    id: 'GreetWithName',
    message: 'Hi {previousValue}, nice to meet you!',
    trigger: 'AskIssue',
  },
  {
    id: 'AskIssue',
    message: 'We are currently working on this assistant. Please send an email to ulimarian2000@gmail.com',
    trigger: '', // Assign a unique trigger value
  }
];

const handleEnd = (result) => {
  if (!chatEnded) {
    setChatEnded(true);
    let count = 0;
    result.steps.forEach((step) => {
      if (step.trigger && step.message) {
        count++;
      }
    });
    console.log('Number of responses: ', count);
  }
};

const handleFallback = () => {
  return "Fallback";
};

return (
  <div className="fixed bottom-6 right-6">
    <button
      className="bg-green-500 rounded-full w-16 h-16 text-white flex items-center justify-center"
      onClick={handleChatToggle}
    >
      <FaComment size={30} />
      <span className="sr-only">Chat</span>
    </button>
    {showChat && (
      <div className="fixed bottom-24 right-6">
        <Chatbot
          steps={steps}
          handleEnd={handleEnd}
          handleFallback={handleFallback}
        />
      </div>
    )}
  </div>
);

};

export default ChatbotPage;
