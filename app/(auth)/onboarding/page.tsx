import AccountProfile from "@/components/forms/AccountProfile";
import React from "react";
import { currentUser } from "@clerk/nextjs";

const page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = {
    _id: user?.id,
    // username: user?.username,
    // name: user?.firstName,
    // bio: '',
    // image: user.imageUrl,
  };

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: user.username || '',
    name: user.firstName || '',
    bio: "",
    image: user.imageUrl,
  };
  
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <div className="w-[90%] m-auto flex flex-col">
        <h1 className="text-white text-heading1-bold">Onboarding</h1>
        <p className="mt-3 text-base-regular text-light-2">Complete your profile now to use threads</p>

        <section className="mt-9 bg-[#121417] p-10">
          <AccountProfile user={userData} btnTitle="Continue" />
        </section>
      </div>
    </main>
  );
};

export default page;
