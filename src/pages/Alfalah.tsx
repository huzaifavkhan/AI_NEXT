import React from 'react';

const AlfalahInbound: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://alfalah-inbound.replit.app/"
        className="w-full h-full border-0"
        title="Alfalah Inbound"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default AlfalahInbound;