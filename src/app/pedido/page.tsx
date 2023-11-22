"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function OrderPage() {
  const session = useSession();
  console.log(session);
  // const session = await getServerSession(options);

  // if (!session) {
  //   redirect("/api/auth/signin?callbackUrl=/");
  // }

  return (
    <>
      <h1 className="p-96">hola</h1>
      <button onClick={() => signIn("google")}>signIn</button>
      <button onClick={() => signOut()}>signOut</button>
    </>
  );
}
