"use client";

import {
  useState,
  useEffect,
  useCallback,
  ChangeEvent,
  FormEvent,
} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

type FormData = {
  fullname: string | undefined | null;
  email: string | undefined | null;
  direccion: string;
  departamento?: string;
  celular: number | "";
};

const UserForm = () => {
  const { data: session } = useSession();

  const router = useRouter();

  console.log(session);

  return <>hola</>;
};

export default UserForm;
