import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/molecules/Navbar/NavBar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nextjs|Implementing CRUD functions",
  description: "This web app is created Himal Tamang",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="">
          <Navbar />
          <div className="mt-4 px-10">{children}</div>
        </div>
      </body>
    </html>
  )
}
