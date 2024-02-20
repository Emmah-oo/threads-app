"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

const Bottombar = () => {
  const pathname = usePathname();

  const { userId } = useAuth();
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
    <section className="fixed bottom-0 w-full block md:hidden">
      <div className="flex gap-6 pb-2 align-center justify-center mt-10">
        {sidebarLinks.map((link, i) => {
          const isActive =
            link.route === pathname ||
            (pathname.includes(link.route) && link.route.length > 1);

          if (link.route === "/profile") link.route = `${link.route}/${userId}`;
          return (
            <Link
              href={link.route}
              key={i}
              className={`flex items-center gap-3 hover:bg-blue p-2 rounded-lg transition-all ${isActive ? "bg-blue" : ""}`}
            >
              <Image
                src={link.imgURL}
                height={30}
                width={30}
                alt={link.label}
              />
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
