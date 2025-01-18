"use client";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";

function Header() {
  const [sheetOpen, setSheetOpen] = useState<boolean>(false);
  const router = useRouter();
  const menuItems = [
    {
      label: "Home",
      path: "/",
      show: true,
    },
    {
      label: "Auth",
      path: "/auth",
      show: true,
    },
    {
      label: "Jobs",
      path: "/jobs",
      show: true,
    },
    {
      label: "Membership",
      path: "/membership",
      show: true,
    },
    {
      label: "Account",
      path: "/account",
      show: true,
    },
  ];
  function handleLinkTap(link: string) {
    setSheetOpen(false);
    router.push(link);
  }
  return (
    <div>
      <header className="flex h-16 w-full shrink-0 items-center">
        {/* mobile navbar */}
        <Sheet open={sheetOpen} onOpenChange={() => setSheetOpen(false)}>
          <Button className="lg:hidden" onClick={() => setSheetOpen(true)}>
            <AlignJustify className="h-6 w-6" />
            <span className="sr-only">Toggle Navigation Menu</span>
          </Button>
          <SheetContent side={"left"}>
            <Link className="mr-6 hidden lg:flex" href={"#"}>
              <h3>JOBSCO</h3>
            </Link>
            <div className="grid gap-2 py-6">
              {menuItems.map((menuItem, i) =>
                menuItem.show ? (
                  <div
                    key={i}
                    onClick={() => handleLinkTap(menuItem.path)}
                    className="cursor-pointer flex w-full items-center py-2 text-lg font-semibold"
                  >
                    {menuItem.label}
                  </div>
                ) : null
              )}
              <Button onClick={() => setSheetOpen(false)}>Sign In</Button>
            </div>
          </SheetContent>
        </Sheet>
        <Link className="hidden font-bold text-3xl lg:flex mr-6" href={"/"}>
          JOBSCO
        </Link>
        {/* large screen navbar */}
        <nav className="ml-auto hidden lg:flex gap-6 items-center">
          {menuItems.map((menuItem, i) =>
            menuItem.show ? (
              <Link
                key={i}
                href={menuItem.path}
                onClick={() => setSheetOpen(false)}
                className="group inline-flex h-9 w-max items-center rounded-md px-4 py-2 text-sm font-medium"
              >
                {menuItem.label}
              </Link>
            ) : null
          )}
        </nav>
      </header>
    </div>
  );
}

export default Header;
