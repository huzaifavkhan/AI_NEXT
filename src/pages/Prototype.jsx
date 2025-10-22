import React from "react";

const Prototype = () => {
  return (
    <section className="min-h-screen w-full bg-white" id="prototype">
      <div className="w-full h-screen">
        <iframe 
          src="https://ubl-inbound-call.replit.app" 
          className="w-full h-full border-0"
          title="UBL Inbound Call Prototype"
          allow="microphone; camera"
        />
      </div>
    </section>
  );
};

export default Prototype;