import Link from "next/link";

import Container from "./container";
import { Github, Instagram, Linkedin } from "lucide-react";

import { cn } from "@/lib/utils";
import { MainRoutes } from "@/lib/helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  className: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, className }) => {
  return (
    <Link
      href={href}
      target="_blank"
      className={cn("transition duration-300", className)}>
      {icon}
    </Link>
  );
};

interface FooterLinkProps {
  href: string;
  label: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, label }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-base text-gray-300 hover:text-gray-100 hover:underline font-medium transition duration-200">
        {label}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#121212]">
      <Container className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-300">Quick Links</h3>

          <ul className="flex flex-col gap-3">
            {MainRoutes.map(route => (
              <FooterLink
                key={route.href}
                href={route.href}
                label={route.label}
              />
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
          <ul className="flex flex-col gap-3">
            <FooterLink href="/interviews" label="Interview Preparation" />
            <FooterLink href="/" label="Career Coaching" />
            <FooterLink href="/" label="Resume Building" />
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-lg mb-4 text-gray-300">Contact us</h3>
          <p className="text-base text-gray-300 hover:text-gray-100">
            Hyderabad, TS
          </p>
          <ul className="flex items-center gap-4 mt-4">
            <SocialLink
              href="https://github.com/Hari-Naik"
              icon={<Github size={24} />}
              className="hover:text-blue-400"
            />

            <SocialLink
              href="https://linkedin.com/in/harinaik"
              icon={<Linkedin size={24} />}
              className="hover:text-blue-700"
            />
            <SocialLink
              href="https://instagram.com"
              icon={<Instagram size={24} />}
              className="hover:text-pink-500"
            />
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
