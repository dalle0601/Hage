import Navigation from '../components/navigation';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ko">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
