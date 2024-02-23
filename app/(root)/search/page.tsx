import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUsers } from "@/lib/actions/user.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import UserCard from "@/components/cards/UserCard";

const page = async () => {
  const user = await currentUser();

  //if no logged in user redirect
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  //redirect to oboarding if the user hasn't completed the onboarding process
  if (!userInfo?.onboarded) redirect("/onboarding");

  //fetch users
  const result = await fetchUsers({
    userId: user.id,
    searchString: "",
    pageNumber: 1,
    pageSize: 25,
  });
  return (
    <section>
      <h1 className="text-heading2-bold text-light-1 mb-10">Search</h1>

      <div className="mt-14 flex flex-col gap-9">
        {result.users.length === 0 ? (
          <p className="text-center !text-base-regular text-light-3">No Users</p>
        ) : (
          <>
            {result.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType="User"
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default page;
