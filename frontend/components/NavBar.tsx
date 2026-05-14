"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Logo from "./Logo"
import ActionButton from "./ActionButton"

export function NavBar() {
  return (
    <header className="flex items-center justify-between border-b-2 px-3 py-6">
      <Logo />
      <NavigationMenu className="px-8">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>For Buyers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem href="/" title="View Houses for Sale">
                  View houses listed for sale. You can check the price and its
                  features.
                </ListItem>
                <ListItem href="/buyer/estimator" title="House Price Estimator">
                  Try out our tool that allows you to estimate the price of your
                  dream house. It's free to use.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="hidden md:flex">
            <NavigationMenuTrigger>For Sellers</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <ListItem
                  href="/seller/manage-listings"
                  title="Manage my listings"
                >
                  Create listings for your house. It's an all-in-one place to
                  manage your listings.
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ActionButton variant="primary">Sign In</ActionButton>
    </header>
  )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium capitalize">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
