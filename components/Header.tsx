'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Search, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CATEGORIES } from '@/constants'

export function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block">
              Gaming Peripherals Review
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="https://twitter.com">Twitter</Link>
            <Link href="https://instagram.com">Instagram</Link>
            <Link href="https://tiktok.com">TikTok</Link>
          </nav>
        </div>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsSearchVisible(!isSearchVisible)}
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className={`flex-1 md:flex ${isSearchVisible ? 'flex' : 'hidden'}`}>
            <Input
              placeholder="Search products..."
              className="h-9 md:w-[300px] lg:w-[400px]"
            />
          </div>
          <nav className="flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <nav className="flex flex-col space-y-4">
                  <Link href="https://twitter.com">Twitter</Link>
                  <Link href="https://instagram.com">Instagram</Link>
                  <Link href="https://tiktok.com">TikTok</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
      <div className="container mt-2">
        <Tabs defaultValue={CATEGORIES[0]} className="w-full">
          <TabsList className="w-full justify-start">
            {CATEGORIES.map((category) => (
              <TabsTrigger key={category} value={category} className="flex-1">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </header>
  )
}

