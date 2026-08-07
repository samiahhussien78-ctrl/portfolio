import React, { memo, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { Sun, Moon, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

const headerVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 20,
    },
  },
};

const navLinks = [
  { to: "/about", label: "about" },
  { to: "/skills", label: "skills" },
  { to: "/academics", label: "education" },
  { to: "/projects", label: "projects" },
  { to: "/contact", label: "contact" },
];

const Header = memo(({ toggleTheme, currentTheme, onHamburgerClick }) => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const handleThemeToggle = useCallback(
    (e) => {
      toggleTheme();
      e.currentTarget.blur();
    },
    [toggleTheme]
  );

  const ThemeIcon = useMemo(
    () => (currentTheme === "light" ? Moon : Sun),
    [currentTheme]
  );

  const themeAriaLabel = useMemo(
    () => `Switch to ${currentTheme === "light" ? "dark" : "light"} mode`,
    [currentTheme]
  );

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-4 bg-muted/70 dark:bg-muted/50 backdrop-blur-md shadow-md border-b border-border/40"
      style={{ willChange: "transform", transform: "translate3d(0,0,0)" }}
    >
      <Link
        to="/"
        className="text-2xl sm:text-3xl font-extrabold text-primary tracking-wide select-none hover:opacity-80 transition"
      >
        Samiah Basher
      </Link>

      <nav className="hidden min-[935px]:flex gap-2 sm:gap-4 md:gap-6 items-center">
        {navLinks.map((link) => {
          const isActive =
            location.pathname === link.to ||
            (link.to === "/about" && location.pathname === "/");

          return (
            <Link
              key={link.to}
              to={link.to}
              className={`px-3 py-1.5 rounded-md text-base font-medium transition-colors duration-150 ${
                isActive
                  ? "text-primary bg-primary/10 dark:bg-primary/20"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              }`}
            >
              {t(link.label)}
            </Link>
          );
        })}

        {/* زر تغيير اللغة */}
        <button
          onClick={() =>
            i18n.changeLanguage(i18n.language === "en" ? "ar" : "en")
          }
          className="px-3 py-1 rounded-md border text-sm hover:bg-primary/10"
        >
          {i18n.language === "en" ? "العربية" : "English"}
        </button>

        <button
          onClick={handleThemeToggle}
          type="button"
          className="ml-2 p-2 rounded-full text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
          aria-label={themeAriaLabel}
        >
          <ThemeIcon className="w-6 h-6" />
        </button>
      </nav>

      <div className="flex max-[934px]:flex hidden items-center gap-2">
        <button
          onClick={handleThemeToggle}
          type="button"
          className="p-2 rounded-full text-muted-foreground hover:text-primary transition-transform duration-200 hover:scale-110"
          aria-label={themeAriaLabel}
        >
          <ThemeIcon className="w-6 h-6" />
        </button>

        <button
          type="button"
          onClick={onHamburgerClick}
          aria-label="Open menu"
          className="ml-1 flex items-center justify-center w-14 h-14 rounded-full hover:bg-primary/10 active:scale-95 transition"
        >
          <Menu className="w-9 h-9 text-primary" />
        </button>
      </div>
    </motion.header>
  );
});

Header.displayName = "Header";

export default Header;