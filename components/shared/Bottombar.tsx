import Image from "next/image";
import Link from "next/link";
import React from "react";

const Bottombar = () => {
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
      <div className="flex gap-10 align-center justify-center mt-10">
        {sidebarLinks.map((link, i) => (
          <Link href={link.route} key={i} className="flex flex-col items-center gap-3">
            <Image src={link.imgURL} height={30} width={30} alt={link.label} />
            
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Bottombar;
