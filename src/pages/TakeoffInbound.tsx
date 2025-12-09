import React from 'react';

const TakeoffInbound: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://takeoff-inbound-caller.replit.app"
        className="w-full h-full border-0"
        title="Takeoff Inbound Caller"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default TakeoffInbound;

