import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { RHNavbar } from "./RHNavbar";
import { RHFooter } from "./RHFooter";

interface RHLayoutProps {
  children: ReactNode;
}

const pageTitles: Record<string, string> = {
  "/rhsoftware": "RH Software | Building the Future with AI & Smart Technology",
  "/rhsoftware/services": "Services | RH Software",
  "/rhsoftware/consultancy": "Consultancy | RH Software",
  "/rhsoftware/business": "Business | RH Software",
  "/rhsoftware/pricing": "Pricing | RH Software",
  "/rhsoftware/blog": "Blog | RH Software",
  "/rhsoftware/contact": "Contact | RH Software",
  "/rhsoftware/login": "Login | RH Software",
};

export function RHLayout({ children }: RHLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    document.title = pageTitles[location.pathname] || "RH Software | Building the Future with AI & Smart Technology";

    // Set meta description for SEO
    let meta = document.querySelector('meta[name="description"]');
    if (location.pathname.startsWith("/rhsoftware")) {
      const desc = "RH Software — We transform ideas into powerful digital solutions. AI, Web, App Development & Custom Software Engineering in Saharsa, Bihar.";
      if (meta) {
        meta.setAttribute("content", desc);
      } else {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        meta.setAttribute("content", desc);
        document.head.appendChild(meta);
      }
    }

    return () => {
      // Restore SIAT defaults when leaving RH pages
      if (!window.location.pathname.startsWith("/rhsoftware")) {
        document.title = "SIAT - Saharsa Institute of Advance Technology";
      }
    };
  }, [location.pathname]);

  return (
    <div className="rh-root min-h-screen bg-[#050508] text-white font-sans antialiased">
      <RHNavbar />
      <main>{children}</main>
      <RHFooter />
    </div>
  );
}
