import Link from "next/link";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import SignOut from "./SignOut";
import type { User } from "next-auth";

export default async function Navbar() {
  const session = await getServerSession(authOptions);
  const user = session?.user as User;

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg fixed w-full z-20">
      <div className="container mx-auto flex flex-col items-center sm:flex-row sm:justify-between">
        <h1 className="text-2xl font-semibold text-center sm:text-left">
          <Link href="/">El Sembrador</Link>
        </h1>
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/pedido"
            className="text-lg hover:text-green-500 transition duration-300 ease-in-out"
          >
            Pedido
          </Link>
          {user ? (
            <SignOut user={user} />
          ) : (
            <Link href="/api/auth/signin">Iniciar Sesion</Link>
          )}
        </div>
      </div>
    </nav>
  );
}
