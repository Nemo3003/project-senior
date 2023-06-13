import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const ChatBotPage = () => {
  const [name, setName] = useState('');
  const [showChatBot, setShowChatBot] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleNameSubmit = (e) => {
    e.preventDefault();
    setShowOptions(true);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const toggleChatBot = () => {
    setShowChatBot(!showChatBot);
  };

  const closeChatBot = () => {
    setShowChatBot(false);
    setShowOptions(false);
    setSelectedOption('');
    setName('');
  };

  return (
    <div
      className={`fixed bottom-[3rem] right-[2rem]  bg-white rounded-lg shadow-lg ${
        showChatBot ? 'w-80' : 'w-12'
      }`}
    >
      <div
        className={`bg-green-500 text-white rounded-t-lg p-[.3rem] cursor-pointer ${
          showChatBot ? 'rounded-b-none' : ''
        } flex items-center justify-center`}
        onClick={toggleChatBot}
        style={{
          paddingBottom: showChatBot ? '1.5rem' : '0',
          paddingRight: showChatBot ? '1.5rem' : '0',
        }}
      >
        {!showChatBot && (
          <FontAwesomeIcon icon={faComment} className="h-6 w-6 " />
        )}
        {showChatBot && <p className="font-semibold">Hi! I am chatbot, ready to help you!</p>}
      </div>

      {showChatBot && (
        <div className="bg-white rounded-b-lg p-4">
          {!showOptions && (
            <div>
              <form onSubmit={handleNameSubmit}>
                <p className="text-gray-800">
                  Nice to meet you! What's your name?
                </p>
                <div className="flex items-center mt-2">
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md p-2"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="ml-2 bg-blue-500 text-white rounded-md px-4 py-2 font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          {showOptions && (
            <div>
              <p className="text-gray-800">
                Nice to meet you, {name}! How may I assist you?
              </p>
              <div className="mt-4">
                <button
                  className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold mb-2 w-full"
                  onClick={() => handleOptionSelect('enroll')}
                >
                  I want to enroll in a class
                </button>
                <button
                  className="bg-blue-500 text-white rounded-md px-4 py-2 font-semibold w-full"
                  onClick={() => handleOptionSelect('issues')}
                >
                  I am having issues with the page or courses
                </button>
              </div>
              {selectedOption === 'enroll' && (
                <div className="mt-4">
                  <p>Here, follow this link:</p>
                  <a
                    href="https://example.com/enroll"
                    className="text-blue-500 underline"
                  >
                    https://example.com/enroll
                  </a>
                </div>
              )}
              {selectedOption === 'issues' && (
                <div className="mt-4">
                  <p>Send your concerns/issues to this email:</p>
                  <a href="mailto:example@example.com" className="text-blue-500">
                    example@example.com
                  </a>
                  <p>We will get back to you as soon as possible.</p>
                </div>
              )}
              <button
                className="bg-gray-200 text-gray-800 rounded-md px-4 py-2 mt-4 w-full"
                onClick={closeChatBot}
              >
                Close
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBotPage;
