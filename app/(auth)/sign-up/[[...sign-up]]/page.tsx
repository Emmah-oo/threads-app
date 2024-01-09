import React from "react";
import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <SignUp />
    </div>
  );
};

export default page;
