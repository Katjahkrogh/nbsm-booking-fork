import { Open_Sans } from 'next/font/google';
import './globals.css';
import Footer from '../components/Footer';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata = {
  title: 'Book tid til nye negle | Nails By Sascha Melina ',
  description:
    'Få lavet flotte gele, akryl eller shellac negle i hjertet af Valby - Book din tid hos Nails By Sascha Melina idag og få smukke negle.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={openSans.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
