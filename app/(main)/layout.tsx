import { NavigationButtons } from "@/components/navbar";
import { ModeToggle } from "@/components/providers/mode-toggle";
import { Home } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <nav className="p-4 flex justify-between items-center">
        <Home />
        <NavigationButtons />
        <ModeToggle />
      </nav>
      {children}
    </>
  );
};

export default Layout;
