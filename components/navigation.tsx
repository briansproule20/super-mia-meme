"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navigation() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Publications", href: "#publications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 dark:bg-gray-950/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/mrm favicon.png"
              alt="MRM"
              className="w-8 h-8 object-contain"
            />
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Mia R. Massimo
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setOpen(true)}
              className="hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Sheet Menu */}
      <Sheet open={open} onOpenChange={setOpen}>
        {open && (
          <SheetContent side="right">
            <SheetClose onClick={() => setOpen(false)} />
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-1 p-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 rounded-md transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </SheetContent>
        )}
      </Sheet>
    </>
  )
}

