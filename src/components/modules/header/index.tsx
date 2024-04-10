"use client";

import { Fragment, useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetClose,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const navigation = {
  pages: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Catalog",
      href: "/catalog",
    },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const isActive = (href: string) => pathName === href;

  return (
    <div className="bg-transparent -mb-24 relative top-0 left-0 header">
      {/* Mobile menu */}
      <Sheet onOpenChange={(open) => setOpen(open)} open={open}>
        <SheetContent side={"left"} className="bg-black">
          <div className=" py-6 px-4 space-y-6">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flow-root">
                <Link
                  href={page.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "-m-2 p-2 block font-medium text-white",
                    isActive(page.href) ? "text-blue-400 underline" : ""
                  )}
                >
                  {page.name}
                </Link>
              </div>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      <header className="relative z-10">
        <nav aria-label="Top">
          {/* Main navigation */}
          <div className="bg-transparent">
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
              <div className="border-b border-gray-500">
                <div className="h-24 flex items-center justify-between">
                  <div className="hidden lg:flex lg:items-center ">
                    <Link href="/" className="bg-slate-100 rounded-full">
                      <span className="sr-only">VanThinhSeafoods</span>
                      <Image
                        className="h-14  w-auto"
                        src={`/vanthinh-logo.webp`}
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </Link>
                  </div>

                  {/* <Link href="/" className="lg:hidden bg-white rounded-full">
                    <span className="sr-only">VanThinhSeafoods</span>
                    <Image
                      width={100}
                      height={100}
                      src={`/vanthinh-logo.webp`}
                      alt="logo"
                      className="h-14 w-auto"
                    />
                  </Link> */}

                  <div className="flex-1 flex items-center justify-center">
                    <div className="hidden lg:block">
                      <div className="flex space-x-5 ">
                        {navigation.pages.map((page) => (
                          <div key={page.name} className="flow-root">
                            <Link
                              href={page.href}
                              onClick={() => setOpen(false)}
                              className={cn(
                                "-m-2 p-2 block font-medium text-white",
                                isActive(page.href)
                                  ? "text-blue-400 underline"
                                  : ""
                              )}
                            >
                              {page.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button
                    asChild
                    onClick={() => setOpen(!open)}
                    variant="ghost"
                    size="icon"
                    className=" md:hidden"
                  >
                    {open ? <XIcon /> : <MenuIcon />}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
