'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFingerprint } from 'react-icons/fa';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-blue/95 backdrop-blur-md py-3.5 border-b border-brand-white/20 shadow-xl transition-all duration-300">
            <Container>
                <nav className="flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-xl">
                        <div className="w-10 h-10 rounded-xl bg-brand-blue border border-brand-yellow p-2 flex items-center justify-center text-brand-yellow shadow-glow-yellow group-hover:scale-105 transition-transform">
                            <FaFingerprint className="w-full h-full object-contain" />
                        </div>
                        <span className="font-display text-2xl uppercase tracking-tight text-brand-white flex items-center gap-1">
                            <span>Fin</span><span className="text-brand-yellow">wise</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-2">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link href={item.url} className="px-3.5 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl text-brand-white/90 hover:text-brand-yellow hover:bg-brand-white/10 transition-all duration-200">
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="pl-2">
                            <Link href="#cta" className="inline-flex items-center gap-2 rounded-full font-subheading uppercase tracking-wider font-bold px-6 py-2.5 text-xs bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300">
                                Download
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="p-2 rounded-xl bg-brand-white/15 text-brand-white hover:text-brand-yellow active:scale-95 transition-all"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-100 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
            >
                <div id="mobile-menu" className="md:hidden max-w-7xl mx-auto px-4 pt-3 pb-4">
                    <div className="bg-brand-blue-deep border border-brand-white/25 rounded-2xl p-4 shadow-2xl">
                        <ul className="flex flex-col space-y-2">
                            {menuItems.map(item => (
                                <li key={item.text}>
                                    <Link href={item.url} className="px-3 py-2 rounded-xl font-subheading text-base uppercase text-brand-white hover:text-brand-yellow hover:bg-brand-white/15 block transition-colors" onClick={toggleMenu}>
                                        {item.text}
                                    </Link>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link href="#cta" className="w-full text-center py-3 rounded-full bg-brand-yellow text-brand-blue font-subheading uppercase tracking-wider text-xs font-bold shadow-glow-yellow block hover:bg-brand-yellow-hover transition-colors" onClick={toggleMenu}>
                                    Get Started
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
