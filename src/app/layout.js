import 'large-small-dynamic-viewport-units-polyfill';
import { Poppins } from 'next/font/google';
import "toastify-js/src/toastify.css";
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: 'Port City International University Online Result',
  description: 'Check Results and calculate the Cumulative Grade Point Average(CGPA/GPA) for Port City International University (PCIU) students on online',
  keywords: ['PCIU', 'Port City International University', 'PCIU CGPA Calculator', 'PCIU Result', 'PCIU GPA'],
  authors: [{ name: 'Md Rubel Amin', url: 'https://github.com/mdrubelamin2/' }],
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link rel="icon" href="./favicon.svg" type="image/svg" /> */}
      <body className={`${poppins.className} before-search`}>{children}</body>
    </html>
  )
}
