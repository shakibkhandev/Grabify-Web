import React from "react";
import { FooterLinks } from "./Footer/FooterLinks";
import { HeaderMegaMenu } from "./Header/HeaderMegaMenu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-auto">
      <HeaderMegaMenu />
      <div className="h-[90%] w-[90%] m-auto">{children}</div>
      <FooterLinks />
    </div>
  );
}
