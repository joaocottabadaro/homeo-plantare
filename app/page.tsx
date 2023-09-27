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

  const Slide1 = <div className=" w-full	 xl:w-1/2 flex h-full items-center md:items-start  text-center md:text-start flex-col flex-wrap w-full 2xl:w-5/12 justify-center gap-2  px-4 md:pl-20">
    <Image
      src={`/back1.png`}
      alt={"background1"}

      className="z-0   object-cover"

      fill

      priority
    /><h2 className=" z-10 text-primary-foreground eading-4  xl:leading-[77px] lg:text-2xl  lg:4xl xl:text-6xl font-bold leading-10">Sustentabilidade com a Homeoplantare</h2> <p className="z-10 text-primary-foreground text-shadow-md lg:text-2xl leading-7 tracking-wider">Solo Fértil é sinônimo de produtividade! Descubra como a Homeopatia pode ajudar seu negócio a expandir de forma natural</p> <Button className="z-10">Cadastre-se</Button></div>
  const Slide2 = <div className=" flex h-full items-center md:items-start text-center md:text-start flex-col flex-wrap w-full 2xl:w-5/12 justify-center  gap-6   px-4 md:pl-20">   <Image
    src={`/back2.png`}
    alt={"background2"}

    className="z-0   object-cover"

    fill

    priority
  /><h2 className=" z-10 text-primary-foreground leading-4  xl:leading-[77px] lg:text-2xl   xl:text-4xl font-bold leading-10">Homeopatia para Grãos</h2> <Button className="z-10">Cadastre-se</Button></div>
  const Slide3 = <div className="  max-lg:w-full	flex h-full items-center text-center md:text-start md:items-start flex-col flex-wrap w-full 2xl:w-5/12 justify-center  gap-6   px-4 md:pl-20">   <Image
    src={`/back3.png`}
    alt={"background3"}

    className="z-0   object-cover"

    fill

    priority
  /><h2 className=" z-10 text-primary-foreground leading-4  xl:leading-[77px] lg:text-2xl   xl:text-4xl font-bold leading-10">Aumente sua Produtividade </h2>< Button className="gap-2 z-10"><Image
    src={`/whatsapp.svg`}
    alt={`whatsapp`}

    width={25}
    height={25}
    priority
  /> Converse conosco</Button></div>
  const Slide4 = <div className=" lg:w-full	 flex h-full items-center text-center md:text-start md:items-start flex-col flex-wrap w-full 2xl:w-5/12 justify-center  gap-6   px-4 md:pl-20">  <Image
    src={`/back4.png`}
    alt={"background4"}

    className="z-0   object-cover"

    fill

    priority
  /><h2 className="z-10 text-primary-foreground leading-4  xl:leading-[77px] lg:text-2xl  l xl:text-4xl font-bold leading-10">Conheça as Soluções da Homeoplantare</h2> <Button className="gap-2 z-10"> <Image
    src={`/whatsapp.svg`}
    alt={`whatsapp`}

    width={25}
    height={25}
    priority
  />Converse conosco</Button></div>
  const Slide5 = <div className="flex h-full items-center text-center md:text-start md:items-start flex-col flex-wrap w-full 2xl:w-6/12  justify-center  gap-6  mt-6 2x:mt-32  px-4 md:pl-20">  <Image
    src={`/back5.png`}
    alt={"background5"}

    className="z-0   object-cover"

    fill

    priority
  /><h2 className="z-10 text-primary-foreground leading-4  xl:leading-[77px] lg:text-2xl  m xl:text-4xl font-bold leading-10">Conheça os Benefícios da Homeopatia em</h2><h3 className="z-10 text-primary-foreground leading-4  xl:leading-[77px] max-lg:text-2xl  max-lg:text-2xl xl:text-4xl font-bold leading-10">PANCs (Plantas Alimentícias Não Convencionais)</h3><Button className="gap-2 z-10 "> <Image
    src={`/whatsapp.svg`}
    alt={`whatsapp`}
    className="z-10"
    width={25}
    height={25}
    priority
  />Converse conosco</Button></div>


  const slidesData: SlideData[] = [
    {
      imageUrl: '/back3.png', // Substitua pela URL real da imagem
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
    <main className="flex min-h-screen relative flex-col items-center justify-between px-4 xl:px-24 overflow-hidden">
      <header className="z-40 fixed h-28 w-full bg-primary-foreground ">
        <Navbar />
      </header>
      <section id="home" className="w-screen relative mt-28">
        <Suspense fallback={<Spinner />}>
          <Slider slidesData={slidesData} />
        </Suspense>

      </section>

      <section id="beneficios" className="flex   max-sm:mt-[419px] flex-col w-full scroll-mt-28" >
        <h2 className="font-bold text-4xl md:text-6xl my-11 text-center lg:text-left">Conheça os Benefícios</h2>
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



      <section id="duvidas-frequentes" className="mt-10 w-11/12 scroll-mt-28">
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


      <section id="feedback" className="flex  flex-col  w-full xl:w-3/4  my-11 scroll-mt-28" >
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


      <section id="contact-me" className="flex  flex-col w-full   mb-11  mt-8 sm:mt-2  p-4 md:p-16 bg-lightPurple rounded-2xl scroll-mt-28  lxl:w-3/4	" >

        <div className="flex gap-5 mb-12  z-20 max-lg:flex-wrap">
          <div>
            <span className="block  w-3/4 h-2 bg-tertiary m-auto"></span>
            <p className="  text-center leading-9 max-lg:text-2xl">Na Homeoplantare, estamos comprometidos em revolucionar a agricultura por meio da homeopatia. Com experiência e paixão pelo cultivo sustentável, nossa equipe de especialistas está dedicada a oferecer soluções naturais e inovadoras que fortalecem as plantas, aumentam a produtividade e promovem um equilíbrio saudável nos ecossistemas agrícolas.
            </p>
          </div>

          <div>
            <p className=" text-center leading-9 max-lg:text-2xl">Nossa missão é capacitar agricultores, agrônomos e entusiastas da agricultura com conhecimentos valiosos e práticas eficazes. Acreditamos que a homeopatia é a chave para um futuro agrícola mais sustentável e saudável. Ao se juntar a nós, você faz parte desse movimento de transformação.</p>
            <span className="block  w-3/4 h-2 bg-tertiary m-auto"></span>
          </div>

        </div>

        <h2 className="text-3xl xl:text-6xl font-bold text-center my-8 mx-auto w-11/12 leading-12 md:leading-[88px] z-20 opacity-80">Vamos transformar seu ecossitema juntos!</h2>
        <Button className="color-primary-foreground bg-tertiary m-auto gap-2">  <Image
          src={`/whatsapp.svg`}
          alt={`whatsapp`}

          width={25}
          height={25}
          priority
        />Entre em contato!</Button>
      </section>
      <footer className="bg-secondary relative w-full text-secondary-foreground px-6 w-screen flex align-center justify-evenly min-h-[400px] flex-col md:flex-row py-1">

        <Image
          src={`/bigLeaf.svg`}
          alt={"bigLeaf"}
          className="absolute h-[200px] w-[200px]  -top-[320px]  min-[768px]:-top-[500px] left-0 z-10    min-[768px]:h-[300px] min-[768px]:w-[300px] min-[768px]:-top-[200px]"
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
