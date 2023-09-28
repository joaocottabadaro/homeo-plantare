'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react'

import { SectionName } from '@/lib/types';


type ActiveSectionContextProviderProps = {
  children: ReactNode
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {

  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  const [activeSection, setActiveSection] = useState<SectionName>("Sobre nós");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick }}>{children}</ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context == null) {
    throw new Error("Use ActiveSectionContext must be used  within provider")
  }

  return context
}