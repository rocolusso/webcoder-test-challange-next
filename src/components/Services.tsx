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

                     <div className='item_block py-20 flex flex-row flex-wrap items-center gap-18' >
                         <div className={'flex justify-center'}>
                             <div className={'pl-10'}>
                                 <Image
                                     className={'item_img'}
                                     src={serviceItemImg}
                                     alt="service-item-1"
                                     width={532}
                                     height={545}
                                 />
                             </div>
                         </div>
                         <div className={'px-5 item_description text-white flex flex-col justify-center w-full sm:max-w-[560px]'}>
                              <h3 className={'capitalize services_heading'}>Lorem Ipsum</h3>
                              <p className={'pt-6 services_heading_paragraph'}>
                                  Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                  sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                  reiciendis sit numquam delectus.
                              </p>
                         </div>
                     </div>

                     <div className='item_block py-5 flex flex-row flex-wrap items-center gap-18' >
                         <div className={'px-5 item_description text-white flex flex-col justify-center w-full sm:max-w-[560px]'}>
                             <p className={'pt-6 services_heading_paragraph'}>
                                 Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                 sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                 reiciendis sit numquam delectus.
                             </p>
                         </div>
                         <div className={'flex justify-center'}>
                             <div className={'ml-5'}>
                                 <Image
                                     className={'item_img'}
                                     src={aboutBg}
                                     alt="service-item-1"
                                     width={540}
                                     height={540}
                                 />
                             </div>
                         </div>
                     </div>


                     <div className='item_block py-20 flex flex-row flex-wrap items-center gap-18' >
                         <div className={'flex justify-center'}>
                             <div className={'ml-10'}>
                                 <Image
                                     className={'item_img'}
                                     src={aboutBg}
                                     alt="service-item-1"
                                     width={540}
                                     height={540}
                                 />
                             </div>
                         </div>
                         <div className={'px-5 item_description text-white flex flex-col justify-center w-full sm:max-w-[560px]'}>
                             <p className={'pt-6 services_heading_paragraph'}>
                                 Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                 sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                 reiciendis sit numquam delectus.
                             </p>
                         </div>
                     </div>

                     <div className='item_block py-5 flex flex-row flex-wrap items-center gap-18' >
                         <div className={'px-5 item_description text-white flex flex-col justify-center w-full sm:max-w-[560px]'}>
                             <p className={'pt-6 services_heading_paragraph'}>
                                 Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                 sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                 reiciendis sit numquam delectus.
                             </p>
                         </div>
                         <div className={'flex justify-center'}>
                             <div className={'ml-5'}>
                                 <Image
                                     className={'item_img'}
                                     src={aboutBg}
                                     alt="service-item-1"
                                     width={540}
                                     height={540}
                                 />
                             </div>
                         </div>
                     </div>

                 </div>
                <div className={'border border-white mt-20 overflow-hidden'}/>
                <div className={'py-20 flex flex-col items-center'}>
                    <Image
                        className={'video_img'}
                        src={videoImg}
                        alt="video-img"
                        width={980}
                        height={980}
                    />
                </div>

            </div>
        </section>
    );
};

export default Services;
