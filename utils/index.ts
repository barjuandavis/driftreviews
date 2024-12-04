import { FilterState } from '../types';

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
};

export const getRatingEmoji = (rating: number) => {
  return '💰'.repeat(rating);
};

export const saveFiltersToLocalStorage = (filters: FilterState) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('filterPreferences', JSON.stringify(filters));
  }
};

export const getFiltersFromLocalStorage = (): FilterState | null => {
  if (typeof window !== 'undefined') {
    const savedFilters = localStorage.getItem('filterPreferences');
    return savedFilters ? JSON.parse(savedFilters) : null;
  }
  return null;
};

