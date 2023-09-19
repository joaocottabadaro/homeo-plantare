// components/Navbar.js
import Image from 'next/image'

import Link from 'next/link';

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
                <Link href="/sobre">
                    Sobre Nós
                </Link>
                <Link href="/beneficios">
                    Benefícios
                </Link>
                <Link href="/duvidas">
                    Dúvidas Frequentes
                </Link>
                <Link href="/historias">
                    Histórias
                </Link>
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
