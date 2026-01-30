import React from 'react';

const DIB: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://dib-inbound-calls.replit.app"
        className="w-full h-full border-0"
        title="DIB Inbound Calls"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default DIB;