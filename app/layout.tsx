import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'


export const metadata = {
  title: 'Fatima Alhaj',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
    </>
  )
}
