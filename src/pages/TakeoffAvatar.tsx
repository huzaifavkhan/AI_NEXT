import React from 'react';

const TakeoffAvatar: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://takeoff-live-avatar.replit.app"
        className="w-full h-full border-0"
        title="Takeoff Live Avatar"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default TakeoffAvatar;

