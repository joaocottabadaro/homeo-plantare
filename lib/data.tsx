import { Button } from '@/components/ui/button';
import Image from 'next/image'
import { SlideData } from './types';
export const links = [

  {
    name: "Sobre nós",
    hash: "#sobreNos",
  },
  {
    name: "Benefícios",
    hash: "#beneficios",
  },
  {
    name: "Duvidas",
    hash: "#duvidas",
  },
  {
    name: "Histórias",
    hash: "#feedback",
  },
] as const;


export const Slide1 = <div className="	 xl:w-1/2 flex h-full items-center md:items-start  text-center md:text-start flex-col flex-wrap w-full 2xl:w-5/12 justify-center gap-2  px-4 md:pl-20">
  <Image
    src={`/back1.png`}
    alt={"background1"}

    className=" z-0 object-cover  "

    fill

    priority
  /><h2 className=" z-10 text-primary-foreground eading-4  xl:leading-[77px] lg:text-2xl  lg:4xl xl:text-6xl font-bold leading-10">Sustentabilidade com a Homeoplantare</h2> <p className="z-10 text-primary-foreground text-shadow-md lg:text-2xl leading-7 tracking-wider">Solo Fértil é sinônimo de produtividade! Descubra como a Homeopatia pode ajudar seu negócio a expandir de forma natural</p></div>
export const Slide2 = <div className=" flex h-full items-center md:items-start text-center md:text-start flex-col flex-wrap w-full 2xl:w-5/12 justify-center  gap-6   px-4 md:pl-20">   <Image
  src={`/back2.png`}
  alt={"background2"}

  className="z-0 object-cover"

  fill

  priority
/><h2 className=" z-10 text-primary-foreground   xl:leading-[77px] lg:text-2xl   xl:text-4xl font-bold leading-10">Homeopatia para Grãos</h2></div>
export const Slide3 = <div className="  max-lg:w-full	flex h-full items-center text-center md:text-start md:items-start flex-col flex-wrap w-full 2xl:w-5/12 justify-center  gap-6   px-4 md:pl-20">   <Image
  src={`/back3.png`}
  alt={"background3"}

  className="z-0   object-cover"

  fill

  priority
/><h2 className=" z-10 text-primary-foreground   xl:leading-[77px] lg:text-2xl   xl:text-4xl font-bold leading-10">Aumente sua Produtividade </h2>< Button className="gap-2 z-10"><Image
  src={`/whatsapp.svg`}
  alt={`whatsapp`}

  width={25}
  height={25}
  priority
/> <a aria-label="entrar em contato pelo whatsapp" href="https://wa.me/5532984565731" target='_blank'> Converse conosco</a></Button></div>
const Slide4 = <div className=" lg:w-full	 flex h-full items-center text-center md:text-start md:items-start flex-col flex-wrap w-full 2xl:w-5/12 justify-center  gap-6   px-4 md:pl-20">  <Image
  src={`/back4.png`}
  alt={"background4"}

  className="z-0   object-cover"

  fill

  priority
/><h2 className="z-10 text-primary-foreground   xl:leading-[77px] lg:text-2xl  l xl:text-4xl font-bold leading-10">Conheça as Soluções da Homeoplantare</h2> <Button className="gap-2 z-10"> <Image
  src={`/whatsapp.svg`}
  alt={`whatsapp`}

  width={25}
  height={25}
  priority
/><a aria-label="entrar em contato pelo whatsapp" href="https://wa.me/5532984565731" target='_blank'> Converse conosco</a></Button></div>
export const Slide5 = <div className="flex h-full items-center text-center md:text-start md:items-start flex-col flex-wrap w-full 2xl:w-6/12  justify-center  gap-6  mt-6 2x:mt-32  px-4 md:pl-20">  <Image
  src={`/back5.png`}
  alt={"background5"}

  className="z-0   object-cover"

  fill

  priority
/><h2 className="z-10 text-primary-foreground  xl:leading-[77px] lg:text-2xl  m xl:text-4xl font-bold leading-10">Conheça os Benefícios da Homeopatia em</h2><h3 className="z-10 text-primary-foreground leading-4  xl:leading-[77px] max-lg:text-2xl  max-lg:text-2xl xl:text-4xl font-bold leading-10">PANCs (Plantas Alimentícias Não Convencionais)</h3><Button className="gap-2 z-10 "> <Image
  src={`/whatsapp.svg`}
  alt={`whatsapp`}
  className="z-10"
  width={25}
  height={25}
  priority
/><a aria-label="entrar em contato pelo whatsapp" target='_blank' href="https://wa.me/5532984565731"> Converse conosco</a></Button></div>


export const slidesData: SlideData[] = [
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
