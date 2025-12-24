import React from 'react';

const TrendyolCalls: React.FC = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <iframe
        src="https://trendyol-customer-support-calls.replit.app"
        className="w-full h-full border-0"
        title="Trendyol Customer Support Calls"
        allow="microphone; camera; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default TrendyolCalls;
