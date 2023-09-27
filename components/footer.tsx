


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

    );
};


export default Footer;
