"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  Suspense,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { allPlayhouses } from "@/data/playhouses";

export interface Playhouse {
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

const CompareContext = createContext<CompareContextType | undefined>(undefined);

function CompareProviderContent({ children }: { children: ReactNode }) {
  const [compareList, setCompareList] = useState<Playhouse[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const ids = searchParams.get("ids");
    if (ids) {
      const idArray = ids.split(",").map(Number);
      const playhouses = allPlayhouses.filter((p) => idArray.includes(p.id));
      setCompareList(playhouses);
      sessionStorage.setItem("compareList", JSON.stringify(playhouses));
    } else {
      const storedCompareList = sessionStorage.getItem("compareList");
      if (storedCompareList) {
        setCompareList(JSON.parse(storedCompareList));
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const ids = compareList.map((p) => p.id).join(",");
    sessionStorage.setItem("compareList", JSON.stringify(compareList));
    if (
      typeof window !== "undefined" &&
      window.location.pathname === "/compare"
    ) {
      if (ids) {
        router.replace(`/compare?ids=${ids}`);
      } else {
        router.replace("/compare");
      }
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
    const ids = compareList.map((p) => p.id).join(",");
    if (typeof window !== "undefined") {
      return `${window.location.origin}/compare?ids=${ids}`;
    }
    return `/compare?ids=${ids}`;
  };

  return (
    <CompareContext.Provider
      value={{
        compareList,
        addToCompare,
        removeFromCompare,
        isInCompare,
        getShareableLink,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <CompareProviderContent>{children}</CompareProviderContent>
    </Suspense>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error("useCompare must be used within a CompareProvider");
  }
  return context;
};
