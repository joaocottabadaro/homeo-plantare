import Navbar from "@/components/navbar";
import Image from 'next/image'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
// Import Swiper React components


// Import Swiper styles

interface SlideData {
  imageUrl: string;
  component: React.ReactNode;
  // Outros campos necessários
}

import Slider from "@/components/slider";
import { Button } from "@/components/ui/button";




export default function Home() {

  const Slide1 = <div className="flex h-full items-start flex-col flex-wrap w-1/2 justify-start ml-12 mt-12"><p className="text-primary-foreground text-4xl font-bold leading-10">Sustentabilidade com a Homeoplantare</p> <p className="text-primary-foreground text-shadow-md text-lg leading-7 tracking-wider">Solo Fértil é sinônimo de produtividade! Descubra como a Homeopatia pode ajudar seu negócio a expandir de forma natural</p></div>
  const Slide2 = <div className="flex h-full items-start flex-col flex-wrap w-1/2 justify-start ml-12 mt-12"><p className="text-primary-foreground text-4xl font-bold leading-10">Homeopatia para Grãos</p> <Button>Cadastre-se</Button></div>
  const Slide3 = <div className="flex h-full items-start flex-col flex-wrap w-1/2 justify-start ml-12 mt-12"><p className="text-primary-foreground text-4xl font-bold leading-10">Aumente sua Produtividade </p><Button>Converse conosco</Button></div>
  const Slide4 = <div className="flex h-full items-start flex-col flex-wrap w-1/2 justify-start ml-12 mt-12"><p className="text-primary-foreground text-4xl font-bold leading-10">Conheça as Soluções da Homeoplantare</p> <Button>Converse conosco</Button></div>
  const Slide5 = <div className="flex h-full items-start flex-col flex-wrap w-1/2 justify-start ml-12 mt-12"><p className="text-primary-foreground text-4xl font-bold leading-10">Conheça os Benefícios da Homeopatia em</p><p>PANCs (Plantas Alimentícias Não Convencionais)</p><Button>Converse conosco</Button></div>


  const slidesData: SlideData[] = [
    {
      imageUrl: '/back1.png', // Substitua pela URL real da imagem
      component: Slide1, // Componente personalizado
    },
    {
      imageUrl: '/back2.png', // Substitua pela URL real da imagem
      component: Slide2, // Componente personalizado
    },
    {
      imageUrl: '/back3.png', // Substitua pela URL real da imagem
      component: Slide3, // Componente personalizado
    },
    {
      imageUrl: '/back4.png', // Substitua pela URL real da imagem
      component: Slide4, // Componente personalizado
    },
    {
      imageUrl: '/back5.png', // Substitua pela URL real da imagem
      component: Slide5, // Componente personalizado
    },
  ];


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 overflow-x-hidden">
      <Navbar />
      <div className="w-screen">
        <Slider slidesData={slidesData} />
      </div>
      <div className="container mx-auto p-4">




        <section id="duvidas-frequentes" className="mt-10">
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
                src="/leaf.svg"
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
                src="/leaf.svg"
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
                src="/leaf.svg"
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
                src="/leaf.svg"
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
                src="/leaf.svg"
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
      </div>


    </main>
  )
}
