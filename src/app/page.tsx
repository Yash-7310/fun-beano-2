"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-black z-[99] fixed top-0 ">
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover"
        onEnded={() => router.replace("/home")}
      >
        <source src="/video/splash-screen.mp4" type="video/mp4"></source>
        {/* <source></source> */}
      </video>
    </div>
  );
}
