import "devicon/devicon.min.css";
import "./globals.css";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import CustomCursor from "@/app/component/CustomCursor";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>najmeen khan - Front End Developer</title>
        <meta
          name="description"
          content="Welcome to the portfolio of najmeen khan, a front-end developer crafting interactive web experiences."
        />
        <meta
          name="keywords"
          content="najmeen khan, front-end developer, web development, nextjs developer, react js developer, responsive web developer, portfolio, HTML, CSS, JavaScript, UI/UX design, web accessibility, mobile-first design, frontend frameworks, SPA, progressive web apps, performance optimization"
        />
        <meta name="author" content="najmeen khan" />
        <meta property="og:image" content="/public/s.h.bhati.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-barlow">
        <CustomCursor />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
