import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiPhone, HiEnvelope, HiMapPin } from 'react-icons/hi2';

import Container from './Container';
import { footerDetails } from '@/data/footer';
import { siteDetails } from '@/data/siteDetails';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-blue-deep border-t border-brand-white/20 text-brand-white pt-16 pb-12 relative z-20">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-white/15">
                    {/* Brand column */}
                    <div className="lg:col-span-4 space-y-4 text-left">
                        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow rounded-xl">
                            <div className="relative w-11 h-11 shrink-0 bg-brand-blue border border-brand-yellow rounded-xl p-1 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform shadow-glow-yellow">
                                <Image 
                                    src="/logo.webp" 
                                    alt="Logo Envíos DosRuedas" 
                                    width={44} 
                                    height={44} 
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <span className="font-display text-2xl lg:text-3xl tracking-tight leading-none uppercase flex items-center gap-1.5">
                                <span className="text-brand-white">Envíos</span>
                                <span className="text-brand-yellow">DosRuedas</span>
                            </span>
                        </Link>
                        <p className="font-sans text-sm text-brand-white/80 leading-relaxed max-w-sm">
                            {footerDetails.subheading}
                        </p>
                        {/* Redes */}
                        <div className="flex items-center gap-3 pt-2">
                            {footerDetails.socials.facebook && (
                                <a 
                                    href={footerDetails.socials.facebook} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    className="w-10 h-10 rounded-xl bg-brand-white/10 hover:bg-brand-yellow hover:text-brand-blue text-brand-white flex items-center justify-center transition-all duration-200"
                                >
                                    <FaFacebookF className="w-4 h-4" />
                                </a>
                            )}
                            {footerDetails.socials.instagram && (
                                <a 
                                    href={footerDetails.socials.instagram} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    className="w-10 h-10 rounded-xl bg-brand-white/10 hover:bg-brand-yellow hover:text-brand-blue text-brand-white flex items-center justify-center transition-all duration-200"
                                >
                                    <FaInstagram className="w-4 h-4" />
                                </a>
                            )}
                            {footerDetails.socials.whatsapp && (
                                <a 
                                    href={footerDetails.socials.whatsapp} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    aria-label="WhatsApp"
                                    className="w-10 h-10 rounded-xl bg-brand-white/10 hover:bg-social-whatsapp hover:text-white text-brand-white flex items-center justify-center transition-all duration-200"
                                >
                                    <FaWhatsapp className="w-4 h-4" />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Servicios column */}
                    <div className="lg:col-span-3 text-left space-y-3">
                        <h4 className="font-subheading uppercase tracking-wider text-brand-yellow text-base font-bold">
                            Servicios
                        </h4>
                        <ul className="space-y-2 text-sm font-sans">
                            {footerDetails.servicesLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.url} className="text-brand-white/80 hover:text-brand-yellow transition-colors block py-0.5">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Empresa column */}
                    <div className="lg:col-span-2 text-left space-y-3">
                        <h4 className="font-subheading uppercase tracking-wider text-brand-yellow text-base font-bold">
                            Empresa
                        </h4>
                        <ul className="space-y-2 text-sm font-sans">
                            {footerDetails.companyLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.url} className="text-brand-white/80 hover:text-brand-yellow transition-colors block py-0.5">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                            {footerDetails.legalLinks.map((link) => (
                                <li key={link.text}>
                                    <Link href={link.url} className="text-brand-white/60 hover:text-brand-yellow text-xs transition-colors block py-0.5">
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto directo column */}
                    <div className="lg:col-span-3 text-left space-y-3">
                        <h4 className="font-subheading uppercase tracking-wider text-brand-yellow text-base font-bold">
                            Contacto Directo
                        </h4>
                        <ul className="space-y-2.5 text-sm font-sans">
                            <li>
                                <a href={siteDetails.phoneCall} className="flex items-center gap-2.5 text-brand-white/90 hover:text-brand-yellow transition-colors font-mono font-medium">
                                    <HiPhone className="w-4 h-4 text-brand-yellow shrink-0" />
                                    <span>{footerDetails.phoneFormatted}</span>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${footerDetails.email}`} className="flex items-center gap-2.5 text-brand-white/90 hover:text-brand-yellow transition-colors">
                                    <HiEnvelope className="w-4 h-4 text-brand-yellow shrink-0" />
                                    <span>{footerDetails.email}</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2.5 text-brand-white/80">
                                <HiMapPin className="w-4 h-4 text-brand-yellow shrink-0" />
                                <span>{footerDetails.address}</span>
                            </li>
                        </ul>
                        <div className="pt-2">
                            <a 
                                href={siteDetails.whatsappUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow text-brand-blue font-subheading uppercase tracking-wider text-xs font-bold hover:bg-brand-yellow-hover hover:shadow-glow-yellow transition-all"
                            >
                                <FaWhatsapp className="text-base" />
                                <span>WhatsApp En Vivo</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-brand-white/60">
                    <p>
                        © {new Date().getFullYear()} Envíos DosRuedas · Todos los derechos reservados. Mar del Plata, Argentina.
                    </p>
                    <p className="font-mono text-[11px]">
                        Logística Urbana & E-Commerce
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;

