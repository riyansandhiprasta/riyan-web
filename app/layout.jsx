import './styles/globals.css';
import { Inter, Gilda_Display } from 'next/font/google';
import 'sal.js/dist/sal.css';
import { ThemeProvider } from 'next-themes';
import SalInit from './providers/sal';
import ThemeToggle from './components/ToggleButton';

export const metadata = {
  title: 'Riyan Sandhiprasta',
  description: 'A personal portfolio web.',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const gilda = Gilda_Display ({
    subsets: ['latin'],
    weight: '400',
    style: 'normal',
    variable: '--font-gilda'
})
 
export default function RootLayout({ children }) {
 return (
    <html lang="en" className={`${inter.variable} ${gilda.variable}`} suppressHydrationWarning>
      <body className='font-sans overflow-x-hidden'>
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
        >
            <header className= 'font-display navbar flex justify-center items-center py-8 w-full fixed top-0 left-0 z-20'>
                <div className='nav-list w-full'>
                    <ul className='flex justify-center gap-6 md:gap-[60px] text-md md:text-xl'>
                    <li>
                        <a href="#intro">Home</a>
                    </li>
                    <li>
                        <a href="#projects-web">Projects</a>
                    </li>
                    <li>
                        <a href="#footer">Contact</a>
                    </li>
                    <li>
                        <ThemeToggle/>
                    </li>
                    </ul>
                </div>
            </header>

            <div className="page-wrapper">
                <SalInit/>
                {children}
            </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
