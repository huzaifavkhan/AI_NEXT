import React from 'react';

const TakeoffOutbound: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://takeoff-outbound-caller--razaiqbal2.replit.app/"
        className="w-full h-full border-0"
        title="Takeoff Outbound Caller"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default TakeoffOutbound;

