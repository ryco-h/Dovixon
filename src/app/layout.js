import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter, Montserrat } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';

const inter = Montserrat({ subsets: ['latin'] });

export const metadata = {
	title: 'Dovixon',
	description: 'Using Next JS',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={inter.className}>
				<ThemeContextProvider>
					<ThemeProvider>
						<div className="container">
							<div className="wrapper">
								<Navbar />
								{children}
								<Footer />
							</div>
						</div>
					</ThemeProvider>
				</ThemeContextProvider>
			</body>
		</html>
	);
}
