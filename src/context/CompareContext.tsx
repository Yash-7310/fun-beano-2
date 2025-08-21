'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

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
}

const CompareContext = createContext<CompareContextType | undefined>(
  undefined
);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareList, setCompareList] = useState<Playhouse[]>([]);

  const addToCompare = (playhouse: Playhouse) => {
    setCompareList((prev) => (prev.length < 4 ? [...prev, playhouse] : prev));
  };

  const removeFromCompare = (id: number) => {
    setCompareList((prev) => prev.filter((item) => item.id !== id));
  };

  const isInCompare = (id: number) => {
    return compareList.some((item) => item.id === id);
  };

  return (
    <CompareContext.Provider
      value={{ compareList, addToCompare, removeFromCompare, isInCompare }}
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
