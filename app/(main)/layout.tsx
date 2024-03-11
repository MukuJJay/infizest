import { ContactButtons } from "@/components/contact-buttons";
import { NavigationButtons } from "@/components/navbar";
import { ModeToggle } from "@/components/providers/mode-toggle";
import Image from "next/image";
import logo from "@/public/icononly_transparent_nobuffer.png";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="px-8">
      <nav className="py-4 flex justify-between items-center">
        <Link href="/">
          <Image width={60} height={60} src={logo} alt="logo" />
        </Link>
        <NavigationButtons />
        <ModeToggle />
      </nav>
      {children}
      <ContactButtons />
    </main>
  );
};

export default Layout;
