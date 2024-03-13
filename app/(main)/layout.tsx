"use client";

import { ContactButtons } from "@/components/contact-buttons";
import { NavigationButtons } from "@/components/navbar";
import { ModeToggle } from "@/components/providers/mode-toggle";
import Image from "next/image";
import logo from "@/public/logo_infizest.png";
import Link from "next/link";
import { useUiObserver } from "@/hooks/useUiObserver";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { isNavActive } = useUiObserver();

  return (
    <main className="">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <nav
          className={cn(
            "py-4 px-8 flex justify-between items-center border-b border-zinc-300 dark:border-zinc-900",
            isNavActive
              ? "fixed w-full  top-0 left-0 z-50 bg-background shadow-lg shadow-slate-300 dark:shadow-black"
              : ""
          )}
        >
          <Link href="/">
            <Image width={60} height={60} src={logo} alt="logo" />
          </Link>
          <NavigationButtons />
          <ModeToggle />
        </nav>
      </motion.div>
      {children}
      <ContactButtons />
    </main>
  );
};

export default Layout;
