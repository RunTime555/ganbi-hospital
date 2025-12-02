import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/siteContent.js';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const renderLinks = (variant = 'desktop') =>
    navLinks.map((link) => (
      <NavLink
        key={link.path}
        to={link.path}
        onClick={() => setOpen(false)}
        className={({ isActive }) =>
          [
            'text-sm font-semibold tracking-wide transition-colors duration-200',
            variant === 'mobile' ? 'block py-2' : 'px-2 py-1',
            isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white',
          ].join(' ')
        }
      >
        {link.label}
      </NavLink>
    ));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-teal-600/20 bg-gradient-to-r from-teal-600 to-cyan-600 backdrop-blur shadow-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-white">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/20 text-white shadow-soft backdrop-blur-sm">
            GG
          </span>
          Ganbi General Hospital
        </Link>
        <nav className="hidden items-center gap-4 lg:flex">{renderLinks()}</nav>
        <button
          type="button"
          className="lg:hidden"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute block h-0.5 w-full bg-white transition ${
                open ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-full bg-white transition ${
                open ? 'opacity-0' : 'top-2'
              }`}
            />
            <span
              className={`absolute block h-0.5 w-full bg-white transition ${
                open ? 'top-2 -rotate-45' : 'top-4'
              }`}
            />
          </span>
        </button>
      </div>
      {open && (
        <div className="border-t border-teal-500/30 bg-teal-600/95 backdrop-blur px-4 py-4 shadow-soft lg:hidden">
          <nav className="flex flex-col space-y-2">{renderLinks('mobile')}</nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

