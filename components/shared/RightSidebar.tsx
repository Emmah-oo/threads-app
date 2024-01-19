import React from "react";

const RightSidebar = () => {
  return (
    <section className="bg-[#121417] p-5 hidden lg:block h-screen">
      <div className="flex gap-10 flex-col mr-10">
        <div className="text-white">Suggested Communities</div>
        <div className="text-white">Similar minds</div>
      </div>
    </section>
  );
};

export default RightSidebar;
