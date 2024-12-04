'use client'

import { useState, useEffect } from 'react'
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'
import { FilterState } from '@/types'
import { INITIAL_FILTER_STATE, SHAPES } from '@/constants'
import { saveFiltersToLocalStorage, getFiltersFromLocalStorage } from '@/utils'

interface FilterSystemProps {
  onFilterChange: (filters: FilterState) => void
}

export function FilterSystem({ onFilterChange }: FilterSystemProps) {
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTER_STATE)

  useEffect(() => {
    const savedFilters = getFiltersFromLocalStorage()
    if (savedFilters) {
      setFilters(savedFilters)
      onFilterChange(savedFilters)
    }
  }, [onFilterChange])

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
    saveFiltersToLocalStorage(updatedFilters)
  }

  const clearFilter = (key: keyof FilterState) => {
    const updatedFilters = { ...filters, [key]: INITIAL_FILTER_STATE[key] }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
    saveFiltersToLocalStorage(updatedFilters)
  }

  return (
    <div className="space-y-4">
      <div>
        <Label>Price Range</Label>
        <Slider
          min={0}
          max={1000000}
          step={10000}
          value={filters.priceRange}
          onValueChange={(value) => handleFilterChange({ priceRange: value as [number, number] })}
          className="mt-2"
        />
        <div className="flex justify-between mt-1 text-sm text-muted-foreground">
          <span>{filters.priceRange[0]} IDR</span>
          <span>{filters.priceRange[1]} IDR</span>
        </div>
      </div>

      <div>
        <Label>Shape</Label>
        <div className="grid grid-cols-2 gap-2 mt-2">
          {SHAPES.map((shape) => (
            <div key={shape} className="flex items-center space-x-2">
              <Checkbox
                id={shape}
                checked={filters.shape.includes(shape)}
                onCheckedChange={(checked) => {
                  const newShapes = checked
                    ? [...filters.shape, shape]
                    : filters.shape.filter((s) => s !== shape)
                  handleFilterChange({ shape: newShapes })
                }}
              />
              <Label htmlFor={shape}>{shape}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Label>Minimum Rating</Label>
        <Slider
          min={0}
          max={5}
          step={1}
          value={[filters.rating]}
          onValueChange={(value) => handleFilterChange({ rating: value[0] })}
          className="mt-2"
        />
        <div className="mt-1 text-sm text-muted-foreground">
          {filters.rating} / 5
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {Object.entries(filters).map(([key, value]) => {
          if (Array.isArray(value) && value.length > 0) {
            return value.map((v) => (
              <Badge key={`${key}-${v}`} variant="secondary">
                {v}
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-1 h-auto p-0 text-muted-foreground"
                  onClick={() => clearFilter(key as keyof FilterState)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove</span>
                </Button>
              </Badge>
            ))
          }
          if (typeof value === 'number' && value > 0) {
            return (
              <Badge key={key} variant="secondary">
                {key}: {value}
                <Button
                  variant="ghost"
                  size="sm"
                  className="ml-1 h-auto p-0 text-muted-foreground"
                  onClick={() => clearFilter(key as keyof FilterState)}
                >
                  <X className="h-3 w-3" />
                  <span className="sr-only">Remove</span>
                </Button>
              </Badge>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}

