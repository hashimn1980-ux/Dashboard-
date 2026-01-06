import React from 'react';

const RiskMatrixHeatmap = () => {
  return (
    <div className="flex-1 min-h-[400px] border border-border-dark bg-surface-dark relative overflow-hidden mb-6 group">
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)', backgroundSize: '10% 10%' }}></div>
      <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-zinc-500 uppercase tracking-widest origin-center">Impact Severity →</div>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] text-zinc-500 uppercase tracking-widest">Probability of Occurrence →</div>
      <div className="absolute top-4 right-4 text-critical opacity-20 font-display text-4xl font-bold">CRITICAL</div>
      <div className="absolute bottom-4 left-4 text-secondary opacity-20 font-display text-4xl font-bold">NOMINAL</div>
      {/* Nodes */}
      <div className="absolute top-[15%] right-[20%] w-4 h-4 cursor-pointer z-10 group/node">
        <div className="absolute inset-0 bg-critical rounded-sm animate-pulse-slow"></div>
        <div className="absolute inset-0 border border-critical scale-150 opacity-50 rounded-sm"></div>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-zinc-900 border border-critical p-2 hidden group-hover/node:block z-20 shadow-xl shadow-black">
          <div className="text-[10px] text-critical font-bold uppercase mb-1">Threat: Market Volatility</div>
          <div className="text-[9px] text-zinc-400">Impact: 92% | Prob: 80%</div>
          <div className="mt-2 pt-2 border-t border-zinc-800 text-[9px] text-white">PROTOCOL: DIVERSIFY_ASSET_CLASS_04</div>
        </div>
      </div>
      <div className="absolute top-[45%] right-[45%] w-3 h-3 cursor-pointer z-10 group/node">
        <div className="absolute inset-0 bg-primary rounded-sm"></div>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-zinc-900 border border-primary p-2 hidden group-hover/node:block z-20 shadow-xl shadow-black">
          <div className="text-[10px] text-primary font-bold uppercase mb-1">Threat: Regulatory Shift</div>
          <div className="text-[9px] text-zinc-400">Impact: 55% | Prob: 55%</div>
          <div className="mt-2 pt-2 border-t border-zinc-800 text-[9px] text-white">PROTOCOL: COMPLIANCE_AUDIT_V2</div>
        </div>
      </div>
      <div className="absolute bottom-[25%] right-[15%] w-2 h-2 cursor-pointer z-10 group/node">
        <div className="absolute inset-0 bg-secondary rounded-sm"></div>
      </div>
      <div className="absolute top-[20%] left-[25%] w-2 h-2 cursor-pointer z-10 group/node">
        <div className="absolute inset-0 bg-primary rounded-sm opacity-60"></div>
      </div>
    </div>
  );
};

export default RiskMatrixHeatmap;
