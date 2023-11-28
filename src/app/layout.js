import './globals.css'
import Head from 'next/head';
export default function RootLayout({ children }) {
  return (
    <html className="w-full h-full  "
      lang="en">
      <Head>
      <meta name="viewport" content="width=device-width, intial-scale=1.0"/>

</Head>
      <body className="flex h-full w-full">
        {children}
      </body>
    </html>
  )
}
