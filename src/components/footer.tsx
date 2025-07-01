import React from "react";
import Container from "./container";
import { MainRoutes } from "@/lib/helpers";
import Link from "next/link";
import { Github, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#121212]">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-300">Quick Links</h3>

          <ul className="flex flex-col gap-3">
            {MainRoutes.map(route => (
              <li key={route.href}>
                <Link
                  href={route.href}
                  className="text-base text-gray-300 hover:text-gray-100 hover:underline font-medium transition duration-200">
                  {route.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-300">Services</h3>

          <p className="text-base text-gray-300 hover:text-gray-100">
            We are committed to helping you unlock your full potential with
            AI-powered tools. Our platform offers a wide range of resources to
            improve your interview skills and chances of success.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-300">About Us</h3>
          <div className="flex flex-col gap-3">
            <Link
              href="/interviews"
              className="capitalize text-base text-gray-300 hover:text-gray-100 hover:underline font-medium transition duration-200">
              Interview preparation
            </Link>
            <Link
              href="/"
              className="capitalize text-base text-gray-300 hover:text-gray-100 hover:underline font-medium transition duration-200">
              career coaching
            </Link>
            <Link
              href="/"
              className="capitalize text-base text-gray-300 hover:text-gray-100 hover:underline font-medium transition duration-200">
              resume building
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-300">Contact us</h3>
          <p className="text-base text-gray-300 hover:text-gray-100">
            Hyderabad, TS
          </p>
          <div className="flex items-center gap-4 mt-4">
            <Link href="https://linkedin.com/harinaik">
              <Linkedin
                size={24}
                className="text-gray-300 hover:text-blue-700 transition duration-300"
              />
            </Link>
            <Link href="https://github.com/Hari-Naik">
              <Github
                size={24}
                className="text-gray-300 hover:text-blue-700 transition duration-300"
              />
            </Link>
            <Link href="https://github.com/Hari-Naik">
              <Instagram
                size={24}
                className="text-gray-300 hover:text-blue-700 transition duration-300"
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
