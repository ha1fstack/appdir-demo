"use client";

import Portal from "@/components/Portal";
import { useRouter } from "next/navigation";

export const dynamic = "force-static";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <Portal>
      <div
        onClick={() => router.back()}
        className="z-40 fixed inset-0 grid place-items-center bg-black bg-opacity-10"
      >
        {children}
      </div>
    </Portal>
  );
}
