import React from "react";
import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className="flex items-center justify-center min-h-[100vh]">
      <SignIn />
    </div>
  );
};

export default page;
