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
import BenefitCard from "@/components/benefitCard";
import RatingCard from "@/components/ratingCard";
import { Suspense } from "react";
import Spinner from "@/components/spinner";




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
    <main className="flex min-h-screen relative flex-col items-center justify-between px-24 overflow-hidden">

      <Navbar />
      <div className="w-screen relative">
        <Suspense fallback={<Spinner />}>
          <Slider slidesData={slidesData} />
        </Suspense>

      </div>

      <section id="beneficios" className="flex  flex-col w-full" >
        <h2 className="font-bold text-6xl my-11">Conheça os Benefícios</h2>
        <div className="grid grid-cols-beneficios	my-6 w-full content-center	gap-x-44 gap-y-16 justify-items-center	">
          <BenefitCard title="Cultivo Natural e Sustentável" description="Promova um cultivo livre de agrotóxicos e produtos químicos nocivos ao meio ambiente e à saúde." logoName="beneficio1" />
          <BenefitCard title="Resistência a Pragas e Doenças" description="Fortaleça as plantas e melhore sua resistência natural a pragas, doenças e condições adversas." logoName="beneficio2" />
          <BenefitCard title="Aprendizado Contínuo" description="Mantenha-se atualizado com as últimas tendências e pesquisas na agricultura sustentável." logoName="beneficio3" />
          <BenefitCard title="Redução de Custos" description="Economize recursos ao minimizar a necessidade de insumos caros, como fertilizantes e pesticidas" logoName="beneficio4" />
          <BenefitCard title="Aumento da Produtividade" description="Potencialize o rendimento da colheita com plantas mais saudáveis e vigorosas.
" logoName="beneficio5" />
          <BenefitCard title="Soluções Personalizadas" description="Aproveite abordagens homeopáticas adaptadas às necessidades específicas de diferentes culturas e climas." logoName="beneficio6" />

        </div>
      </section>



      <section id="duvidas-frequentes" className="mt-10 w-11/12">
        <h2 className="font-bold text-6xl my-11 text-center">Dúvidas Frequentes</h2>
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


      <section id="feedback" className="flex  flex-col w-3/4  my-11" >
        <div className="relative mb-8">
          <Image
            src={`/quoteBig.svg`}
            alt={"quoteBig"}
            className="absolute top-0 left-0 z-0"
            width={100}
            height={100}
            priority
          />
          <div className="relative flex flex-col gap-1 w-[500px] ml-20  mt-10">
            <h2 className="font-bold text-4xl relative z-10 ">As Histórias de Nossos Parceiros</h2>
            <h3 className="font-normal text-md">Inspire-se com nossos parceiros!</h3>
          </div>
        </div>
        <div className=" w-3/4 flex gap-5 h-[600px] mx-auto">
          <RatingCard title="Adriana David" feedback="Uso os produtos homeopáticos da homeoplantare há algum tempo, só posso dizer que tenho plantas mais vigorosas, com sabor mais apurado e com menos incidência de pragas. Super recomendo!”" subtitle="Agrônoma" />
          <RatingCard className="self-center" title="Eduardo Augusto da Fonseca" feedback="Muito bom, atingiu as espectativas”" subtitle="Produtor Agrícola" />

        </div>
      </section>


      <section id="contact-me" className="flex  flex-col w-3/4  mb-11 p-16 bg-lightPurple rounded-2xl	" >

        <div className="flex gap-5 mb-12">
          <div>
            <span className="block  w-3/4 h-2 bg-tertiary m-auto"></span>
            <p className="text-center leading-9 text-lg">Na Homeoplantare, estamos comprometidos em revolucionar a agricultura por meio da homeopatia. Com experiência e paixão pelo cultivo sustentável, nossa equipe de especialistas está dedicada a oferecer soluções naturais e inovadoras que fortalecem as plantas, aumentam a produtividade e promovem um equilíbrio saudável nos ecossistemas agrícolas.
            </p>
          </div>

          <div>
            <p className="text-center font-lg font-normal leading-9 text-lg ">Nossa missão é capacitar agricultores, agrônomos e entusiastas da agricultura com conhecimentos valiosos e práticas eficazes. Acreditamos que a homeopatia é a chave para um futuro agrícola mais sustentável e saudável. Ao se juntar a nós, você faz parte desse movimento de transformação.</p>
            <span className="block  w-3/4 h-2 bg-tertiary m-auto"></span>
          </div>

        </div>

        <h2 className="text-6xl font-bold text-center my-8 mx-auto w-11/12 leading-[88px] opacity-80">Vamos transformar seu ecossitema juntos!</h2>
        <Button className="color-primary-foreground bg-tertiary m-auto gap-2">  <Image
          src={`/whatsapp.svg`}
          alt={`whatsapp`}

          width={25}
          height={25}
          priority
        />Entre em contato!</Button>
      </section>
      <footer className="bg-secondary relative w-full text-secondary-foreground w-screen flex align-center justify-evenly min-h-[400px]">

        <Image
          src={`/bigLeaf.svg`}
          alt={"bigLeaf"}
          className="absolute -top-[500px] left-0 z-10"
          width={450}
          height={450}
          priority
        />
        <div className="flex align-center justify-center flex-col gap-4">

          <Image
            src={`/logoFooter.svg`}
            alt={`logoFooter`}
            width={270}
            height={80}
            priority
          />
          <p>Endereço:</p>
          <p>Telefone:</p>
          <p>E-mail:</p>
          <p>© 2023 Homeoplantare. Todos os direitos reservados</p></div>
        <div className="flex align-center justify-center flex-col gap-6">


          <p>Sobre Nós</p>
          <p className="font-light">Perguntas Frequentes</p>
          <p className="font-light">Política de Privacidade</p>
          <p className="font-light">Termos de Uso</p></div>

        <div className="flex align-center justify-center flex-col gap-6">
          <p>Siga-nos em nossas redes sociais!</p>
          <div className="flex align-center justify-center flex-row gap-8">
            <Image
              src={`/instagram.svg`}
              alt={`instagram`}
              width={58}
              height={58}
              priority
            />

            <Image
              src={`/facebook.svg`}
              alt={`facebook`}
              width={58}
              height={58}
              priority
            />

            <Image
              src={`/whatsappColor.svg`}
              alt={`whatsappColor`}
              width={58}
              height={58}
              priority
            />
          </div>
        </div>


      </footer>
    </main >
  )
}
