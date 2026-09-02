'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { 
    HiOutlineXMark, 
    HiBars3, 
    HiChevronDown, 
    HiBolt, 
    HiTag, 
    HiCube, 
    HiBuildingStorefront, 
    HiUserGroup, 
    HiQuestionMarkCircle, 
    HiShare, 
    HiPhone, 
    HiEnvelope,
    HiArrowRight,
    HiHome
} from 'react-icons/hi2';
import { FaWhatsapp } from 'react-icons/fa';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { servicesMenuItems, aboutMenuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [aboutOpen, setAboutOpen] = useState(false);

    const servicesRef = useRef<HTMLDivElement>(null);
    const aboutRef = useRef<HTMLDivElement>(null);

    // Close dropdowns on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
                setServicesOpen(false);
            }
            if (aboutRef.current && !aboutRef.current.contains(event.target as Node)) {
                setAboutOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const getServiceIcon = (name?: string) => {
        switch (name) {
            case 'lightning':
                return <HiBolt className="w-5 h-5 text-brand-yellow" />;
            case 'tag':
                return <HiTag className="w-5 h-5 text-brand-yellow" />;
            case 'package':
                return <HiCube className="w-5 h-5 text-brand-yellow" />;
            case 'warehouse':
                return <HiBuildingStorefront className="w-5 h-5 text-brand-yellow" />;
            default:
                return <HiBolt className="w-5 h-5 text-brand-yellow" />;
        }
    };

    const getAboutIcon = (name?: string) => {
        switch (name) {
            case 'badge':
                return <HiUserGroup className="w-5 h-5 text-brand-yellow" />;
            case 'question':
                return <HiQuestionMarkCircle className="w-5 h-5 text-brand-yellow" />;
            case 'share':
                return <HiShare className="w-5 h-5 text-brand-yellow" />;
            default:
                return <HiUserGroup className="w-5 h-5 text-brand-yellow" />;
        }
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-brand-blue/95 backdrop-blur-md py-3 border-b border-brand-white/20 shadow-xl transition-all duration-300">
            <Container>
                <div className="flex items-center justify-between gap-2 sm:gap-4">
                    {/* Logotipo Oficial */}
                    <Link href="/" className="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-xl min-w-0">
                        <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0 bg-brand-blue border border-brand-yellow rounded-xl p-1 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-glow-yellow">
                            <Image 
                                src="/logo.webp" 
                                alt="Logo Envíos DosRuedas" 
                                width={44} 
                                height={44} 
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <span className="font-display text-xl sm:text-2xl lg:text-3xl tracking-tight leading-none uppercase flex flex-row items-center gap-1 sm:gap-1.5 min-w-0 truncate">
                            <span className="text-brand-white">Envíos</span>
                            <span className="text-brand-yellow">DosRuedas</span>
                        </span>
                    </Link>

                    {/* Menú Desktop */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
                        <Link 
                            href="/" 
                            className="px-3.5 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 text-brand-white hover:text-brand-yellow hover:bg-brand-white/10"
                        >
                            <HiHome className="text-brand-yellow text-lg" />
                            Inicio
                        </Link>

                        {/* Dropdown Servicios */}
                        <div className="relative" ref={servicesRef}>
                            <button
                                type="button"
                                onClick={() => {
                                    setServicesOpen(!servicesOpen);
                                    setAboutOpen(false);
                                }}
                                className="px-3.5 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 text-brand-white hover:text-brand-yellow hover:bg-brand-white/10"
                                aria-expanded={servicesOpen}
                            >
                                <HiBolt className="text-brand-yellow text-lg" />
                                Servicios
                                <HiChevronDown className={`text-xs transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {servicesOpen && (
                                <div className="absolute top-full left-0 mt-2 w-72 bg-brand-blue border border-brand-white/25 rounded-2xl shadow-2xl p-2 z-50 origin-top">
                                    {servicesMenuItems.map((item) => (
                                        <Link
                                            key={item.url}
                                            href={item.url}
                                            onClick={() => setServicesOpen(false)}
                                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-white/15 transition-colors group"
                                        >
                                            <div className="p-2 rounded-lg bg-brand-white/15 group-hover:bg-brand-yellow group-hover:text-brand-blue text-brand-yellow transition-colors shrink-0">
                                                {getServiceIcon(item.iconName)}
                                            </div>
                                            <div className="text-left">
                                                <div className="font-subheading uppercase text-brand-white group-hover:text-brand-yellow text-sm tracking-wide">
                                                    {item.title}
                                                </div>
                                                <div className="font-sans text-xs text-brand-white/80">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Dropdown Nosotros */}
                        <div className="relative" ref={aboutRef}>
                            <button
                                type="button"
                                onClick={() => {
                                    setAboutOpen(!aboutOpen);
                                    setServicesOpen(false);
                                }}
                                className="px-3.5 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 text-brand-white hover:text-brand-yellow hover:bg-brand-white/10"
                                aria-expanded={aboutOpen}
                            >
                                <HiUserGroup className="text-brand-yellow text-lg" />
                                Nosotros
                                <HiChevronDown className={`text-xs transition-transform duration-200 ${aboutOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {aboutOpen && (
                                <div className="absolute top-full left-0 mt-2 w-64 bg-brand-blue border border-brand-white/25 rounded-2xl shadow-2xl p-2 z-50 origin-top">
                                    {aboutMenuItems.map((item) => (
                                        <Link
                                            key={item.url}
                                            href={item.url}
                                            onClick={() => setAboutOpen(false)}
                                            className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-brand-white/15 transition-colors group"
                                        >
                                            <div className="p-2 rounded-lg bg-brand-white/15 group-hover:bg-brand-yellow group-hover:text-brand-blue text-brand-yellow transition-colors shrink-0">
                                                {getAboutIcon(item.iconName)}
                                            </div>
                                            <div className="text-left">
                                                <div className="font-subheading uppercase text-brand-white group-hover:text-brand-yellow text-sm tracking-wide">
                                                    {item.title}
                                                </div>
                                                <div className="font-sans text-xs text-brand-white/80">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        <Link 
                            href="/contacto" 
                            className="px-3.5 py-2 text-sm font-subheading tracking-wider uppercase rounded-xl transition-all flex items-center gap-2 text-brand-white hover:text-brand-yellow hover:bg-brand-white/10"
                        >
                            <HiEnvelope className="text-brand-yellow text-lg" />
                            Contacto
                        </Link>
                    </nav>

                    {/* CTA Directo Desktop */}
                    <div className="hidden lg:flex items-center gap-4">
                        <a 
                            href={siteDetails.phoneCall} 
                            className="flex items-center gap-2 text-brand-white hover:text-brand-yellow transition-colors font-mono text-xs font-semibold"
                        >
                            <HiPhone className="text-brand-yellow text-base" />
                            {siteDetails.phoneFormatted}
                        </a>

                        <Link 
                            href="/cotizar/express" 
                            className="group inline-flex items-center gap-2.5 rounded-full font-subheading uppercase tracking-wider font-bold px-5 py-2.5 text-xs bg-brand-yellow text-brand-blue hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all duration-300"
                        >
                            <span>Cotizá tu envío</span>
                            <span className="w-6 h-6 rounded-full flex items-center justify-center bg-brand-blue/15 text-brand-blue group-hover:bg-brand-blue group-hover:text-brand-yellow transition-all">
                                <HiArrowRight className="text-xs" />
                            </span>
                        </Link>
                    </div>

                    {/* Botones Mobile */}
                    <div className="lg:hidden flex items-center gap-2">
                        <a 
                            href={siteDetails.phoneCall} 
                            className="p-2 rounded-xl bg-brand-white/15 text-brand-yellow hover:bg-brand-white/25 active:scale-95 transition-all" 
                            aria-label="Llamar por teléfono"
                        >
                            <HiPhone className="text-xl" />
                        </a>

                        <button 
                            type="button" 
                            onClick={toggleMenu} 
                            className="p-2 rounded-xl bg-brand-white/15 text-brand-white hover:text-brand-yellow active:scale-95 transition-all" 
                            aria-label="Abrir menú" 
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="text-2xl text-brand-yellow" />
                            ) : (
                                <HiBars3 className="text-2xl" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Menú Desplegable Mobile */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-2"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-100 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-2"
            >
                <div id="mobile-menu" className="lg:hidden max-w-7xl mx-auto px-4 pt-3 pb-4">
                    <div className="border-t border-brand-white/20 bg-brand-blue-deep mt-2 pt-3 rounded-2xl px-4 space-y-3 shadow-2xl pb-4">
                        <Link 
                            href="/" 
                            onClick={toggleMenu}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl font-subheading text-base uppercase text-brand-white hover:bg-brand-white/15"
                        >
                            <HiHome className="text-lg text-brand-yellow" />
                            Inicio
                        </Link>

                        <div className="space-y-1 pl-2 border-l border-brand-white/20 my-1">
                            <p className="font-subheading text-xs uppercase text-brand-yellow px-2 pt-1 tracking-wider font-bold">Servicios principales</p>
                            {servicesMenuItems.map((item) => (
                                <Link 
                                    key={item.url} 
                                    href={item.url} 
                                    onClick={toggleMenu}
                                    className="flex items-center gap-2 py-2 px-3 rounded-lg font-sans text-sm text-brand-white hover:bg-brand-white/15"
                                >
                                    {getServiceIcon(item.iconName)}
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="space-y-1 pl-2 border-l border-brand-white/20 my-1">
                            <p className="font-subheading text-xs uppercase text-brand-yellow px-2 pt-1 tracking-wider font-bold">Nosotros</p>
                            {aboutMenuItems.map((item) => (
                                <Link 
                                    key={item.url} 
                                    href={item.url} 
                                    onClick={toggleMenu}
                                    className="flex items-center gap-2 py-2 px-3 rounded-lg font-sans text-sm text-brand-white hover:bg-brand-white/15"
                                >
                                    {getAboutIcon(item.iconName)}
                                    <span>{item.title}</span>
                                </Link>
                            ))}
                        </div>

                        <Link 
                            href="/contacto" 
                            onClick={toggleMenu}
                            className="flex items-center gap-3 py-2.5 px-3 rounded-xl font-subheading text-sm uppercase text-brand-white hover:bg-brand-white/15"
                        >
                            <HiEnvelope className="text-brand-yellow text-lg" />
                            Contacto
                        </Link>

                        <div className="pt-2">
                            <a 
                                href={siteDetails.whatsappUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-yellow text-brand-blue font-subheading uppercase tracking-wider text-xs font-bold shadow-lg hover:bg-brand-yellow-hover transition-colors"
                            >
                                <FaWhatsapp className="text-xl" />
                                Pedir envío por WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </Transition>
        </header>
    );
};

export default Header;

