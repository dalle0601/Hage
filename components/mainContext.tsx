'use client';
import Link from 'next/link';
import React from 'react';
import Animation from './animation';

const MainContext = () => {
    return (
        <div className="flex flex-col md:flex-row pt-40 md:pt-52 px-6 md:px-10 items-center">
            <div className="lg:max-w-lg w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 w-full text-center">
                    USERS
                </h1>
                <div className="flex justify-center">
                    <Animation />
                </div>
            </div>
            <div className="lg:flex-grow w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div className="w-full">
                    <h4 className="text-3xl	mb-3">Contact</h4>
                    <div className="flex justify-between mb-3">
                        <h2 className="w-1/4">Phone.</h2>
                        <a className="w-3/4">010-8763-1704</a>
                    </div>
                    <div className="flex justify-between mb-3">
                        <h2 className="w-1/4">Email.</h2>
                        <a className="w-3/4">dalle0601@gmail.com</a>
                    </div>
                    <div className="flex justify-between mb-3">
                        <h2 className="w-1/4">Github.</h2>
                        <a className="w-3/4">https://github.com/dalle0601</a>
                    </div>

                    <div className="flex justify-center">
                        <Link href="/projects">프로젝트 보러가기</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContext;
