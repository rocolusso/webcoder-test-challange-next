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
                        className={'pl-5 pt-2 scale-105'}
                        src={logo}
                        alt="heder-logo"
                        width={180}
                        height={180}
                        priority={true}
                    />
                    <div className={'header_nav_block flex items-center gap-10 px-5 z-25'}>
                        <nav className={'hidden sm:block px-5'}>
                            <ul className={'flex gap-8'}>
                                <li>
                                    <Link href='#' className={'text-white text-[1.5rem]'}>
                                        Our Brand
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={'text-white text-[1.5rem]'}>
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={'text-white text-[1.5rem]'}>
                                        Contact
                                    </Link>
                                </li>

                                <li>
                                    <Link href='#' className={'text-white text-[1.5rem]'}>
                                        Download
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className={'search_block flex gap-4 pr-5'}>
                            <div>
                                <Link href='#'>
                                    <Image
                                        src={searchLogo}
                                        alt='search-logo'
                                        width={35}
                                        height={35}
                                    />
                                </Link>
                            </div>
                            <div>
                                <Link href='#'>
                                    <Image
                                        src={like}
                                        alt='like'
                                        width={35}
                                        height={35}
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
