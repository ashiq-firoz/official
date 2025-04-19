"use client"

import { motion } from "framer-motion"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { Home, User, Brain, Rocket, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "About", icon: User, href: "/#about" },
  { name: "Skills", icon: Brain, href: "/#skills" },
  { name: "Projects", icon: Rocket, href: "/#projects" },
  { name: "Contact", icon: Mail, href: "/#contact" }
]

export function NavBar() {
  const pathname = usePathname()

  return (
    <motion.nav
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed left-4 top-1/2 -translate-y-1/2 z-50"
    >
      <div className="flex flex-col gap-4 p-4 rounded-full bg-background/80 backdrop-blur-sm border border-border">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative group flex items-center gap-2",
                "hover:text-primary transition-colors duration-200"
              )}
            >
              <Icon
                className={cn(
                  "w-6 h-6",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              />
              <span className="absolute left-full ml-2 px-2 py-1 rounded-md bg-popover text-popover-foreground text-sm opacity-0 -translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0">
                {item.name}
              </span>
            </Link>
          )
        })}
      </div>
    </motion.nav>
  )
}