'use client';
import React from 'react';
import Animation from './animation';
import Link from 'next/link';

const Career = () => {
    return (
        <div className="flex flex-col md:flex-row pt-40 md:pt-52 px-6 md:px-10 items-center">
            <div className="lg:flex-grow w-full flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <div>
                    <p className="mb-8 leading-relaxed">
                        인간의 그들의 가장 피다. 천고에 것은 끝까지 풍부하게 그것을 풀이 길지 피다. 굳세게 인생의 사람은
                        따뜻한 시들어 끓는 그들에게 튼튼하며, 위하여, 듣는다. 가치를 그림자는 이것은 자신과 듣기만
                        소리다.이것은 이것이다. 얼마나 위하여 뜨거운지라, 철환하였는가? 위하여서, 그들의 피고 되려니와,
                        봄바람을 남는 영락과 천지는 같은 것이다. 만물은 황금시대를 투명하되 그림자는 전인 우리는 가는
                        무엇을 있으랴? 이상 이것은 인간의 것은 청춘의 황금시대다. 사랑의 풀이 대한 위하여서 것이다.
                    </p>
                    <div className="flex justify-center">
                        <Link href="/projects">프로젝트 보러가기</Link>
                    </div>
                </div>
            </div>
            <div className="lg:max-w-lg w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 w-full text-center">
                    CAREER
                </h1>
                <div className="flex justify-center">
                    <Animation />
                </div>
            </div>
        </div>
    );
};

export default Career;
