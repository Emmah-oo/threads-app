import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserButton, SignedIn } from "@clerk/nextjs";

const Topbar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-dark-2 px-6 py-3">
      <div>
        <Link href="/" className="flex items-center gap-4">
          <Image src="assets/logo.svg" alt="logo" width={28} height={28} />
          <p className="text-light-1 max-xs:hidden">
            Threads
          </p>
        </Link>
      </div>

      <div>
        <SignedIn>
          <UserButton afterSignOutUrl="/" showName={true} />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Topbar;
