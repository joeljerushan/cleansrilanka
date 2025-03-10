import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <nav className="bg-white py-8 px-6 lg:px-4">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            {/* Logo */}
                            <div className="flex-shrink-0">
                                <a href="/" className="text-4xl lg:text-5xl font-bold text-black">
                                    Snapfixit
                                </a>
                            </div>
                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center gap-12">
                                <div className="">
                                    <a href="/about" className="text-black hover:text-gray-600 text-xl font-medium">
                                        About Us
                                    </a>
                                </div>
                                <div className="relative group">
                                    <a href="/snappers" className="text-black hover:text-gray-600 text-xl font-medium">
                                        Snappers
                                    </a>
                                </div>
                                <div className="relative group">
                                    <a href="/solvers" className="text-black hover:text-gray-600 text-xl font-medium">
                                        Solvers
                                    </a>
                                </div>
                                <div className="relative group">
                                    <a href="/help" className="text-black hover:text-gray-600 text-xl font-medium">
                                        Help Centre
                                    </a>
                                </div>
                                <button className="bg-[#D1FF7E] text-black lg:px-6 px-4 py-2 rounded-xl border-2 border-black text-xl font-medium hover:bg-[#bfed6e] transition-colors">
                                    Send a Snap
                                </button>
                            </div>{' '}
                        </div>
                        {/* Mobile menu button */}

                        {/* Mobile Navigation */}
                        <div className="lg:hidden mt-4">
                            <div className="flex flex-col space-y-4">
                                <a href="/about" className="text-black hover:text-gray-600 font-medium">
                                    About Us
                                </a>
                                <a href="/snappers" className="text-black hover:text-gray-600 font-medium">
                                    Snappers
                                </a>
                                <a href="/solvers" className="text-black hover:text-gray-600 font-medium">
                                    Solvers
                                </a>
                                <a href="/help" className="text-black hover:text-gray-600 font-medium">
                                    Help Centre
                                </a>
                                <button className="bg-green-300 text-black px-4 py-1.5 rounded-lg border-2 border-black text-base font-medium hover:bg-green-400 transition-colors w-full">
                                    Send a Snap
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
                {children}

                <footer className="bg-white py-16">
                    <div className="container mx-auto lg:px-4 px-6">
                        {/* Main Footer Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                            {/* Snappers Column */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Snappers</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/what-is-snapper" className="text-gray-600 hover:text-gray-900">
                                            What is a Snapper?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/what-to-snap" className="text-gray-600 hover:text-gray-900">
                                            What to Snap
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/where-to-snap" className="text-gray-600 hover:text-gray-900">
                                            Where to Snap
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/events" className="text-gray-600 hover:text-gray-900">
                                            Events
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/snapper-kit" className="text-gray-600 hover:text-gray-900">
                                            Snapper Kit
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Solvers Column */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Solvers</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/who-are-solvers" className="text-gray-600 hover:text-gray-900">
                                            Who are our Solvers?
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/local-government" className="text-gray-600 hover:text-gray-900">
                                            Local Government
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/utilities" className="text-gray-600 hover:text-gray-900">
                                            Utilities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/universities" className="text-gray-600 hover:text-gray-900">
                                            Universities
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/solver-kit" className="text-gray-600 hover:text-gray-900">
                                            Solver Kit
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pro-trial" className="text-gray-600 hover:text-gray-900">
                                            Snap Send Solve Pro Trial
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* About Us Column */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">About Us</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/about" className="text-gray-600 hover:text-gray-900">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/media" className="text-gray-600 hover:text-gray-900">
                                            In the media
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/case-studies" className="text-gray-600 hover:text-gray-900">
                                            Case Studies
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/business-model" className="text-gray-600 hover:text-gray-900">
                                            Our Business Model
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/collaborate" className="text-gray-600 hover:text-gray-900">
                                            Collaborate with us
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* Support Column */}
                            <div>
                                <h3 className="text-xl font-bold mb-4">Support</h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link href="/help-centre" className="text-gray-600 hover:text-gray-900">
                                            Help Centre
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/refer" className="text-gray-600 hover:text-gray-900">
                                            Refer a friend
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/portal" className="text-gray-600 hover:text-gray-900">
                                            Solver Portal
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Bottom Footer */}
                        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
                            <div className="flex space-x-4 mb-4 md:mb-0 items-center">
                                {/* Social Media Links */}
                                <a href="https://instagram.com" className="text-gray-800 hover:text-gray-900">
                                    <span className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </a>
                                <a href="https://facebook.com" className="text-gray-800 hover:text-gray-900">
                                    <span className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </a>
                                <a href="https://linkedin.com" className="text-gray-800 hover:text-gray-900">
                                    <span className="w-8 h-8 border border-gray-500 rounded-full flex items-center justify-center">
                                        <svg
                                            className="w-4 h-4"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                            aria-hidden="true"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </span>
                                </a>
                                <h2 className="">Copyright © 2025 snapfixit</h2>
                            </div>

                            {/* Copyright and Legal Links */}
                            <div className="text-black text-md flex gap-12">
                                <div className="flex space-x-4">
                                    <Link href="/privacy" className="hover:text-gray-900">
                                        Privacy Policy
                                    </Link>

                                    <Link href="/terms" className="hover:text-gray-900">
                                        Terms of Use
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    );
}
