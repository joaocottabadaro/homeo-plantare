"use client"
import { useActiveSectionContext } from "@/app/context/activeSectionContext";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SectionName } from "./types";



export function useSectionInView(sectionName:SectionName){



    const { timeOfLastClick, setTimeOfLastClick,setActiveSection } = useActiveSectionContext();
   

const ref = useRef(null);
    const isInView = useInView(ref, {amount:0.5})


    useEffect(() => {
        if (isInView && Date.now( )- timeOfLastClick > 1000) setActiveSection(sectionName)


    }, [isInView, setActiveSection, sectionName, timeOfLastClick])

    return {ref, isInView}
}