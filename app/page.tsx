'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <div className="container mx-auto mt-6 px-6 lg:px-0">
                <div className="relative rounded-xl overflow-hidden bg-[#2D2D2D]" style={{ height: '650px' }}>
                    <div
                        className="absolute inset-0 bg-[url('/image_01.jpg')] bg-cover bg-center opacity-50"
                        style={{
                            transform: 'scale(1.1)',
                        }}
                    ></div>

                    <div className="relative h-full flex flex-col justify-center px-8 lg:px-16">
                        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6">
                            Something
                            <br />
                            need fixing?
                        </h1>
                        <p className="text-xl md:text-xl text-white max-w-2xl mt-4">
                            From getting potholes filled to encouraging better parking, report issues affecting your
                            part of the world to local councils, utilities and more.
                        </p>

                        <div className="space-y-4 mt-12">
                            <p className="text-white text-lg font-medium">GET THE APP AND START SNAPPING</p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a href="#" className="inline-block">
                                    <img src="/Appstore.svg" alt="Download on the App Store" className="h-16 w-auto" />
                                </a>
                                <a href="#" className="inline-block">
                                    <img src="/googleplay.svg" alt="Get it on Google Play" className="h-16 w-auto" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto text-center py-24 px-6 lg:px-0">
                <h2 className="text-4xl md:text-6xl font-bold text-black">Do your bit, on the go.</h2>
                <h2 className="text-xl md:text-xl text-black mt-8">
                    Anywhere in Australia or Aotearoa New Zealand, anytime.
                </h2>
                <button className="bg-[#D1FF7E] text-black lg:px-6 px-10 py-2 mt-8 rounded-xl border-2 border-black text-xl font-medium hover:bg-[#bfed6e] transition-colors">
                    Start Snapping
                </button>
            </div>

            <section className="bg-[#f4f2ef] py-16 px-4 md:py-24">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-8">
                        <span className="inline-block bg-[#D1FF7E] text-black px-4 py-1 rounded-full text-md font-medium uppercase tracking-wide">
                            HOW IT WORKS
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-16 text-[#2c2927]">
                        How Snap Send Solve Works
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
                        <div className="bg-white rounded-xl overflow-hidden">
                            <div className="relative">
                                <Image src="/image_04.jpg" alt="Snap process illustration" width={450} height={350} />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-4xl font-bold mb-3 text-[#2c2927]">Snap</h3>
                                <p className="text-[#2c2927] text-lg">Spotted an issue? Snap to help get it fixed!</p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl  overflow-hidden">
                            <div className="relative">
                                <Image src="/image_04.jpg" alt="Snap process illustration" width={450} height={350} />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-4xl text-[#2c2927] font-bold mb-3">Send</h3>
                                <p className="text-[#2c2927] text-lg">
                                    Send a report on the spot. No clunky forms or hold times.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl overflow-hidden">
                            <div className="relative">
                                <Image src="/image_04.jpg" alt="Snap process illustration" width={450} height={350} />
                            </div>
                            <div className="p-6 text-center">
                                <h3 className="text-4xl text-[#2c2927] font-bold mb-3">Solve</h3>
                                <p className="text-[#2c2927] text-lg">
                                    We'll get it to the right place so it can get Solved!
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/send-snap"
                            className="inline-block bg-[#2c2927] text-white px-8 py-3 text-xl rounded-lg font-medium hover:bg-gray-800 transition-colors"
                        >
                            Send a Snap
                        </Link>
                    </div>
                </div>
            </section>

            <div className="container mx-auto max-w-7xl px-4 py-16 text-[#2c2927]">
                {/* Main Heading */}
                <h2 className="text-4xl font-bold text-center max-w-4xl mx-auto mb-20">
                    The trusted reporting tool for Australian and New Zealand organisations
                </h2>

                {/* Logo Grid */}
                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 mb-16">
                    <Image src="/1.avif" alt="City of Monash logo" width={100} height={60} className="object-contain" />
                    <Image src="/1.avif" alt="Knox logo" width={120} height={60} className="object-contain" />
                    <Image src="/1.avif" alt="Townsville logo" width={110} height={60} className="object-contain" />
                    <Image src="/1.avif" alt="Orion logo" width={110} height={60} className="object-contain" />
                    <Image
                        src="/1.avif"
                        alt="Yarra Valley Water logo"
                        width={120}
                        height={60}
                        className="object-contain"
                    />
                    <Image src="/1.avif" alt="Telstra logo" width={120} height={60} className="object-contain" />
                    <Image src="/1.avif" alt="Sydney Water logo" width={120} height={60} className="object-contain" />
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col md:flex-row justify-center gap-4 mt-12">
                    <Link href="/solvers">
                        <button className="w-full md:w-auto bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors text-xl ">
                            View All Solvers
                        </button>
                    </Link>
                    <Link href="/how-solvers-use">
                        <button className="w-full md:w-auto bg-white text-black px-8 py-3 rounded-lg font-medium text-xl border-2 border-black hover:bg-gray-50 transition-colors">
                            How Solvers Use Snap Send Solve
                        </button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
