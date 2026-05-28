import React from 'react';
import aboutBg from "../../public/img/about_bg.jpg";
import Image from "next/image";
import serviceItemImg from './../../public/img/img-item-1.png'
import videoImg from './../../public/img/video-img.png'

const Services = () => {
    return (
        <section className="service_block">
            <div className={'container mx-auto'}>
                 <div className={'flex justify-center flex-col'}>

                     <div className='item_block py-20 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20'>
                         <div className={'flex justify-center'}>
                             <Image
                                 className={'item_img'}
                                 src={serviceItemImg}
                                 alt="service-item-1"
                                 width={550}
                                 height={550}
                             />
                         </div>
                         <div className={'px-5 item_description text-white flex flex-col justify-center w-full sm:max-w-[400px]'}>
                              <h3 className={'text-4xl font-bold capitalize '}>Lorem Ipsum</h3>
                              <p className={'pt-10'}>
                                  Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                  sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                  reiciendis sit numquam delectus.
                              </p>
                         </div>
                     </div>

                     <div className='item_block py-20 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20'>
                         <div className={'px-5 item_description text-white flex flex-col justify-center w-full sm:max-w-[400px]'}>
                             <p>
                                 Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                 sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                 reiciendis sit numquam delectus.
                             </p>
                         </div>

                         <div className={'flex justify-center'}>
                             <Image
                                 className={'item_img'}
                                 src={aboutBg}
                                 alt="service-item-1"
                                 width={550}
                                 height={550}
                             />
                         </div>
                     </div>

                     <div className='item_block py-20 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20'>
                         <div className={'flex justify-center'}>
                             <Image
                                 className={'item_img'}
                                 src={aboutBg}
                                 alt="service-item-1"
                                 width={550}
                                 height={550}
                             />
                         </div>
                         <div className={'px-5 item_description text-white flex flex-col justify-center w-full sm:max-w-[400px]'}>
                             <p>
                                 Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                 sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                 reiciendis sit numquam delectus.
                             </p>
                         </div>
                     </div>

                     <div className='item_block py-20 mx-auto grid grid-cols-1 sm:grid-cols-2 gap-20'>
                         <div className={'px-5 item_description text-white flex flex-col justify-center w-full sm:max-w-[400px]'}>
                             <p>
                                 Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                 sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                 reiciendis sit numquam delectus.
                             </p>
                         </div>

                        <div className={'flex justify-center'}>
                            <Image
                                className={'item_img'}
                                src={aboutBg}
                                alt="service-item-1"
                                width={550}
                                height={550}
                            />
                        </div>
                     </div>

                 </div>
                <div className={'container mx-auto'}>
                    <div className={'border border-white'}></div>
                </div>
                <div className={'container mx-auto'}>
                    <div className={'py-20 flex justify-center'}>
                        <Image
                            className={'video_img'}
                            src={videoImg}
                            alt="video-img"
                            width={980}
                            height={980}
                        />
                    </div>
                </div>




            </div>
        </section>
    );
};

export default Services;
