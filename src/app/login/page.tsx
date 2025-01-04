import Image from "next/image";
import React from "react";

const AuthenticationPage = () => {
  return (
    <main className="h-screen grid grid-cols-2 relative">
      <div className="relative w-full flex flex-col bg-muted p-10 text-primary-foreground">
        <div className="w-full h-[30%] bg-gradient-to-t from-transparent to-black/50 absolute top-0 left-0 z-10">
          <div className="w-full h-[40%] bg-gradient-to-b from-transparent to-black/50 absolute bottom-0 left-0 z-10">
            <Image src="/AuthImg.jpeg" alt="login image" fill className="w-full h-full object-cover"/>
          </div>
        </div>
      </div>
    </main>
  );
};
export default AuthenticationPage;
