'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navigation = () => {
    const [scrollY, setScrollY] = useState(0);
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isMenuVisible, seIstMenuVisible] = useState(false);

    const toggleNav = () => {
        seIstMenuVisible(!isMenuVisible);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);
            console.log(currentScrollY);
            if (currentScrollY > 100 && isNavVisible) {
                setIsNavVisible(false);
            } else if (currentScrollY <= 100 && !isNavVisible) {
                setIsNavVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isNavVisible]);

    return (
        // <div className="flex justify-between items-center p-6 font-play shadow">

        // </div>
        <div
            className={`${
                isNavVisible ? 'visible' : 'hidden'
            } flex fixed left-0 justify-between w-full p-6 font-play shadow`}
        >
            <div className="cursor-pointer">
                <Link href="/">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                        />
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                        />
                    </svg>
                </Link>
            </div>
            {/* 반응형 메뉴 */}
            <div className="hidden md:flex">
                <span className="px-5">
                    <Link href="/post">Post</Link>
                </span>
                <span className="px-5">
                    <Link href="/about">About</Link>
                </span>
            </div>
            {/* 메뉴 버튼 - 작은 화면에서 표시 */}
            <div className="md:hidden cursor-pointer" onClick={toggleNav}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </div>
            {/* 햄버거 아이콘 클릭 시 나타날 메뉴 */}
            {isMenuVisible && (
                <div className="md:hidden absolute top-16 right-0 bg-white w-48 shadow p-4">
                    <div className="mb-2">
                        <Link href="/post">
                            {/* <a className="block px-4 py-2">Post</a> */}
                            Post
                        </Link>
                    </div>
                    <div>
                        <Link href="/about">
                            {/* <a className="block px-4 py-2">About</a> */}
                            About
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navigation;
