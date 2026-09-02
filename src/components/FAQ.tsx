"use client"
import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-12 sm:py-16">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                <div className="lg:w-1/3">
                    <span className="inline-block font-subheading uppercase tracking-widest text-xs font-bold text-brand-yellow mb-2">
                        FAQ&apos;S
                    </span>
                    <SectionTitle>
                        <h2 className="my-2 !leading-[1.05] font-display text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-brand-white text-center lg:text-left">
                            Frequently Asked Questions
                        </h2>
                    </SectionTitle>
                    <p className="mt-4 text-brand-white/80 font-sans font-light text-center lg:text-left">
                        Ask us anything!
                    </p>
                    <a
                        href="mailto:help@finwise.com"
                        className="mt-4 block font-mono text-xl sm:text-2xl text-brand-yellow font-bold hover:text-brand-yellow-hover hover:underline text-center lg:text-left transition-colors"
                    >
                        help@finwise.com
                    </a>
                </div>

                <div className="w-full lg:w-2/3 mx-auto border-b border-brand-white/20">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-2">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full px-2 sm:px-4 py-5 text-left border-t border-brand-white/20 group cursor-pointer">
                                            <span className="font-subheading text-lg sm:text-xl uppercase tracking-wider text-brand-white font-bold group-hover:text-brand-yellow transition-colors">
                                                {faq.question}
                                            </span>
                                            <div className="w-8 h-8 rounded-full bg-brand-white/10 flex items-center justify-center text-brand-yellow shrink-0 ml-3 group-hover:bg-brand-yellow group-hover:text-brand-blue transition-colors">
                                                {open ? <BiMinus className="w-4 h-4" /> : <BiPlus className="w-4 h-4" />}
                                            </div>
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-2 sm:px-4 pb-6 text-brand-white/80 font-sans font-light leading-relaxed text-sm sm:text-base">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;