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
      {children}
      <Footer />
    </>
  );
};

export default Layout;
