import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSidebar = () => {
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
    <section className="max-w-[560px] pb-[60px] relative min-h-[90vh] hidden md:block">
      <div className="flex flex-col gap-10 justify-center ml-10 mt-10">
        {sidebarLinks.map((link, i) => (
          <Link href={link.route} key={i} className="flex items-center gap-3">
            <Image src={link.imgURL} height={30} width={30} alt={link.label} />
            <h1>{link.label}</h1>
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3 absolute bottom-0 ml-10">
        <Image src="/assets/logout.svg" height={20} width={20} alt="logout" />
        <h1>Logout</h1>
      </div>
    </section>
  );
};

export default LeftSidebar;
