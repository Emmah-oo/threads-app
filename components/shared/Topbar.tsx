import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignOutButton, OrganizationSwitcher } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const Topbar = () => {
  return (
    <nav className="fixed top-0 z-30 flex w-full items-center justify-between bg-dark-2 px-6 py-3">
      <div>
        <Link href="/" className="flex items-center gap-4">
          <Image src="assets/logo.svg" alt="logo" width={28} height={28} />
          <p className="text-light-1 max-xs:hidden">Threads</p>
        </Link>
      </div>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher />
      </div>
    </nav>
  );
};

export default Topbar;
