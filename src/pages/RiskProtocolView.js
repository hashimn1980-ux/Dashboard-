import React from 'react';
import RiskMatrixHeatmap from '../components/RiskMatrixHeatmap';
import MitigationChecklist from '../components/MitigationChecklist';

const RiskProtocolView = () => {
  return (
    <div className="bg-background-dark text-white min-h-screen font-display">
      <main className="flex-1 flex overflow-hidden relative">
        <div className="absolute inset-0 grid-bg pointer-events-none"></div>
        <div className="scanline"></div>
        <section className="flex-1 flex flex-col overflow-y-auto p-6 z-10">
          <header className="flex items-end justify-between mb-6 pb-2 border-b border-border-dark">
            <div>
              <h2 className="font-display text-3xl font-bold uppercase tracking-widest text-white">Risk Matrix Heatmap</h2>
              <p className="text-xs text-zinc-500 mt-1 uppercase tracking-wider font-mono">Coordinate System: Probability (X) vs. Impact (Y)</p>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 border border-primary bg-primary/10 text-primary text-xs font-bold uppercase hover:bg-primary hover:text-black transition-all">
                Refresh Data
              </button>
              <button className="px-4 py-2 border border-border-dark text-zinc-400 text-xs font-bold uppercase hover:bg-white hover:text-black transition-all">
                Export Report
              </button>
            </div>
          </header>
          <RiskMatrixHeatmap />
          <MitigationChecklist />
        </section>
        <aside className="w-80 border-l border-border-dark bg-surface-dark flex-col z-10 hidden xl:flex">
          <div className="p-6 border-b border-border-dark">
            <h3 className="font-display text-lg uppercase font-bold tracking-widest text-zinc-400 mb-4">Node Details</h3>
            <div className="bg-zinc-900 border border-zinc-800 p-4 mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase text-zinc-500">ID</span>
                <span className="text-xs font-mono text-white">#TH-9921</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs uppercase text-zinc-500">Class</span>
                <span className="text-xs font-mono text-critical">FINANCIAL_RISK</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs uppercase text-zinc-500">Origin</span>
                <span className="text-xs font-mono text-white">External/Market</span>
              </div>
            </div>
            <div className="relative w-full h-32 border border-zinc-800 bg-zinc-900/50 mb-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="text-primary opacity-50" height="60" preserveAspectRatio="none" viewBox="0 0 200 60" width="100%">
                        <path d="M0,30 L10,25 L20,35 L30,20 L40,30 L50,10 L60,40 L70,30 L80,35 L90,20 L100,30 L110,25 L120,45 L130,15 L140,30 L150,25 L160,35 L170,30 L180,25 L190,35 L200,30" fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke"></path>
                    </svg>
                </div>
                <div className="absolute bottom-1 right-2 text-[9px] text-zinc-500 font-mono">TREND ANALYSIS (24H)</div>
            </div>
            <button className="w-full py-3 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2">
                <span className="material-icons-outlined text-base">play_arrow</span>
                Initiate Protocol
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default RiskProtocolView;
