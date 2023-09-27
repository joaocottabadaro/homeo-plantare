
'use client'
import Image from 'next/image'
import RatingCard from './ratingCard';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { inView, useInView } from 'framer-motion';
import { useActiveSectionContext } from '@/app/context/activeSectionContext';
import { useRef } from 'react';


const Duvidas = () => {

    const { activeSection, setActiveSection } = useActiveSectionContext();

    const ref = useRef(null)
    const isInView = useInView(ref)

    if (isInView) setActiveSection("Duvidas")

    return (

        <section ref={ref} id="duvidas" className="mt-10 w-11/12 scroll-mt-28">
            <h2 className="font-bold text-4xl md:text-6xl my-11 text-center">Dúvidas Frequentes</h2>
            <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                    <AccordionTrigger>      <Image
                        src="/leaf.svg"
                        alt="Logo"
                        className=""
                        width={30}
                        height={58}
                        priority
                    /> O que é homeopatia em agricultura?</AccordionTrigger>
                    <AccordionContent>

                        A homeopatia em agricultura é uma abordagem natural e sustentável para o cultivo de plantas, que envolve o uso de substâncias em doses muito diluídas para fortalecer a resistência das plantas a doenças, pragas e condições adversas, promovendo assim um crescimento saudável e sustentável.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>  <Image
                        src="/leaf2.svg"
                        alt="Logo"
                        className=""
                        width={30}
                        height={58}
                        priority
                    />Como a homeopatia ajuda no controle de pragas?</AccordionTrigger>
                    <AccordionContent>
                        A homeopatia fortalece a resistência das plantas, tornando-as menos suscetíveis a pragas. Isso é alcançado através do estímulo do sistema imunológico das plantas, tornando-as mais capazes de se defender contra invasores indesejados.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>  <Image
                        src="/leaf2.svg"
                        alt="Logo"
                        className=""
                        width={30}
                        height={58}
                        priority
                    />É seguro utilizar a homeopatia em agricultura?</AccordionTrigger>
                    <AccordionContent>
                        Sim, a homeopatia em agricultura é segura e não deixa resíduos químicos nos alimentos. As doses são altamente diluídas, o que minimiza qualquer risco de toxicidade.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger>  <Image
                        src="/leaf.svg"
                        alt="Logo"
                        className=""
                        width={30}
                        height={58}
                        priority
                    />Como posso aplicar a homeopatia na minha plantação?</AccordionTrigger>
                    <AccordionContent>
                        A aplicação da homeopatia envolve a diluição das substâncias homeopáticas em água. Pode ser usada no sulco de plantio, através de preparo em betoneira e através de pulverização. Consulte nosso time de especialistas após seu cadastro para obter orientações específicas sobre a dosagem e a aplicação.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger >  <Image
                        src="/grain.svg"
                        alt="Logo"
                        className=""
                        width={30}
                        height={58}
                        priority
                    />A homeopatia é eficaz para todos os tipos de culturas?</AccordionTrigger>
                    <AccordionContent >
                        A homeopatia pode ser aplicada a uma ampla variedade de culturas, incluindo frutas, vegetais e plantas ornamentais. No entanto, é importante considerar as necessidades específicas de cada cultura e buscar orientação para otimizar os resultados.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                    <AccordionTrigger>  <Image
                        src="/earth.svg"
                        alt="Logo"
                        className=""
                        width={30}
                        height={58}
                        priority
                    />A homeopatia substitui completamente os agroquímicos?</AccordionTrigger>
                    <AccordionContent>
                        A homeopatia pode reduzir a dependência de agroquímicos, mas em alguns casos pode ser usada em combinação com práticas convencionais para obter os melhores resultados. A abordagem ideal varia de acordo com as necessidades e metas individuais.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                    <AccordionTrigger>  <Image
                        src="/health.svg"
                        alt="Logo"
                        className=""
                        width={30}
                        height={58}
                        priority
                    />Quais são os primeiros passos para começar a usar a homeopatia na minha lavoura?</AccordionTrigger>
                    <AccordionContent>
                        Comece cadastrando-se e adquirindo os produtos da Homeoplantare adequados para o seu objetivo. Consulte nosso time de profissionais experientes na área para orientações sobre dosagem, aplicação e integração da homeopatia em suas práticas.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </section>


    );
};


export default Duvidas;
