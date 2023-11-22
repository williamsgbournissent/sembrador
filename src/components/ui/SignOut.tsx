"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import type { User } from "next-auth";

type Props = {
  user: User;
};

export default function SignOut({ user }: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const handleMenuClick = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return user?.name ? (
    <div
      className="inline-block relative cursor-pointer"
      onClick={handleMenuClick}
      ref={menuRef}
    >
      <span className="text-white hover:text-green-300 transition duration-300">
        {user?.name}
      </span>
      {isMenuOpen && (
        <div className="absolute top-10 right-0 bg-white p-2 shadow-lg rounded-md">
          <Link
            href="/api/auth/signout"
            className="text-black hover:text-green-300 transition duration-300"
          >
            Cerrar Sesion
          </Link>
        </div>
      )}
    </div>
  ) : null;
}
