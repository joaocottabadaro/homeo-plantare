// components/Navbar.js
"use client"
import Image from 'next/image'

import Link from 'next/link';
import { useState } from 'react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log("entrei")
    };

    return (
        <nav className="bg-primary-foreground max-[1300px]:px-6 py-4 flex justify-between w-full items-center  px-10 xl:px-24 h-28" >

            <Image
                src="/logoPlant.svg"
                alt="Logo"

                width={250}
                height={40}
                priority
            />


            <div className="flex justify-center hidden lg:flex md:gap-5 lg:gap-10 m-auto font-semibold gap-3">


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

            <div className="flex gap-2 hidden lg:flex font-semibold">      <Image
                src="/phone.svg"
                alt="Logo"

                width={20}
                height={20}
                priority
            />

                +55 32 98888-8888</div>

            <Sheet open={isOpen} onOpenChange={toggleMenu}>
                <SheetTrigger asChild>
                    <div
                        className="text-gray-500 w-10 h-10 block lg:hidden focus:outline-none bg-white"

                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="flex gap-1 w-10 h-10 flex-col justify-center items-center">
                            <span className={`block h-0.5 w-5  bg-black ransform transition duration-500 ease-in-out`}
                                aria-hidden="true"
                            ></span>
                            <span className={`block h-0.5 w-5  bg-black ransform transition duration-500 ease-in-out`}
                                aria-hidden="true"
                            ></span>
                            <span className={`block h-0.5 w-5  bg-black ransform transition duration-500 ease-in-out`}
                                aria-hidden="true"
                            ></span>

                        </div>
                    </div>
                </SheetTrigger>
                <SheetContent>

                    <div className="flex  h-full justify-start flex md:gap-5 lg:gap-10 m-auto font-semibold text-4xl gap-3 flex-col mt-5" onClick={toggleMenu}>


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

                </SheetContent>
            </Sheet>



        </nav>



    );
};

export default Navbar;
