import Link from 'next/link';
import React from 'react';
import { FaFingerprint } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    return (
        <footer className="bg-brand-blue-deep/95 border-t border-brand-white/20 text-brand-white pt-14 pb-10">
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                    <Link href="/" className="flex items-center gap-2.5 group focus:outline-none rounded-xl">
                        <div className="w-9 h-9 rounded-xl bg-brand-blue border border-brand-yellow p-2 flex items-center justify-center text-brand-yellow shadow-glow-yellow">
                            <FaFingerprint className="w-full h-full object-contain" />
                        </div>
                        <span className="font-display text-2xl uppercase tracking-tight text-brand-white flex items-center gap-1">
                            <span>Fin</span><span className="text-brand-yellow">wise</span>
                        </span>
                    </Link>
                    <p className="mt-4 text-sm text-brand-white/80 font-sans font-light leading-relaxed max-w-sm">
                        {footerDetails.subheading}
                    </p>
                </div>

                <div>
                    <h4 className="font-subheading text-base uppercase tracking-wider text-brand-yellow font-bold mb-4">
                        Quick Links
                    </h4>
                    <ul className="space-y-2.5">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="text-sm text-brand-white/80 hover:text-brand-yellow font-sans font-light transition-colors">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-subheading text-base uppercase tracking-wider text-brand-yellow font-bold mb-4">
                        Contact Us
                    </h4>

                    <div className="space-y-2 text-sm text-brand-white/80 font-sans font-light">
                        {footerDetails.email && (
                            <a href={`mailto:${footerDetails.email}`} className="block hover:text-brand-yellow transition-colors">
                                Email: <span className="font-mono text-brand-white">{footerDetails.email}</span>
                            </a>
                        )}

                        {footerDetails.telephone && (
                            <a href={`tel:${footerDetails.telephone}`} className="block hover:text-brand-yellow transition-colors">
                                Phone: <span className="font-mono text-brand-white">{footerDetails.telephone}</span>
                            </a>
                        )}
                    </div>

                    {footerDetails.socials && (
                        <div className="mt-5 flex items-center gap-3 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="w-9 h-9 rounded-xl bg-brand-white/10 hover:bg-brand-yellow hover:text-brand-blue text-brand-white flex items-center justify-center transition-all duration-200"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    );
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>

            <div className="mt-12 pt-8 border-t border-brand-white/10 text-center text-xs text-brand-white/60 px-4 space-y-1 font-mono">
                <p>Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.</p>
                <p className="text-[11px] text-brand-white/40">Made with &hearts; by <a href="https://nexilaunch.com" target="_blank" className="hover:text-brand-yellow">Nexi Launch</a> · UI kit by <a href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit" target="_blank" className="hover:text-brand-yellow">Youthmind</a></p>
            </div>
        </footer>
    );
};

export default Footer;
