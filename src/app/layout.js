import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  variable: "--font-poppins" ,
  subsets : ["latin"],
  weight: ["400", "500", "600", "700"]
});

// font for auth folder
export const montserrat = Montserrat({
  variable:"--font-montserrat" , 
  subsets:["latin"],
  weight:["400", "500", "600", "700"]
})

export const metadata = {
  title: "The Dragon News",
  description: "A news website built with next.js - Best news portal in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>

    </html>
  );
}
