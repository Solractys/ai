import { Fullscreen } from "lucide-react";
import Image from "next/image";
import React from "react";

const AuthenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-2 relative">
      <div className="">
        <Image
          alt="background"
          src="/AuthImg.jpeg"
          fill
          className="w-full h-full"
        />
      </div>
      <div>Login</div>
    </main>
  );
};
export default AuthenticationPage;
