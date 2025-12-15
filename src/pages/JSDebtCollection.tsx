import React from 'react';

const MashreqOutbound: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://js-outbound-debt-collection--razaiqbal2.replit.app"
        className="w-full h-full border-0"
        title="JS Outbound Debt Collection"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default MashreqOutbound;