"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Button } from "../ui/button";
import {
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  UserPlus,
  BarChart3,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { ThemeToggle } from "../ui/theme-toggle";

export function Header() {
  const { status } = useSession();
  const isAuthenticated = status === "authenticated";

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-on-surface/5">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        <div className="flex-1 flex items-center">
          <Link href={"/"} className="font-display text-4xl font-black tracking-tighter text-on-surface">
            Ziply.
          </Link>
        </div>

        {!isAuthenticated && (
          <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
            <Link href="/#features" className="font-label text-sm font-bold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">
              Features
            </Link>
            <Link href="/#process" className="font-label text-sm font-bold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest">
              Process
            </Link>
          </nav>
        )}

        <div className="flex-1 flex items-center justify-end">

          {/* Desktop nav actions */}
          <div className="hidden md:flex items-center gap-6">
            <ThemeToggle />

            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Button variant={"ghost"} className="font-bold flex items-center gap-2 rounded-full px-6" asChild>
                  <Link href={"/dashboard/stats"}>
                    <BarChart3 className="size-4" />
                    Analytics
                  </Link>
                </Button>
                <Button variant={"ghost"} className="font-bold flex items-center gap-2 rounded-full px-6" asChild>
                  <Link href={"/dashboard"}>
                    <LayoutDashboard className="size-4" />
                    Dashboard
                  </Link>
                </Button>
                <Button onClick={() => signOut()} variant="outline" className="rounded-full px-6 font-bold">
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link href={"/login"} className="font-label text-sm font-bold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest px-4">
                  Login
                </Link>
                <Button asChild className="bg-primary hover:bg-primary-container text-on-primary font-bold rounded-full px-8 h-12 editorial-shadow">
                  <Link href={"/register"}>
                    Create Account
                  </Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile nav */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"ghost"} size={"icon"} className="rounded-full">
                  <Menu className="size-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] border-none bg-background">
                <SheetHeader className="text-left mb-12">
                  <SheetTitle className="font-display text-4xl font-black tracking-tighter">Ziply.</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-8">
                  {!isAuthenticated && (
                    <>
                      <Link href="/#features" className="font-display text-3xl font-black hover:text-primary transition-colors">
                        Features
                      </Link>
                      <Link href="/#process" className="font-display text-3xl font-black hover:text-primary transition-colors">
                        Process
                      </Link>
                    </>
                  )}

                  <div className="h-[1px] w-full bg-on-surface/5 my-4"></div>

                  {isAuthenticated ? (
                    <>
                      <Link href="/dashboard" className="font-display text-3xl font-black hover:text-primary transition-colors flex items-center gap-4">
                        <LayoutDashboard className="w-8 h-8" />
                        Dashboard
                      </Link>
                      <Link href="/dashboard/stats" className="font-display text-3xl font-black hover:text-primary transition-colors flex items-center gap-4">
                        <BarChart3 className="w-8 h-8" />
                        Analytics
                      </Link>
                      <button onClick={() => signOut()} className="font-display text-3xl font-black text-left hover:text-primary transition-colors flex items-center gap-4">
                        <LogOut className="w-8 h-8" />
                        Logout
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" className="font-display text-3xl font-black hover:text-primary transition-colors flex items-center gap-4">
                        <LogIn className="w-8 h-8" />
                        Login
                      </Link>
                      <Link href="/register" className="font-display text-3xl font-black text-primary hover:text-primary/80 transition-colors flex items-center gap-4">
                        <UserPlus className="w-8 h-8" />
                        Register
                      </Link>
                    </>
                  )}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
