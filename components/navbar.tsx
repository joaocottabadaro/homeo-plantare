// components/Navbar.js
"use client";
import Image from "next/image";
import { motion, inView } from "framer-motion"

import { links } from "../lib/data";
import Link from "next/link";
import { useContext, useState } from "react";


import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "./ui/sheet";
import { ActiveSectionContext, useActiveSectionContext } from "@/app/context/activeSectionContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const { activeSection, setTimeOfLastClick, setActiveSection } = useActiveSectionContext();


    return (

        <header className="z-40 fixed h-28 w-full bg-primary-foreground ">
            <nav className="bg-primary-foreground max-[1300px]:px-6 py-4 flex justify-between w-full items-center  px-10 xl:px-24 h-28">
                <Image src="/logoPlant.svg" alt="Logo" width={250} height={40} priority />

                <div className="flex justify-center  lg:flex md:gap-5 lg:gap-10 m-auto font-semibold gap-3 max-lg:hidden">
                    {links.map((link) => (
                        <>
                            <Link className="btn" key={link.hash} href={link.hash} onClick={() => { setActiveSection(link.name); setTimeOfLastClick(Date.now()) }}>
                                {link.name}
                                {activeSection === link.name ? <motion.span initial={{ x: -100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    className={`block h-[2px] w-full my-2 bg-primary   transition: width 2s;
                                `}
                                    aria-hidden="true"
                                > </motion.span> : null
                                }
                            </Link >
                        </>
                    ))}
                </div>

                <a className=" gap-2 lg:flex font-semibold  hidden sm:flex" aria-label="entrar em contato pelo whatsapp" href="https://wa.me/5532984565731"  target="_blank">
                    {" "}
                    <Image src="/phone.svg" alt="Logo" width={20} height={20} priority />
                    +55 32 98456-5731
                </a>

                <Sheet open={isOpen} onOpenChange={toggleMenu}>
                    <SheetTrigger asChild>
                        <div className="text-gray-500 w-10 h-10 block lg:hidden focus:outline-none bg-white">
                            <span className="sr-only">Open main menu</span>
                            <div className="flex gap-1 w-10 h-10 flex-col justify-center items-center">
                                <span
                                    className={`block h-0.5 w-5  bg-black ransform transition duration-500 ease-in-out`}
                                    aria-hidden="true"
                                ></span>
                                <span
                                    className={`block h-0.5 w-5  bg-black ransform transition duration-500 ease-in-out`}
                                    aria-hidden="true"
                                ></span>
                                <span
                                    className={`block h-0.5 w-5  bg-black ransform transition duration-500 ease-in-out`}
                                    aria-hidden="true"
                                ></span>
                            </div>
                        </div>
                    </SheetTrigger>
                    <SheetContent>
                        <div
                            className="flex  h-full justify-start md:gap-5 lg:gap-10 m-auto font-semibold text-4xl gap-3 flex-col mt-5"
                            onClick={toggleMenu}
                        >

                            {links.map((link) => (

                                <Link key={link.hash} className="btn" href={link.hash}>
                                    {link.name}
                                    <span
                                        className={`block h-[1px] w-full my-2 bg-primary`}
                                        aria-hidden="true"
                                    ></span>
                                </Link>


                            ))}
    <a className=" gap-2  font-semibold text-base flex" aria-label="entrar em contato pelo whatsapp" href="https://wa.me/5532984565731"  target="_blank">
                    {" "}
                    <Image src="/phone.svg" alt="Logo" width={20} height={20} priority />
                    +55 32 98456-5731
                </a>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header >

    );
};

export default Navbar;
