'use client';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from './ui/theme-toggle';


export default function Navbar() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();


  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   // Navigation items
   const navItems = [
    { 
      to: "/features", 
      label: "Features",
      isActive: location.pathname === "/features"
    },
    { 
      to: "/about", 
      label: "About",
      isActive: location.pathname === "/about"
    },
    { 
      to: "/faq", 
      label: "FAQ",
      isActive: location.pathname === "/faq"
    },
    { 
      to: "/products", 
      label: "Products",
      isActive: location.pathname === "/products"
    }
  ];

  // Framer Motion animation variants
  const navVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { 
        duration: 0.2 
      }
    }
  };

  const mobileMenuVariants = {
    initial: { x: "100%", opacity: 0 },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { 
        type: "tween",
        duration: 0.3
      }
    },
    exit: { 
      x: "100%", 
      opacity: 0,
      transition: { 
        type: "tween",
        duration: 0.2 
      }
    }
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`fixed w-full bg-black/80 backdrop-blur-sm z-50 transition-[border-color] duration-200 ${
        hasScrolled ? 'border-b border-white/10' : 'border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold flex items-center gap-2 group"
          aria-label="Home"
        >
          <img 
            src="https://pub-d02e3aa7d09f4d5d9261e5d7e4bae228.r2.dev/logo.svg" 
            alt="Logo" 
            className='h-8 w-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300'
          />
          <span className="font-OnlinePrivileges text-foreground group-hover:text-cyan-500 transition-colors duration-300">
            SEWANTIKA</span>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-11 items-center">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-sm font-semibold transition-all duration-300 ${
                item.isActive 
                  ? 'text-primary' 
                  : 'text-muted-foreground hover:text-cyan-500 hover:scale-105'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:block">

          <div className="flex space-x-6">
          <div>
            <ThemeToggle />
          </div>
            <Button variant={"outline"}>Get Started</Button>
          </div>
        </div>
  
  

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                className="text-foreground hover:text-cyan-500  focus:outline-none transition-colors duration-300" 
                size="icon"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="w-full max-w-[600px] sm:max-w-[400px] bg-background/80 overflow-x-hidden"
            >
              <AnimatePresence>
                {isOpen && (
                  <motion.nav
                    variants={mobileMenuVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex flex-col gap-4 mt-8"
                  >
                    {navItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className={`text-lg font-semibold transition-colors duration-300 py-2 ${
                          item.isActive 
                            ? 'text-primary ' 
                            : 'text-muted-foreground hover:text-cyan-500'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                    <div className="mt-4 w-full">
                      <Button variant={"outline"}>Get Started</Button>
                      <div className='mt-20'>
                        <ThemeToggle/>
                      </div>
                    </div>
                  </motion.nav>
                )}
              </AnimatePresence>
            </SheetContent>

          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}