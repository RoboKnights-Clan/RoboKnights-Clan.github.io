/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout/Layout";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { useTheme } from "next-themes";
import type { NextPage } from "next";

const ContactPage: NextPage = () => {
  const { theme } = useTheme();

  const socials = [
    { icon: <FaGithub />, url: "https://github.com/yourorg" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/company/yourorg" },
    { icon: <FaInstagram />, url: "https://instagram.com/yourorg" },
    { icon: <FaFacebook />, url: "https://facebook.com/yourorg" },
  ];

  return (
    <Layout title="Contact Us">
      <div className="container mx-auto px-5 py-16">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary dark:text-primary-dark text-center mb-12 font-sanssm">
          Contact Us
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col justify-center items-start space-y-4">
            <h2 className="text-2xl font-semibold text-dark dark:text-white font-sanssm">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 font-sansm">
              Have a question or want to collaborate? Reach out to us at:
            </p>
            <p className="font-medium text-primary dark:text-primary-dark text-lg">contact@roboknights.in</p>
            <p className="text-gray-700 dark:text-gray-300 font-sanssm mt-2">
              We usually respond within 24–48 hours.
            </p>
          </div>

          {/* Social Media */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col justify-center items-start space-y-4">
            <h2 className="text-2xl font-semibold text-dark dark:text-white font-sanssm">Follow Us</h2>
            <p className="text-gray-700 dark:text-gray-300 font-sansm">
              Stay updated by following our social media channels:
            </p>
            <div className="flex space-x-6 mt-4 text-2xl text-dark dark:text-white">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary dark:hover:text-primary-dark transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 text-gray-700 dark:text-gray-300 font-sanssm">
          <p>© 2025 RoboKnights. All rights reserved.</p>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
