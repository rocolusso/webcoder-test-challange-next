import React from 'react';
import aboutBg from "../../public/img/about_bg.jpg";
import Image from "next/image";
import serviceItemImg from './../../public/img/img-item-1.png'
import videoImg from './../../public/img/video-img.png'
import YouTubeVideoPlayer from '@/components/YouTubeVideoPlayer';

const Services = () => {
    return (
        <section className="service_block">
            <div className="container">
                 <div className={'flex justify-center flex-col'}>

                     <div className="item_block mx-[20px] py-20 flex flex-col sm:flex-row justify-between gap-8">
                         <div className="flex justify-center">
                             <div>
                                 <Image
                                     className={'item_img'}
                                     src={serviceItemImg}
                                     alt="service-item-1"
                                     width={532}
                                     height={545}
                                 />
                             </div>
                         </div>
                         <div className="item_description text-white flex flex-col justify-center">
                             <div className="p-2">
                              <h3 className={'capitalize services_heading'}>Lorem Ipsum</h3>
                              <p className={'pt-6 max-w-[32rem] services_heading_paragraph'}>
                                  Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                  sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                  reiciendis sit numquam delectus.
                              </p>
                             </div>
                         </div>
                     </div>

                     <div className="item_block mx-[20px] py-5 flex flex-col-reverse sm:flex-row justify-between gap-8">
                         <div className="item_description text-white flex flex-col justify-center">
                             <div>
                                 <p className={'pt-9 max-w-[32rem] services_heading_paragraph'}>
                                     Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                     sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                     reiciendis sit numquam delectus.
                                 </p>
                             </div>
                         </div>
                         <div className="flex justify-center">
                             <div>
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




                     <div className="item_block mx-[20px] py-18 flex flex-col sm:flex-row justify-between gap-8">
                         <div className="flex justify-center">
                             <div>
                                 <Image
                                     className={'item_img'}
                                     src={aboutBg}
                                     alt="service-item-1"
                                     width={540}
                                     height={540}
                                 />
                             </div>
                         </div>
                         <div className="item_description text-white flex flex-col justify-center">
                             <div className={'pr-0 sm:pr-8'}>
                                 <p className={' max-w-[32rem] services_heading_paragraph'}>
                                     Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                     sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                     reiciendis sit numquam delectus.
                                 </p>
                             </div>
                         </div>
                     </div>


                     <div className="item_block mx-[20px] py-7 flex flex-col-reverse sm:flex-row justify-between gap-8">
                         <div className="item_description text-white flex flex-col justify-center">
                             <div>
                                 <p className={' max-w-[30rem] services_heading_paragraph'}>
                                     Lorem ipsum dolor sit amet. Id quasi assumenda non excepturi rerum sed quia quasi
                                     sit velit ducimus! Quo quod nesciunt aut omnis praesentium quo dignissimos
                                     reiciendis sit numquam delectus.
                                 </p>
                             </div>
                         </div>
                         <div className="flex justify-center">
                             <div>
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
                <div className={'border border-white mt-16  overflow-hidden'}/>
                <div className={'pt-20 mt-4 flex flex-col items-center'}>
                    <YouTubeVideoPlayer previewSrc={videoImg} previewAlt="video-img" />
                </div>

            </div>
        </section>
    );
};

export default Services;
