import React from 'react';
import Image from 'next/image';
import aboutBg from "./../../public/img/about_bg.jpg"

const About = () => {
    return (
        <section className="relative w-full h-[500px] overflow-hidden">
            {/* Background image */}
            <Image
                src={aboutBg}
                alt="about-background"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="container mx-auto relative z-10 pt-47">
                <div className="max-w-6xl px-6 text-white ">
                    <h1 className="text-6xl font-bold ">
                        About Us
                    </h1>
                    <p className="max-w-2xl text-[1.4rem] text-white/90 pt-5">
                        Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi
                        rerum sed quia quasi sit velit ducimus! Quo quod nesciunt aut
                        omnis praesentium quo dignissimos reiciendis sit numquam delectus.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
