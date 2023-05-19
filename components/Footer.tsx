import Link from "next/link";
import { FaInstagramSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <p>
        Plot no. 3 , New Verma layout Opposite to Ambazari Lake (440033)
        9324672383
      </p>
      <p>© 2023 Immverse, all rights reserved</p>
      <nav>
        <div className="social">
          <Link href="https://www.instagram.com/immverse.ai/">
            <FaInstagramSquare size={25} />
          </Link>
          <Link href="https://www.linkedin.com/company/immverse-ai/">
            <FaLinkedinIn size={25} />
          </Link>
          <Link href=" https://twitter.com/ImmverseAI?s=20">
            <FaTwitter size={25} />
          </Link>
        </div>
        <ul>
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
    </footer>
  );
}
