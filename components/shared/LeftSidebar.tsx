"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { SignOutButton } from "@clerk/nextjs";

const LeftSidebar = () => {
  const pathname = usePathname();
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
    <section className="w-[300px] bg-[#121417] p-5 relative h-screen hidden md:block">
      <div className="flex flex-col gap-10 justify-center ml-2 mt-10">
        {sidebarLinks.map((link, i) => {
          const isActive = link.route === pathname
          return (
            <Link href={link.route} key={i} className={`flex items-center gap-3 hover:bg-blue-500 p-2 rounded-lg transition-all ${isActive ? 'bg-blue-500 ' : ''}`}>
              <Image
                src={link.imgURL}
                height={20}
                width={20}
                alt={link.label}
              />
              <h1 className="text-white">{link.label}</h1>
            </Link>
          );
        })}
      </div>
      <div className="flex items-center gap-3 absolute bottom-0 left-10">
        <Image src="/assets/logout.svg" height={20} width={20} alt="logout" />
        <SignOutButton />
      </div>
    </section>
  );
};

export default LeftSidebar;
