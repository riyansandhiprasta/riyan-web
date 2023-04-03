import '../src/styles/globals.css';
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Riyan Sandhiprasta',
  description: 'A personal portfolio web.',
}

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className={`${inter.variable} font-sans px-4 md:px-20 lg:px-40`}>
        <div className='navbar flex justify-between items-center py-3 backdrop-blur-md sticky top-0 z-20'>
          <div className='nav-list'>
            <ul className='flex justify-start gap-4 text-sm text-slate-600'>
              <li>
                <a href="#intro">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
               <a href="#projects">Projects</a>
              </li>
            </ul>
          </div>
          <div>
            <img src="/memoji1.png" alt="" className='w-10' />
          </div>
        </div>

        {children}

      </body>
    </html>
  )
}
