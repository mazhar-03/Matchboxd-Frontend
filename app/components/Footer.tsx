// footer.tsx
import { Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black py-8 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/pro" className="hover:text-white transition">Pro</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-500 transition">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-center sm:text-right">
            © {currentYear} Mazhar Altınçay. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}