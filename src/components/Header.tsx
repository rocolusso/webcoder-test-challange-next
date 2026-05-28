import React from 'react';
import logo from './../../public/img/logo.png'
import searchLogo from "./../../public/img/search.svg"
import like from "./../../public/img/like.svg"
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";


const Header = () => {
    return (
        <header className={'heder_bg z-20 absolute left-0 right-0 top-0 opacity-70 h-[85px] flex items-center '}>
            <div className={'container mx-auto'}>
                <div className={'header_logo flex justify-between items-center'}>
                    <Image
                        className={'px-5'}
                        src={logo}
                        alt="heder-logo"
                        width={160}
                        height={160}
                        priority={true}
                    />
                    <div className={'header_nav_block flex items-center gap-10 px-5'}>
                        <nav className={'hidden sm:block'}>
                            <ul className={'flex gap-5'}>
                                <li>
                                    <Link href='#' className={'text-white'}>
                                        Our Brand
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={'text-white'}>
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={'text-white'}>
                                        Contact
                                    </Link>
                                </li>

                                <li>
                                    <Link href='#' className={'text-white'}>
                                        Download
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={'search_block flex gap-2'}>
                            <div>
                                <Link href='#'>
                                    <Image
                                        src={searchLogo}
                                        alt='search-logo'
                                        width={33}
                                        height={33}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link href='#'>
                                    <Image
                                        src={like}
                                        alt='like'
                                        width={33}
                                        height={33}
                                    />
                                </Link>
                            </div>
                            <div className={'sm:hidden burger_menu'}>
                                <Link href='#'>
                                    <CiMenuFries
                                        color={'white'}
                                        size={33}
                                    />
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
