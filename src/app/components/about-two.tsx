import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutTwo() {
  return (
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
            <div className="lg:col-span-5 md:col-span-6 md:order-2 order-1">
                <div className="pt-6 px-6 rounded-2xl bg-red-500/5 dark:bg-red-500/10 shadow shadow-red-500/20">
                    <Image src='/images/phone/half-2.avif' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt=""/>
                </div>
            </div>

            <div className="lg:col-span-7 md:col-span-6 md:order-1 order-2">
                <div className="lg:me-10">
                    <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">AnimeWitcher (انمي ويتشر)</h6>
                    <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Share your Favorite Anime with <br/> friends easily</h4>
                    <p className="text-slate-400 max-w-xl">Animewithcer has the feature to Download and Share the favorite anime in your device and with friends</p>

                    <ul className="list-none text-slate-400 mt-6">
                        <li className="mb-1 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Search Engine in the “Anime Witcher” helps to find any content with ease.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Classification service enables to specify the category for each content.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i> Notification service that alerts the user to the presence of updates in the Anime Witcher</li>
                    </ul>

                    
                </div>
            </div>
        </div>
  )
}
