/* eslint-disable @next/next/no-img-element */
import React from "react";
import Layout from "../components/Layout/Layout";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { useTheme } from "next-themes";
import type { NextPage } from "next";
import { contactInfo, socials } from "../data/contact";

const ContactPage: NextPage = () => {
  const { theme } = useTheme();

  const socialIcon = (type: string) => {
    switch (type) {
      case "github":
        return <FaGithub />;
      case "linkedin":
        return <FaLinkedin />;
      case "instagram":
        return <FaInstagram />;
      case "facebook":
        return <FaFacebook />;
      default:
        return null;
    }
  };

  return (
    <Layout title="Contact Us">
      <div className="bg-white dark:bg-[#0a0a0a] min-h-screen">
        <div className="container mx-auto px-5 py-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary dark:text-primary-dark text-center mb-12 font-sanssm">
            Contact Us
          </h1>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info Section */}
            {contactInfo.map((person, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col justify-center items-start space-y-4"
              >
                <h2 className="text-2xl font-semibold text-dark dark:text-white font-sanssm">
                  {person.role || "Get in Touch"}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 font-sansm">
                  {person.name}
                </p>
                <p className="font-medium text-primary dark:text-primary-dark text-lg">
                  {person.email}
                </p>
              </div>
            ))}

            {/* Social Media Section */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col justify-center items-start space-y-4">
              <h2 className="text-2xl font-semibold text-dark dark:text-white font-sanssm">
                Follow Us
              </h2>
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
                    {socialIcon(social.type)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12 text-gray-700 dark:text-gray-300 font-sanssm">
            <p>© 2025 RoboKnights. All rights reserved.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
