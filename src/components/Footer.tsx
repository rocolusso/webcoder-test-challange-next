import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={'pt-20 pb-10'}>
            <div className={'main_footer'}>
                <div className={'container mx-auto'}>
                    <div className={'grid grid-cols-2 sm:grid-cols-6 gap-5 p-5'}>

                        <div className={'footer_item flex flex-col text-white'}>
                            <h4 className={'text-[20px]'}>Products</h4>
                            <ul className={'pt-5 flex flex-col'}>
                                <li>
                                    <Link href={'# '}>
                                        Ranges
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Ovens
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Coocktops
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Ventilation Systems
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Refrigirators
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Wine cabinets
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                       Dishwashes
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={'footer_item flex flex-col text-white'}>
                            <h4 className={'text-[20px] font-bold'}>Product lines</h4>
                            <ul className={'pt-5 flex flex-col'}>
                                <li>
                                    <Link href={'# '}>
                                        Professinonal Line
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Distinto Line
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={'footer_item flex flex-col text-white'}>
                            <h4 className={'text-[20px]'}>Help</h4>
                            <ul className={'pt-5 flex flex-col'}>
                                <li>
                                    <Link href={'# '}>
                                        Customer Care
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Warranty
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Find a Dealer
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Design Resourses
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={'footer_item flex flex-col text-white'}>
                            <h4 className={'text-[20px]'}>About</h4>
                            <ul className={'pt-5 flex flex-col'}>
                                <li>
                                    <Link href={'# '}>
                                        About the Company
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Quality & Production
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Get Inspired
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Your Reviews
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        News and Events
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Career
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={'footer_item flex flex-col text-white'}>
                            <h4 className={'text-[20px]'}>Tools</h4>
                            <ul className={'pt-5 flex flex-col'}>
                                <li>
                                    <Link href={'# '}>
                                        Reserved Area
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Wishlist
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className={'footer_item flex flex-col text-white'}>
                            <h4 className={'text-[20px]'}>Follow Us</h4>
                            <ul className={'pt-5 flex flex-col'}>
                                <li>
                                    <Link href={'# '}>
                                        Reserved Area
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'}>
                                        Wishlist
                                    </Link>
                                </li>
                            </ul>
                        </div>


                    </div>
                </div>
                <div className={'container mx-auto mt-20'}>
                    <div className={'border border-white'}></div>
                </div>
                <div className={'sub_footer'}>
                    <div className={'container mx-auto'}>
                        <div className={'p-5 flex sm:justify-end items-center'}>
                            <ul className={' mt-10 text-white flex flex-col sm:flex-row gap-5'}>
                                <li>
                                    <Link href={'# '} className='capitalize'>
                                        @ 2018 Fulgor Milano
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'} className='capitalize'>
                                        Legal Terms
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'# '} className='capitalize'>
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href={'#'} className='capitalize font-bold'>
                                       Made in Nextep
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
