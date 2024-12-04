'use client'

import { useState } from 'react'
import { Home, Search, SlidersHorizontal } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FilterSystem } from './FilterSystem'
import { FilterState } from '@/types'

interface BottomNavigationProps {
  onFilterChange: (filters: FilterState) => void
  activeFilters: number
}

export function BottomNavigation({ onFilterChange, activeFilters }: BottomNavigationProps) {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t md:hidden">
      <div className="container flex justify-around py-2">
        <Button variant="ghost" size="icon">
          <Home className="h-5 w-5" />
          <span className="sr-only">Home</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsSearchVisible(!isSearchVisible)}
        >
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <SlidersHorizontal className="h-5 w-5" />
              <span className="sr-only">Filters</span>
              {activeFilters > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-primary text-xs text-primary-foreground flex items-center justify-center">
                  {activeFilters}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <FilterSystem onFilterChange={onFilterChange} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

