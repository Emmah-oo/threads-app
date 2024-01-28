import React from "react";

const RightSidebar = () => {
  return (
    <section className="bg-[#121417] sticky right-0 top-0 z-20 flex h-screen w-fit flex-col justify-between gap-12 overflow-auto border-l border-l-dark-4 px-10 pb-6 pt-28 max-xl:hidden">
      <div className="flex gap-10 flex-col mr-10">
        <div className="text-white">Suggested Communities</div>
        <div className="text-white">Similar minds</div>
      </div>
    </section>
  );
};

export default RightSidebar;
