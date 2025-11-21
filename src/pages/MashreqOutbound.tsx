import React from 'react';

const MashreqOutbound: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://mashreq-uae-outbound-portal-razaiqbal2.replit.app"
        className="w-full h-full border-0"
        title="Mashreq UAE Outbound Portal"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default MashreqOutbound;