import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface IlayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout: React.FC<IlayoutProps> = ({ title, children }: IlayoutProps) => {
  return (
    <>
      <Head>
        <title>{title} | RoboKnights</title>
      </Head>
      <Header />
      <div className="dark:bg-dark dark:text-white">
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
