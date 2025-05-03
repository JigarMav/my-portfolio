import { ReactNode } from "react";
import { Sidebar } from "./Sidebar.tsx";
import { Footer } from "./Footer.tsx";
// import { DarkModeProvider } from "../../context/DarkModeContext";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen dark:bg-gray-900 bg-primary-50">
      <Sidebar />
      <main className="flex-1">
        <div className="dark:text-white dark:bg-gray-900 bg-primary-50">{children}</div>
        <Footer />
      </main>
    </div>
  );
};
