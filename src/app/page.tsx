import Image from "next/image";
import Link from "next/link";

import Faq from "./components/faq";
import Navbar from "./components/navbar";
import Client from "./components/client";
import Footer from "./components/footer";
import Contact from "./components/contact";
import Partner from "./components/partner";
import Switcher from "./components/switcher";
import Download from "./components/download";
import AboutOne from "./components/about-one";
import AboutTwo from "./components/about-two";
import Screenshot from "./components/screenshot";
import FeaturesOne from "./components/features-one";
import ScrollToTop from "./components/scroll-to-top";

export default function Home() {
  return (
    <>
    <Navbar navLight={false} playBtn={false} bgLight={false} navCenter={false}/>

    <section className="relative overflow-hidden md:py-36 py-24 bg-slate-50/50 dark:bg-slate-800/20 bg-no-repeat bg-center bg-cover" id="home" style={{backgroundImage:`url('/images/bg1.png')`}}>
      <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-6 gap-[30px] relative">
              <div className="md:me-6">
                  <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Anime Witcher (انمي ويتشر)</h6>
                  <h2 className="font-bold lg:leading-normal leading-normal text-[42px] lg:text-[54px] mb-5">Download Anime Witcher 2025</h2>
                  <h3 className="font-bold lg:leading-normal leading-normal text-[24px] lg:text-[42px] mb-5">Latest Version: 1.2.4</h3>

                  <p className="text-slate-400 text-lg max-w-xl">Download Anime Witcher 2025 latest version without ads for free 1.2.4</p>
                  <p className="text-slate-400 text-lg max-w-xl">Download Anime Witcher 2025 for Android. <Link href="/download-animewitcher-latest-version-2025">AnimeWitcher</Link> latest version for Android is a huge anime library through which you can watch all international anime movies and all episodes.</p>
             
                  <div className="mt-6">
                     <Link href="#"><Image src='/images/download.avif' width={200} height={150} className="inline-block m-1" alt=""/></Link>
                     <Link href="#"><Image src='/images/mediafire.avif' width={200} height={150} className="inline-block m-1" alt=""/></Link>
                  </div>
              </div>

              <div className="relative">
                  <Image src='/images/phone/1.avif' width={0} height={0} sizes="100vw" style={{width:'100%', height:'auto'}} className="mx-auto w-80 rotate-12 relative z-2" alt=""/>
                  <div className="overflow-hidden absolute md:size-[500px] size-[400px] bg-gradient-to-tl to-red-500/20 via-red-500/70 from-red-500 bottom-1/2 translate-y-1/2 md:start-0 start-1/2 ltr:md:translate-x-0 ltr:-translate-x-1/2 rtl:md:translate-x-0 rtl:translate-x-1/2 z-1 shadow-md shadow-red-500/10 rounded-full"></div>

                  <div className="overflow-hidden after:content-[''] after:absolute after:size-16 after:bg-red-500/20 after:top-0 after:end-6 after:z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
              </div>
          </div>
      </div>
    </section>

    <section className="relative md:py-24 py-16" id="features">
      <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
              <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Animewithcer's Features</h6>
              <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Discover Powerful Features of Anime Withcer</h2>
              <p className="text-slate-400 text-lg max-w-7xl mx-auto">The new updated version of the Anime Witcher application came with a change in the appearance of most interfaces to improve the user experience and make it easier for users.</p>
              <p className="text-slate-400 text-lg max-w-7xl mx-auto">Download Anime Witcher 2025 for Android Anime Witcher latest version for Android is a huge anime library through which you can watch all international anime films and all episodes of famous anime series translated via the Internet, various films and series with professional translation or dubbing into Arabic, and anime is made available on the Anime Witcher application in high quality and for free.</p>
          </div>
          <div className="grid grid-cols-1 pb-6 text-center">
          <h2 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Features of the Anime Witcher application, without ads and direct link</h2>
          <p className="text-slate-400 text-lg max-w-7xl mx-auto">The new updated version of the Anime Witcher application came with a change in the appearance of most interfaces to improve the user experience and make it easier for users.</p>
          <ul className="list-none text-slate-400 mt-6 text-left">
                        <li className="mb-1 flex"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Large Library: </strong> The Anime Watcher hacked application, the latest version, has a large library that includes a huge number of contents that you can watch, and this content is from all categories, so you can enjoy your favorite content from this library.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Search Engine: </strong> As explained, the application has a large number of movies and series, and therefore it is difficult to find a movie or series easily, but by using the search engine available in the “Anime Witcher” hacked application, you can find any desired content with ease.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Classification: </strong> Because Anime Witcher Apk includes many different categories, a classification service has been provided to you that enables the user to specify the category for which the contents are to appear. Thus, if you are a fan of one of these categories, you can specify that category from the classification service so that the contents that belong to this category only appear to you.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Favorites: </strong> One of the distinctive services that the Anime Witcher program contains is the Favorites service. Through this service, you can add any content that you like to the Favorites list, through which you can enjoy this service without having to search for it.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Download Feature: </strong> One of the most prominent features of Anime Witcher hacked without ads is that it provides a download service, and thus the user can now download any desired content to the phone so that the user can watch that content at any time and anywhere without restrictions, because it does not need an Internet connection on your phone.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Comments: </strong> The developer also made sure to provide a comments service through which the user can comment on the content available in the application, which enables him to leave his opinions under each content, and thus another user can view those comments and thus be able to evaluate the content before you watch it.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Promotional Videos: </strong> Also in the Anime Witcher hacked application for Android, you can watch promotional videos for the content before you start watching, in addition to the ability to read the synopsis that explains to you the idea around which the events of the film revolve.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Updates: </strong> The developer is keen to make exclusive updates to the application for you. All the latest content is added to the application exclusively, so that the user can enjoy watching new shows from the Anime Witcher hacked application for Android.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Notification Feature:</strong> One of the most prominent features of downloading the Anime Witcher application is that it contains a notification service that alerts the user to the presence of updates in the Anime Witcher Apk application so that you can move to the application and enjoy watching these shows exclusively, and thus you do not need to enter the application from time to time to view these updates.</li>
                        <li className="mb-1 flex ms-0"><i className="mdi mdi-check text-red-500 text-xl me-2"></i><strong>Suggestions: </strong> “Anime Watcher Mod” also provides many suggestions for all the content that you might like, and these suggestions are determined based on the searches you perform within the application.</li>
            </ul>    
            </div>
          <FeaturesOne/>
      </div>

      <div className="container relative md:mt-24 mt-16">
          <AboutOne/>
      </div>

      <div className="container relative md:mt-24 mt-16">
          <AboutTwo/>
      </div>
    </section>

    <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="screenshot">
      <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
              <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Animewitcher's Screenshots</h6>
              <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">Simple & Beautiful Interface</h4>

              <p className="text-slate-400 max-w-xl mx-auto">The Latest version 1.2.4 comes with elegent design and features.</p>
          </div>
          <Screenshot/>
      </div>
    </section>

    <section className="relative overflow-hidden md:py-24 py-16" id="faqs">
      <Faq/>
    </section>

    <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="download">
      <Download/>
    </section>

    <section className="relative md:py-24 py-16" id="reviews">
      <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
              <h6 className="text-red-500 uppercase text-sm font-bold tracking-wider mb-3">Reviews</h6>
              <h4 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-bold">10k+ Customers Trust Us</h4>

              <p className="text-slate-400 max-w-xl mx-auto">Unleash the power of our platform with a multitude of powerful features, empowering you to achieve your goals.</p>
          </div>
          <Client/>
      </div>
    </section>

    <section className="relative md:py-24 py-16 bg-slate-50/50 dark:bg-slate-800/20" id="contact">
      <Contact/>
    </section>

    <section className="py-6 border-t border-b border-gray-100 dark:border-gray-800">
      <div className="container relative">
          <Partner/>
      </div>
    </section>

    <Footer/>

    <ScrollToTop/>
    <Switcher/>
    </>
  );
}
