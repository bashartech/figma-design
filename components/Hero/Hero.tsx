import Image from "next/image"

import Head from 'next/head';

export default function Hero() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Bodoni:ital,wght@0,400..700;1,400..700&family=Rye&display=swap" rel="stylesheet"/>
      </Head>
      <div className="min-h-[825px] w-screen">
        <div className="w-full flex flex-col lg:flex-row p-4 sm:p-10">
          <div className="left pl-12 w-full lg:w-1/2 flex gap-10 flex-col justify-center mb-8 lg:mb-0 lg:m-16">
            <h1 className="font-libre text-3xl sm:text-4xl lg:text-[40px] font-bold max-w-[496px]">
              IMPECCABLE CRAFTSMANSHIP AND FINESSE
            </h1>
            <p className="font-libre text-[#787054] text-xl sm:text-2xl lg:text-[30px] font-medium tracking-custom leading-custom max-w-[902px] lg:pr-32">
              An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
            </p>
            <button className="bg-[#A29875] w-full sm:w-[288px] text-2xl sm:text-[30px] h-[58px] font-libre rounded-[10px] text-white">
              Explore Now
            </button>
          </div>
          <div className="right w-full lg:w-1/2 flex justify-center items-center mt-8 lg:mt-0">
            <Image 
              src="images/layer.svg" 
              className="text-black bg-[url('/images/slider-1.svg')] bg border-top-left-150 border-bottom-right-150 p-5 max-w-full h-auto" 
              alt=""
              width={462}
              height={647} 
            />
          </div>
        </div>
      </div>
    </>
  )
}