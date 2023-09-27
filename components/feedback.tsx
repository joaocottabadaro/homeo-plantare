


import Image from 'next/image'
import RatingCard from './ratingCard';
import { useActiveSectionContext } from '@/app/context/activeSectionContext';
import { useRef } from 'react';
import { useInView } from 'framer-motion';


const Feedback = () => {

    const { activeSection, setActiveSection } = useActiveSectionContext();

    const ref = useRef(null)
    const isInView = useInView(ref)

    if (isInView) setActiveSection("Histórias")

    return (


        <section ref={ref} id="feedback" className="flex  flex-col  w-full xl:w-3/4  my-11 scroll-mt-28" >
            <div className="relative mb-8">
                <Image
                    src={`/quoteBig.svg`}
                    alt={"quoteBig"}
                    className="absolute top-0 left-0 z-0"
                    width={100}
                    height={100}
                    priority
                />
                <div className="relative flex flex-col gap-1 md:w-[500px] ml-20  mt-10">
                    <h2 className="font-bold text-4xl relative z-2 ">As Histórias de Nossos Parceiros</h2>
                    <h3 className="font-normal text-md">Inspire-se com nossos parceiros!</h3>
                </div>
            </div>
            <div className=" w-full flex gap-5 h-[600px] mx-auto max-xl:flex-wrap justify-center ">
                <RatingCard title="Adriana David" feedback="Uso os produtos homeopáticos da homeoplantare há algum tempo, só posso dizer que tenho plantas mais vigorosas, com sabor mais apurado e com menos incidência de pragas. Super recomendo!”" subtitle="Agrônoma" />
                <RatingCard className="self-center" title="Eduardo Augusto da Fonseca" feedback="Muito bom, atingiu as espectativas”" subtitle="Produtor Agrícola" />

            </div>
        </section>
    );
};


export default Feedback;
