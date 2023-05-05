"use client";

import Portal from "@/components/Portal";
import { useRouter } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <Portal>
      <div
        onClick={() => router.back()}
        className="z-40 fixed inset-0 grid place-items-center bg-black bg-opacity-10"
      >
        <div className="shadow-lg rounded-md w-full max-w-md p-4 bg-white">
          {children}
        </div>
      </div>
    </Portal>
  );
}
