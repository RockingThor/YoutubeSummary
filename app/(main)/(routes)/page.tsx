"use client";
import { UserAuthForm } from "@/components/Authform";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }
  if (status != "authenticated") {
    return <UserAuthForm />;
  }
  return <div className="">Home</div>;
}
