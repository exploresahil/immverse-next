"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsApple, BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { FaGooglePlay } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

import logo from "@/public/assets/logos/Immverse-pixel-on-white_1.svg";

type HeaderProps = {
  theme: string;
  setTheme: (theme: string) => void;
};

export default function Header({ theme, setTheme }: HeaderProps) {
  const [isSunIcon, setIsSunIcon] = useState(true);

  const handleThemeToggle = () => {
    setIsSunIcon(!isSunIcon);
    setTheme(theme === "theme-light" ? "theme-dark" : "theme-light");
  };

  return (
    <header>
      <div className="logo-container">
        <Image
          fill
          style={{ objectFit: "contain" }}
          alt="Immverse logo"
          src={logo}
        />
      </div>
      <nav>
        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#about">About Us</Link>
          </li>
          <li>
            <Link href="#team">Team</Link>
          </li>
          <li>
            <Link href="#contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className="right">
        <button type="button">
          <BsApple size={16} />
          <FiDownload size={16} />
        </button>
        <button type="button">
          <FaGooglePlay size={16} />
          <FiDownload size={16} />
        </button>
        <button className="theme-button" onClick={handleThemeToggle}>
          {isSunIcon ? (
            <BsFillMoonFill size={20} />
          ) : (
            <BsFillSunFill size={20} />
          )}
        </button>
      </div>
    </header>
  );
}
