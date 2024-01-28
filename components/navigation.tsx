'use client';
import { usePathname } from 'next/navigation';

export default function Navigation() {
    const path = usePathname();

    if (path === '/login' || path === '/register' || path === '/reset') {
        return null;
    }

    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">HY</h1>
            <nav className="mt-2">
                <ul className="flex">
                    <li className="mr-4">
                        <a href="#about">About Me</a>
                    </li>
                    <li className="mr-4">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
