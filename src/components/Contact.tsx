import React from 'react';
import Image from "next/image";
import contactImg from "../../public/img/contact-us.png";

const Contact = () => {
    return (
        <section>
            <div className="mt-35 relative mx-auto h-[300px]">
                <Image
                    src={contactImg}
                    alt="contact-background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 " />
                <div className="container  mx-auto relative z-10">
                    <div className=" px-5 pt-12 text-white text-center flex flex-col items-center justify-center">
                        <h3 className="text-[2.375rem] text-center mx-auto  max-w-[500px]">
                            Send us your review about our products!
                        </h3>
                        <div>
                            <button className={'mt-[20px] w-[240px] h-[60px] bg-white z-10 text-xl text-black'}>Send!</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
