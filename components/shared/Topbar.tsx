import React from "react";
import Image from "next/image";
import { UserButton, SignedIn } from "@clerk/nextjs";

const Topbar = () => {
  return (
    <header className="py-[2vh] px-[2vh] flex items-center justify-between mx-10">
      <div className="flex gap-2 items-center">
        <Image src="assets/logo.svg" height={40} width={30} alt="Threads" />
        <h1>Threads</h1>
      </div>

      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" showName={true}/>
        </SignedIn>
      </div>
    </header>
  );
};

export default Topbar;
