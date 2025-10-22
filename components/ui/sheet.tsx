"use client"

import * as React from "react"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface SheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

const Sheet = ({ open, onOpenChange, children }: SheetProps) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/50 dark:bg-black/70 backdrop-blur-sm"
          onClick={() => onOpenChange(false)}
        />
      )}
      {children}
    </>
  )
}

interface SheetContentProps {
  children: React.ReactNode
  className?: string
  side?: "left" | "right"
}

const SheetContent = ({ children, className, side = "left" }: SheetContentProps) => {
  const sideStyles = side === "right" 
    ? "right-0 border-l" 
    : "left-0 border-r"
  
  return (
    <div
      className={cn(
        "fixed top-0 z-50 h-full w-72 bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 shadow-lg transform transition-transform duration-300",
        sideStyles,
        className
      )}
    >
      {children}
    </div>
  )
}

interface SheetHeaderProps {
  children: React.ReactNode
  className?: string
}

const SheetHeader = ({ children, className }: SheetHeaderProps) => {
  return (
    <div className={cn("flex flex-col space-y-2 p-6 border-b border-gray-200 dark:border-gray-800", className)}>
      {children}
    </div>
  )
}

interface SheetTitleProps {
  children: React.ReactNode
  className?: string
}

const SheetTitle = ({ children, className }: SheetTitleProps) => {
  return (
    <h2 className={cn("text-lg font-semibold text-gray-900 dark:text-gray-100", className)}>
      {children}
    </h2>
  )
}

interface SheetCloseProps {
  onClick: () => void
  className?: string
}

const SheetClose = ({ onClick, className }: SheetCloseProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 transition-opacity text-gray-700 dark:text-gray-300",
        className
      )}
    >
      <X className="h-5 w-5" />
      <span className="sr-only">Close</span>
    </button>
  )
}

export { Sheet, SheetContent, SheetHeader, SheetTitle, SheetClose }

