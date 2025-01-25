import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaSun,
  FaMoon,
} from "react-icons/fa";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

function Footerdemo() {
  const [isDarkMode, setIsDarkMode] = React.useState(true);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <footer className="relative border-t bg-background text-foreground transition-colors duration-300">
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block h-16 w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-current"
          ></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="relative">
            <h2 className="mb-4 text-3xl font-OnlinePrivileges tracking-tight">Stay Connected</h2>
            <p className="mb-6 font-Type_writer text-xs">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form className="relative">
              <Input
                type="email"
                placeholder="Enter your email"
                className="pr-12 backdrop-blur-sm"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 h-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <FaPaperPlane className="h-3 w-3" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>
          <div>
            <h3 className="mb-4 text-lg font-OnlinePrivileges">Quick Links</h3>
            <nav className="space-y-2 font-Type_writer text-xs">
              <Link to="/" className="block transition-colors hover:text-primary">
                Home
              </Link>
              <Link to="/about" className="block transition-colors hover:text-primary">
                About Us
              </Link>
              <Link to="/services" className="block transition-colors hover:text-primary">
                Services
              </Link>
              <Link to="/products" className="block transition-colors hover:text-primary">
                Products
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-OnlinePrivileges">Contact Us</h3>
            <address className="space-y-2 font-Type_writer text-xs">
              <p></p>
              <p>Lake View Road, Shymala Hills, Bhopal, Madhya Pradesh</p>
              <p>Tel No : (+91) 706-745-6439</p>
            </address>
          </div>
          <div className="relative">
            <h3 className="mb-4 text-lg font-OnlinePrivileges">Follow Us</h3>
            <div className="mb-6 flex justify-center space-x-4">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://x.com/mandal_sal88300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
                        <FaTwitter className="h-5 w-5" />
                        <span className="sr-only">Twitter</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on X</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.instagram.com/abhisheksinghh8/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
                        <FaInstagram className="h-5 w-5" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/in/salil-m-3a73b1138/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm" className="h-10 w-10 rounded-full">
                        <FaLinkedinIn className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaSun className="h-5 w-5" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <FaMoon className="h-5 w-5" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-center md:flex-row">
          <p className="font-Type_writer text-xs">© 2025 Sewantika. All rights reserved.</p>
          <nav className="flex gap-4 text-sm">
            <Link to="/privacy" className="transition-colors hover:text-primary">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-primary">
              Terms of Service
            </Link>
            <Link to="/cookies" className="transition-colors hover:text-primary">
              Cookie Settings
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { Footerdemo };
