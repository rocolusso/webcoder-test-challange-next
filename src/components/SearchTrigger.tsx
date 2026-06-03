'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import searchLogo from '../../public/img/search.svg';

const SearchTrigger = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (!query.trim()) return;

        setIsOpen(false);
    };

    return (
        <div className="search_input_trigger relative" ref={containerRef}>
            <button
                type="button"
                className="cursor-pointer"
                aria-label="Open search"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <Image
                    src={searchLogo}
                    alt="search-logo"
                    width={35}
                    height={35}
                />
            </button>

            {isOpen && (
                <div
                    className="search_popup absolute right-0 top-full z-50 mt-3 w-[min(320px,calc(100vw-2rem))] rounded-md border border-white/20 bg-[#333333] p-3 shadow-lg"
                    role="dialog"
                    aria-label="Search"
                >
                    <form className="flex gap-2" onSubmit={handleSubmit}>
                        <input
                            type="search"
                            name="q"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Search..."
                            className="search_popup_input header_nav_heading min-w-0 flex-1 rounded border border-white/30 bg-white/10 px-3 py-2 text-white placeholder:text-white/50 outline-none focus:border-white/60"
                            autoFocus
                        />
                        <button
                            type="submit"
                            className="search_popup_button header_nav_heading shrink-0 cursor-pointer rounded bg-white px-4 py-2 font-semibold text-[#333333] transition-colors hover:bg-white/90"
                        >
                            Search
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default SearchTrigger;
