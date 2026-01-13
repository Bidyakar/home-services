"use client"; // Footer has interactive links/icons

import Link from "next/link";

export default function Footer() {
  // Declare resources here, outside JSX
  const resources = [
    { name: "Company", href: "/company" },
    { name: "Blogs", href: "/blogs" },
    { name: "Community", href: "/community" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
  ];

  return (
    <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-gradient-to-b from-[#000001] to-[#340063] font-poppins">
      {/* Logo + Links */}
      <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
        {/* Logo */}
        <a href="/">
          <span className="relative top-15 left-4 text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            ServiceHub
          </span>
        </a>

        {/* Product Links */}
        <div>
          <p className="text-slate-100 font-semibold">Product</p>
          <ul className="mt-2 space-y-2">
            {["Home", "Support", "Pricing", "Affiliate"].map((link) => (
              <li key={link}>
                <a href="/" className="hover:text-indigo-600 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources Links */}
        <div>
          <p className="text-slate-100 font-semibold">Resources</p>
          <ul className="mt-2 space-y-2">
            {resources.map((resource) => (
              <li key={resource.name} className="flex items-center gap-1">
                <Link
                  href={resource.href}
                  className="hover:text-indigo-600 transition"
                >
                  {resource.name}
                </Link>

                {resource.name === "Careers" && (
                  <span className="text-xs text-white bg-indigo-600 rounded-md px-2 py-1">
                    We’re hiring!
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Legal Links */}
        <div>
          <p className="text-slate-100 font-semibold">Legal</p>
          <ul className="mt-2 space-y-2">
            {["Privacy", "Terms"].map((link) => (
              <li key={link}>
                <a href="/" className="hover:text-indigo-600 transition">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social & Copyright */}
      <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
        <p className="max-w-xs">
          Making every customer feel valued—no matter the size of your audience.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-3">
          {/* Example: Dribbble */}
          <a
            href="https://dribbble.com/prebuiltui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
              <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
              <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
            </svg>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/prebuiltui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
          {/* Twitter/X */}
          <a
            href="https://x.com/prebuiltui"
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
        </div>

        <p className="mt-3 text-center text-gray-400">
          © 2025 <a href="https://prebuiltui.com">PrebuiltUI</a>
        </p>
      </div>
    </footer>
  );
}
