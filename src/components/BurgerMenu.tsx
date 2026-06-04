'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

const NAV_LINKS = [
    { href: '#', label: 'Our Brand' },
    { href: '#', label: 'Products' },
    { href: '#', label: 'Contact' },
    { href: '#', label: 'Downloads' },
];

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (!isOpen) return;

        document.body.style.overflow = 'hidden';

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('keydown', handleEscape);
        return () => {
            document.body.style.overflow = '';
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    const close = () => setIsOpen(false);

    const popup =
        isOpen &&
        isMounted &&
        createPortal(
            <div
                className="burger_menu_popup fixed inset-0 z-[100] flex justify-end"
                role="dialog"
                aria-label="Navigation menu"
            >
                <button
                    type="button"
                    className="absolute inset-0 cursor-default bg-black/70"
                    aria-label="Close menu"
                    onClick={close}
                />

                <nav className="relative flex h-full w-[min(300px,85vw)] flex-col bg-[#333333] px-8 py-10 shadow-xl">
                    <button
                        type="button"
                        className="mb-10 ml-auto cursor-pointer"
                        aria-label="Close menu"
                        onClick={close}
                    >
                        <IoClose color="white" size={32} />
                    </button>

                    <ul className="flex flex-col gap-6">
                        {NAV_LINKS.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={link.href}
                                    className="header_nav_heading text-[1.5rem] text-white"
                                    onClick={close}
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>,
            document.body,
        );

    return (
        <div className="burger_menu relative lg:hidden">
            <button
                type="button"
                className="cursor-pointer"
                aria-label="Open menu"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <CiMenuFries color="white" size={33} />
            </button>

            {popup}
        </div>
    );
};

export default BurgerMenu;
