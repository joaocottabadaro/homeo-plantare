


import Image from 'next/image'


const Footer = () => {




    return (

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
                <p>Endereço: Rua Mister Moore 18, 301</p>
                <p>Telefone: +5532984565731</p>
                <p>E-mail: <a href='mailto:homeoplantareagro@gmail.com'>homeoplantareagro@gmail.com</a></p>
                <p>© {new Date().getFullYear() } Homeoplantare. Todos os direitos reservados</p></div>
            <div className="flex align-center justify-center flex-col gap-6">


                <a href='#sobreNos'>Sobre Nós</a>
                <a href='#duvidas' className="font-light">Perguntas Frequentes</a>
                </div>

            <div className="flex align-center justify-center flex-col gap-6">
            <p>Siga-nos em nossas redes sociais!</p>
                <div className="flex align-center justify-center flex-row gap-8">
                <a href="https://www.instagram.com/homeoplantare/" target='_blank' >
                <Image
                        src={`/instagram.svg`}
                        alt={`instagram`}
                        width={58}
                        height={58}
                        priority
                    />
                    </a>

                    <a href="https://wa.me/5532984565731" target='_blank' >
                        <Image
                            src={`/whatsappColor.svg`}
                            alt={`whatsappColor`}
                            width={58}
                            height={58}
                            priority

                        />
                    </a>
                </div>
            </div>


        </footer>

    );
};


export default Footer;
