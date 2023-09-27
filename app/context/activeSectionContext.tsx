'use client'
import React, { ReactNode, createContext, useContext, useState } from 'react'

import { links } from '../../lib/data'


type SectionName = typeof links[number]['name'];
type ActiveSectionContextProviderProps = {
  children: ReactNode
};
type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>
};

export const ActiveSectionContext = createContext<ActiveSectionContextType | null>(null)

export default function ActiveSectionContextProvider({ children }: ActiveSectionContextProviderProps) {


  const [activeSection, setActiveSection] = useState<SectionName>("Sobre nós");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>{children}</ActiveSectionContext.Provider>
  )
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context == null) {
    throw new Error("Use ActiveSectionContext must be used  within provider")
  }

  return context
}