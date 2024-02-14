"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";
import { SignedIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const LeftSidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  const sidebarLinks = [
    {
      imgURL: "/assets/home.svg",
      route: "/",
      label: "Home",
    },
    {
      imgURL: "/assets/search.svg",
      route: "/search",
      label: "Search",
    },
    {
      imgURL: "/assets/heart.svg",
      route: "/activity",
      label: "Activity",
    },
    {
      imgURL: "/assets/create.svg",
      route: "/create-thread",
      label: "Create Thread",
    },
    {
      imgURL: "/assets/community.svg",
      route: "/communities",
      label: "Communities",
    },
    {
      imgURL: "/assets/user.svg",
      route: "/profile",
      label: "Profile",
    },
  ];

  return (
    <section className="sticky left-0 top-0 z-20 flex h-screen flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 pb-5 pt-16 max-md:hidden lg:w-[300px] ">
      <div className="flex flex-col gap-8 px-4 justify-center mt-10 md:items-center lg:items-baseline">
        {sidebarLinks.map((link, i) => {
          const isActive =
            link.route === pathname ||
            pathname.split("/")[1].includes(link.route);
          return (
            <Link
              href={link.route}
              key={i}
              className={`flex items-center gap-3 hover:bg-blue p-3 lg:w-[180px] rounded-lg transition-all ${isActive ? "bg-blue" : ""}`}
            >
              <Image
                src={link.imgURL}
                height={25}
                width={25}
                alt={link.label}
              />
              <h1 className="text-white md:hidden lg:block">{link.label}</h1>
            </Link>
          );
        })}
      </div>
      <div className="mt-10 px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer gap-4 p-1">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={25}
                height={25}
              />

              <p className="text-light-2 md:hidden lg:block">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
};

export default LeftSidebar;
