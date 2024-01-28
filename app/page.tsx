export default function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <main className="container mx-auto p-8">
                <section id="about" className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">About Me</h2>
                    <p></p>
                </section>

                <section id="portfolio" className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Portfolio</h2>
                </section>

                <section id="contact">
                    <h2 className="text-2xl font-bold mb-4">Contact</h2>
                    <p></p>
                </section>
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; 2024 Your Name. All rights reserved.</p>
            </footer>
        </div>
    );
}
