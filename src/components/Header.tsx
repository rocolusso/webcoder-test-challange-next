import React from 'react';
import logo from './../../public/img/logo.png'
import like from "./../../public/img/like.svg"
import SearchTrigger from "@/components/SearchTrigger";
import Image from "next/image";
import Link from "next/link";
import BurgerMenu from "@/components/BurgerMenu";


const Header = () => {
    return (
        <header className={'heder_bg z-20 absolute left-0 right-0 top-0 opacity-70 h-[85px] flex items-center '}>
            <div className="container">
                <div className="header_logo flex justify-between items-center">
                    <Image
                        className="pt-2"
                        src={logo}
                        alt="heder-logo"
                        width={157}
                        height={157}
                        priority={true}
                    />
                    <div className="header_nav_block flex items-center gap-10 z-25">
                        <nav className="hidden sm:block">
                            <ul className={'flex gap-6'}>
                                <li>
                                    <Link href='#' className={'text-white text-[1.5rem] header_nav_heading'}>
                                        Our Brand
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={'text-white text-[1.5rem]  header_nav_heading'}>
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link href='#' className={'text-white text-[1.5rem]  header_nav_heading'}>
                                        Contact
                                    </Link>
                                </li>

                                <li>
                                    <Link href='#' className={'text-white text-[1.5rem]  header_nav_heading'}>
                                        Downloads
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="search_block flex gap-4 sm:pr-5 sm:pt-2">
                            <div className={'hidden sm:block'}>
                                <SearchTrigger />
                            </div>
                            <div className={'hidden sm:block'}>
                                <Link href='#'>
                                    <Image
                                        src={like}
                                        alt='like'
                                        width={35}
                                        height={35}
                                    />
                                </Link>
                            </div>
                            <BurgerMenu />
                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
