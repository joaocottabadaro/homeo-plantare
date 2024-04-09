import Navbar from "@/components/navbar";
import Image from 'next/image'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// Import Swiper React components


// Import Swiper styles



import Slider from "@/components/slider";

import { Suspense } from "react";
import Spinner from "@/components/spinner";
import Footer from "@/components/footer";
import ContactMe from "@/components/contactMe";
import Feedback from "@/components/feedback";
import Duvidas from "@/components/duvidas";
import Beneficios from "@/components/beneficios";
import { slidesData } from "@/lib/data";




export default function Home() {






  return (
    <main id="head" className="flex min-h-screen relative flex-col items-center justify-between px-4 xl:px-24 overflow-hidden">

      <Navbar />
      <section id="sobreNos" className="w-screen relative mt-[7rem] " >
        <Suspense fallback={<Spinner />}>
          <Slider slidesData={slidesData} />
        </Suspense>

      </section>


      <Beneficios />

      <Duvidas />
      <Feedback />

      <ContactMe />

      <Footer />
    </main >
  )
}
