import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://kepler-inbound-dashboard.replit.app/"
        className="w-full h-full border-0"
        title="Dashboard"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default Dashboard;