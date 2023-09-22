// components/Navbar.js
import Image from 'next/image'

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-primary-foreground max-[1300px]:px-6 py-4 flex justify-between w-full items-center  px-24 h-28" >

            <Image
                src="/logoPlant.svg"
                alt="Logo"

                width={250}
                height={40}
                priority
            />


            <div className="flex justify-center md:gap-5 lg:gap-10 m-auto font-semibold gap-3">


                <Link className="btn" href="#beneficios">
                    Benefícios
                </Link>
                <Link className="btn" href="#contact-me">
                    Sobre Nós
                </Link>
                <Link className="btn" href="#duvidas-frequentes">
                    Dúvidas Frequentes
                </Link>
                <Link className="btn" href="#feedback">
                    Histórias
                </Link>


            </div>

            <div className="flex gap-2 font-semibold">      <Image
                src="/phone.svg"
                alt="Logo"

                width={20}
                height={20}
                priority
            />

                +55 32 98888-8888</div>
        </nav>
    );
};

export default Navbar;
