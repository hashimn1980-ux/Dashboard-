import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroScreen = () => {
  const navigate = useNavigate();

  const handleInitialize = () => {
    navigate('/dashboard');
  };

  return (
    <div className="bg-[#050505] text-white font-display overflow-hidden h-screen w-full relative selection:bg-primary selection:text-black flex flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-overlay z-0 pointer-events-none"></div>
      <div className="scanline"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,5,0.8)_100%)] z-0 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col h-full justify-between p-6 md:p-10 border-[1px] border-primary/10 m-0 md:m-4 bg-background-dark/80 backdrop-blur-sm shadow-[0_0_50px_rgba(0,0,0,0.8)]">
        {/* Header */}
        <header className="flex items-start justify-between w-full border-b border-white/5 pb-6">
            <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4 mb-1">
                    <div className="w-10 h-10 border border-primary flex items-center justify-center relative bg-black/50">
                        <div className="w-6 h-6 border-t border-r border-secondary absolute top-2 right-2"></div>
                        <div className="w-6 h-6 border-b border-l border-primary absolute bottom-2 left-2"></div>
                        <span className="material-symbols-outlined text-primary text-[20px]">architecture</span>
                    </div>
                    <div>
                        <h1 className="text-xl font-serif font-bold tracking-widest text-gradient-gold leading-none">
                            AL AMEEN AL-MAJALI
                        </h1>
                        <h2 className="text-[10px] font-mono font-bold tracking-[0.4em] text-secondary uppercase mt-1">
                            Proptech Division
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-end gap-2">
                <div className="flex items-center gap-2 border border-primary/20 bg-primary/5 px-3 py-1 rounded-sm">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                    <span className="text-[10px] font-mono text-primary font-bold tracking-widest uppercase">System_Online</span>
                </div>
                <div className="font-mono text-[10px] text-gray-500 tracking-widest uppercase">
                    Auth: Secure // Level 9
                </div>
            </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center text-center py-10 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block"></div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-48 bg-gradient-to-b from-transparent via-primary/30 to-transparent hidden md:block"></div>
            <div className="flex flex-col items-center gap-10 max-w-5xl mx-auto">
                <div className="flex flex-col gap-4 relative">
                    <h1 aria-hidden="true" className="text-gray-800 text-xl md:text-2xl font-bold tracking-[0.5em] uppercase blur-[1px] select-none translate-y-2 opacity-50 font-mono">
                        // Chaos is Inevitable
                    </h1>
                    <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-bold tracking-widest uppercase leading-none relative z-20 drop-shadow-[0_0_20px_rgba(212,175,55,0.15)] font-display">
                        Order Is <br/>
                        <span className="text-gradient-gold relative">
                            Designed.
                            <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary opacity-50 hidden md:block"></span>
                        </span>
                    </h1>
                </div>
                <div className="mt-4 flex items-center gap-4 text-secondary/70 font-mono text-xs tracking-[0.2em] border-t border-b border-white/5 py-3 px-8 bg-black/40 backdrop-blur-md">
                    <span className="material-symbols-outlined text-[16px] animate-spin text-primary">data_saver_on</span>
                    <span>CALIBRATING ARCHITECTURAL PARAMETERS...</span>
                </div>
            </div>
            <div className="mt-20 group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 rounded-sm blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                <button
                    onClick={handleInitialize}
                    className="relative overflow-hidden bg-black/80 border border-primary/60 text-primary-light hover:bg-primary hover:text-black transition-all duration-300 ease-out h-16 px-12 flex items-center justify-center gap-4 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]">
                    <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary"></span>
                    <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary"></span>
                    <span className="absolute top-0 right-0 w-1 h-1 bg-primary opacity-50"></span>
                    <span className="absolute bottom-0 left-0 w-1 h-1 bg-primary opacity-50"></span>
                    <span className="material-symbols-outlined group-hover:animate-pulse">fingerprint</span>
                    <span className="font-bold tracking-[0.2em] text-lg font-mono">INITIALIZE PROTOCOL</span>
                </button>
                <div className="text-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 text-[9px] text-primary/60 font-mono tracking-widest uppercase">
                    Awaiting bio-metric confirmation
                </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="flex items-end justify-between w-full border-t border-white/5 pt-6 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[14px] text-primary">shield</span>
                    <span className="text-gray-400">Encrypted Connection // AES-256</span>
                </div>
                <div>Server Latency: 3ms</div>
            </div>
            <div className="flex gap-12 absolute left-1/2 -translate-x-1/2 bottom-6 hidden md:flex">
                <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
                    <span className="material-symbols-outlined text-[20px] group-hover:text-primary">domain</span>
                    <span className="text-[9px]">Assets</span>
                </div>
                <div className="flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
                    <span className="material-symbols-outlined text-[20px] group-hover:text-primary">hub</span>
                    <span className="text-[9px]">Network</span>
                </div>
                <div className="flex flex-col items-center gap-1 text-primary drop-shadow-[0_0_10px_rgba(212,175,55,0.5)]">
                    <span className="material-symbols-outlined text-[20px]">terminal</span>
                    <span className="text-[9px]">Console</span>
                </div>
            </div>
            <div className="text-right flex flex-col items-end">
                <div className="text-gray-600 mb-1">Session ID</div>
                <div className="text-primary font-bold">AMA-9921-X</div>
                <div className="h-px w-12 bg-primary/30 mt-1"></div>
            </div>
        </footer>
      </div>
    </div>
  );
};

export default IntroScreen;
