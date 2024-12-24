"use client";
import React, { createContext, useContext, useState } from "react";

type PreloaderContextType = {
  isPreloaderVisible: boolean;
  setIsPreloaderVisible: (value: boolean) => void;
};

const PreloaderContext = createContext<PreloaderContextType | undefined>(
  undefined
);

export function PreloaderProvider({ children }: { children: React.ReactNode }) {
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);
  return (
    <PreloaderContext.Provider
      value={{ isPreloaderVisible, setIsPreloaderVisible }}
    >
      {children}
    </PreloaderContext.Provider>
  );
}

export function usePreloader() {
  const context = useContext(PreloaderContext);
  if (!context)
    throw new Error("usePreloader must be used within PreloaderProvider");
  return context;
}
