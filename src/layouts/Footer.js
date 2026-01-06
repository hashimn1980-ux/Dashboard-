import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border-dark bg-surface-dark py-6 mt-8">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono text-text-muted-dark uppercase tracking-widest">
            <div className="flex items-center gap-4">
                <span className="text-primary font-bold">AL AMEEN AL-MAJALI PROPTECH</span>
                <span className="text-border-dark">|</span>
                <span>© 2024 STRATEGIC SYSTEMS</span>
            </div>
            <div className="flex gap-8 mt-4 md:mt-0 items-center">
                <div className="flex items-center gap-2">
                    <span className="w-1 h-1 bg-signal-emerald"></span>
                    <span>SYSTEM_V.1.0.5</span>
                </div>
                <span className="opacity-20">//</span>
                <span>SECURE LINK</span>
                <span className="opacity-20">//</span>
                <span className="text-primary border border-primary/20 px-2 py-0.5 bg-primary/5">ENCRYPTED_256</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
