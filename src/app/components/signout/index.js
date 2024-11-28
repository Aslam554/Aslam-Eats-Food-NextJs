"use client";

import { logoutAction } from "@/actions";
import { useRouter } from "next/navigation";

function Signout() {
  const router = useRouter();
  async function handleLogout() {
    await logoutAction();
    router.push("/signin");
  }

  return <button onClick={handleLogout} className="bg-themepurple px-2 rounded-lg hover:transition-all hover:scale-[1.04] duration-100 hover:border-white hover:border-2 h ">Logout</button>;
}
export default Signout;
