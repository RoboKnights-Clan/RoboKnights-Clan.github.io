import type { NextPage } from "next";
import Hero from "../components/Home/Hero";
import Layout from "../components/Layout/Layout";
import Modal from "../components/Home/Modal";
import FAQS from "../components/Home/FAQS";
import { FAQS as FAQData } from "../data/faqs";

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <Hero />
      <Modal />
      <FAQS FaqData={FAQData} />
    </Layout>
  );
};

export default Home;
