import React from 'react';
import Image from "next/image";
import contactImg from "../../public/img/contact-us.png";

const Contact = () => {
    return (
        <section>
            <div className="relative mx-auto">
                <Image
                    src={contactImg}
                    alt="contact-background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="container py-20 mx-auto relative z-10">
                    <div className="flex flex-col justify-center items-center px-5 text-white text-center">
                        <h3 className="text-4xl  mb-4 max-w-[500px]">
                            Send us your review about our products!
                        </h3>
                        <button className={'mt-[20px] w-[240px] h-[60px] bg-white z-10 text-3xl text-black'}>Send!</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
