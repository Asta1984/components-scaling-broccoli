import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Instagram, 
  Linkedin, 
  TwitterIcon, 
  Moon, 
  SendHorizonal, 
  Sun, 
  Facebook,
  Github
} from "lucide-react";

// Modernized social links with additional platforms
const SOCIAL_LINKS = [
  { href: "https://twitter.com", icon: TwitterIcon, label: "Twitter" },
  { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
  { href: "https://linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://github.com", icon: Github, label: "Github" }
];

const NAV_ITEMS = [
  { to: "/features", label: "Features" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/products", label: "Products" }
];

const Footer = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    // Check system preference initially
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDarkMode(prefersDark);
  }, []);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription for:", email);
    setEmail("");
  };

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Newsletter Section */}
          <div className="relative">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
            <p className="mb-6 text-sm text-muted-foreground">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-md border px-3 py-2 pr-12"
                required
              />
              <button
                type="submit"
                className="absolute right-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <SendHorizonal className="h-4 w-4" />
                <span className="sr-only">Subscribe to newsletter</span>
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`block text-sm transition-colors hover:text-primary ${
                    location.pathname === item.to ? "text-primary" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <address className="not-italic space-y-2 text-sm">
              <p>Lake View Road, Shymala Hills</p>
              <p>Bhopal, Madhya Pradesh</p>
              <p>
                <a href="tel:+917067456439" className="hover:text-primary">
                  (+91) 706-745-6439
                </a>
              </p>
            </address>
          </div>

          {/* Social Links and Theme Toggle */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="mb-6 flex flex-wrap gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2 transition-colors hover:bg-primary hover:text-primary-foreground border"
                  aria-label={link.label}
                >
                  <link.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Sun className="h-4 w-4" aria-hidden="true" />
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-pressed={isDarkMode}
              >
                <span className="sr-only">Toggle dark mode</span>
                <div
                  className={`${
                    isDarkMode ? "bg-primary" : "bg-gray-200"
                  } h-5 w-10 rounded-full transition-colors`}
                >
                  <div
                    className={`${
                      isDarkMode ? "translate-x-5" : "translate-x-0"
                    } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                  />
                </div>
              </button>
              <Moon className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sewantika. All rights reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            {[
              { to: "/privacy", label: "Privacy Policy" },
              { to: "/terms", label: "Terms of Service" },
              { to: "/cookies", label: "Cookie Settings" }
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;