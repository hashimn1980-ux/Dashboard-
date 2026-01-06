import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="w-full border-b border-border-dark bg-surface-dark sticky top-0 z-50">
      <div className="max-w-[1920px] mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 border border-primary flex items-center justify-center relative group cursor-pointer">
            <span className="material-symbols-outlined text-primary text-2xl">apartment</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-widest uppercase text-white leading-none">AL AMEEN <span className="text-zinc-500 font-light">AL-MAJALI</span></h1>
            <span className="text-xs font-mono text-primary tracking-[0.2em] uppercase mt-1">Proptech // Command Center</span>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/dashboard" className={({ isActive }) => `text-xs uppercase tracking-widest ${isActive ? 'text-primary font-bold' : 'text-zinc-400'} hover:text-primary transition-colors`}>
            Executive
          </NavLink>
          <NavLink to="/implementation" className={({ isActive }) => `text-xs uppercase tracking-widest ${isActive ? 'text-primary font-bold' : 'text-zinc-400'} hover:text-primary transition-colors`}>
            Implementation
          </NavLink>
          <NavLink to="/risk" className={({ isActive }) => `text-xs uppercase tracking-widest ${isActive ? 'text-primary font-bold' : 'text-zinc-400'} hover:text-primary transition-colors`}>
            Risk Protocol
          </NavLink>
        </nav>
        <div className="flex items-center gap-4">
          <button className="p-2 text-zinc-400 hover:text-primary border border-transparent hover:border-border-dark transition-all rounded-sm">
            <span className="material-icons-outlined text-sm">notifications</span>
          </button>
          <div className="h-8 w-px bg-border-dark mx-2"></div>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-zinc-800 border border-border-dark flex items-center justify-center">
              <span className="font-mono text-xs text-primary font-bold">AM</span>
            </div>
            <div className="hidden lg:block text-right">
              <div className="text-xs font-bold uppercase tracking-wider text-white">Admin View</div>
              <div className="text-[10px] font-mono text-signal-emerald">SECURE_CONN_EST</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
