import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
async function Page() {
  const user = await currentUser();

  //if no logged in user redirect
  if (!user) return null;

  console.log(user.id)

  const userInfo = await fetchUser(user.id)

  return <h1 className="text-white text-heading4-medium">Create Thread</h1>;
}

export default Page;
