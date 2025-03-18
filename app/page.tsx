"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>Welcome to my todo app</div>
      <div>
        <Link
          href="/signup"
          className="border-2 p-2 rounded-md hover:bg-slate-300 transition duration-150 ease-in hover:text-black"
        >
          Click here for signup
        </Link>
        <div className="mt-4">
          Click for{" "}
          <button
            onClick={() => {
              router.push("/login");
            }}
            className="border-2 rounded-md p-2 hover:w-1/2 hover:text-black hover:bg-slate-200 transition duration-150 ease-linear hover:text-2xl"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
