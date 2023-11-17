"use client";
import { UserAuthForm } from "@/components/Authform";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }
  if (status != "authenticated") {
    router.push("/login");
  }
  return <div className="">Home</div>;
}
