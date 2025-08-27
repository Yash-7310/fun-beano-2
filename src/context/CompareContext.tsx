'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { allPlayhouses } from '../app/listings/page';

interface Playhouse {
  id: number;
  name: string;
  location: string;
  city: string;
  rating: number;
  price: number;
  image: string;
  liveViewers: number;
  features: string[];
  ageRange: string;
  distance: number;
}

interface CompareContextType {
  compareList: Playhouse[];
  addToCompare: (playhouse: Playhouse) => void;
  removeFromCompare: (id: number) => void;
  isInCompare: (id: number) => boolean;
  getShareableLink: () => string;
}

const CompareContext = createContext<CompareContextType | undefined>(
  undefined
);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareList, setCompareList] = useState<Playhouse[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const ids = searchParams.get('ids');
    if (ids) {
      const idArray = ids.split(',').map(Number);
      const playhouses = allPlayhouses.filter(p => idArray.includes(p.id));
      setCompareList(playhouses);
    }
  }, [searchParams]);

  useEffect(() => {
    const ids = compareList.map(p => p.id).join(',');
    if (ids) {
      router.push(`/compare?ids=${ids}`);
    } else {
      router.push('/compare');
    }
  }, [compareList, router]);

  const addToCompare = (playhouse: Playhouse) => {
    setCompareList((prev) => (prev.length < 4 ? [...prev, playhouse] : prev));
  };

  const removeFromCompare = (id: number) => {
    setCompareList((prev) => prev.filter((item) => item.id !== id));
  };

  const isInCompare = (id: number) => {
    return compareList.some((item) => item.id === id);
  };

  const getShareableLink = () => {
    const ids = compareList.map(p => p.id).join(',');
    return `${window.location.origin}/compare?ids=${ids}`;
  };

  return (
    <CompareContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, isInCompare, getShareableLink }}
    >
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
