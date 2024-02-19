

"use client"
import Image from 'next/image'
import { Button } from './ui/button';
import { useSectionInView } from '@/lib/hooks';


const ContactMe = () => {





    return (

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
            <Button className="color-primary-foreground bg-tertiary m-auto gap-2" >  <Image
                src={`/whatsapp.svg`}
                alt={`whatsapp`}
        
                width={25}
                height={25}
                priority
             /> <a href="https://wa.me/5532984565731" target='_blank'> Entre em contato!</a></Button>
        </section>

    );
};


export default ContactMe;
