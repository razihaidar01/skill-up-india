import { ReactNode } from "react";
import { RHNavbar } from "./RHNavbar";
import { RHFooter } from "./RHFooter";

interface RHLayoutProps {
  children: ReactNode;
}

export function RHLayout({ children }: RHLayoutProps) {
  return (
    <div className="rh-root min-h-screen bg-black text-white font-sans antialiased">
      <RHNavbar />
      <main>{children}</main>
      <RHFooter />
    </div>
  );
}
