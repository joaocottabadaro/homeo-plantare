// components/Navbar.js
import Image from 'next/image'

import Link from 'next/link';
import ScrollLink from './scrollLink';

const Navbar = () => {
    return (
        <nav className="bg-primary-green p-4 flex justify-between w-full items-center">

            <Image
                src="/logoPlant.svg"
                alt="Logo"

                width={250}
                height={40}
                priority
            />


            <div className="flex justify-center space-x-10 m-auto">


                <ScrollLink className="btn" href="#beneficios">
                    Benefícios
                </ScrollLink>
                <ScrollLink className="btn" href="#contact-me">
                    Sobre Nós
                </ScrollLink>
                <ScrollLink className="btn" href="#duvidas-frequentes">
                    Dúvidas Frequentes
                </ScrollLink>
                <ScrollLink className="btn" href="#feedback">
                    Histórias
                </ScrollLink>


            </div>

            <div className="flex gap-2">      <Image
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
