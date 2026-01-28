import React from 'react';

const FibaBank: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://fibabanka-hr-screening.replit.app/"
        className="w-full h-full border-0"
        title="FibaBank HR Screening"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default FibaBank;