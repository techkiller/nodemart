'use client';

import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { Menu as MenuIcon, ShoppingCart, UserIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      {/* Desktop nav */}
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart /> Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon /> Sign In
          </Link>
        </Button>
      </nav>

      {/* Mobile nav */}
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger className="align-middle">
            <MenuIcon className="w-7 h-7" />
          </SheetTrigger>

          <SheetContent
            side="right"
            className="flex flex-col items-start p-4 bg-background"
            
          >
            <div className="flex items-center justify-between w-full mb-4">
              <SheetTitle className="text-lg font-semibold">Menu</SheetTitle>
            </div>

            <ModeToggle />
            <Button asChild variant="ghost" className="w-full justify-start">
              <Link href="/cart">
                <ShoppingCart className="mr-2" /> Cart
              </Link>
            </Button>
            <Button asChild className="w-full justify-start">
              <Link href="/sign-in">
                <UserIcon className="mr-2" /> Sign In
              </Link>
            </Button>

            <SheetDescription className="mt-4 text-sm text-muted-foreground">
              Thanks for visiting NodeMart!
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;