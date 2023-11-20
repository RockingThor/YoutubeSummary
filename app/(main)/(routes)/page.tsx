"use client";
import { UserAuthForm } from "@/components/Authform";
import { authState } from "@/recoil/atoms/auth";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [auth, setAuth] = useRecoilState(authState);
  setAuth(session);
  if (status === "loading") {
    return null;
  }
  if (status != "authenticated") {
    router.push("/login");
  }
  return <div className="">Home</div>;
}
