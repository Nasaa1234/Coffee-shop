import { useRouter } from "next/router";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: any }) => {
  const router = useRouter();
  return (
    <div>
      <div className="container">
        <Header />
        {children}
      </div>
      {router.asPath != "/login" && <Footer />}
    </div>
  );
};
