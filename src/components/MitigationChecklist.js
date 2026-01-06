import React from 'react';

const MitigationChecklist = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="border border-border-dark bg-zinc-900/50 p-4 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-critical"></div>
        <div className="flex items-center justify-between mb-4 pl-3">
          <h3 className="font-display text-lg uppercase font-bold text-white">Immediate Mitigation</h3>
          <span className="text-xs font-mono text-critical border border-critical px-2 py-0.5 rounded-sm">PRIORITY 1</span>
        </div>
        <ul className="space-y-2 pl-3">
          <li className="flex items-start gap-3 group">
            <input className="mt-1 w-3 h-3 border border-zinc-600 bg-transparent rounded-none checked:bg-critical checked:border-critical focus:ring-0 focus:ring-offset-0 cursor-pointer" type="checkbox" />
            <div className="flex-1">
              <span className="block text-sm font-bold text-zinc-200 group-hover:text-critical transition-colors">Sector 7 Liquidity Crunch</span>
              <span className="block text-[10px] text-zinc-500 font-mono uppercase">Action: Inject Reserves // Monitor Flux</span>
            </div>
          </li>
          <li className="flex items-start gap-3 group border-t border-zinc-800 pt-2">
            <input className="mt-1 w-3 h-3 border border-zinc-600 bg-transparent rounded-none checked:bg-critical checked:border-critical focus:ring-0 focus:ring-offset-0 cursor-pointer" type="checkbox" />
            <div className="flex-1">
              <span className="block text-sm font-bold text-zinc-200 group-hover:text-critical transition-colors">Data Breach Attempt [Firewall]</span>
              <span className="block text-[10px] text-zinc-500 font-mono uppercase">Action: Rotate Keys // Trace Source IP</span>
            </div>
          </li>
        </ul>
      </div>
      <div className="border border-border-dark bg-zinc-900/50 p-4 relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>
        <div className="flex items-center justify-between mb-4 pl-3">
          <h3 className="font-display text-lg uppercase font-bold text-white">Active Watchlist</h3>
          <span className="text-xs font-mono text-primary border border-primary px-2 py-0.5 rounded-sm">MONITORING</span>
        </div>
        <ul className="space-y-2 pl-3">
          <li className="flex items-start gap-3 group">
            <div className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            <div className="flex-1">
              <span className="block text-sm font-bold text-zinc-200">Competitor Acquisition: Nexus Corp</span>
              <span className="block text-[10px] text-zinc-500 font-mono uppercase">Status: Analyzing Market Impact</span>
            </div>
            <span className="text-[10px] text-zinc-600 font-mono">2m ago</span>
          </li>
          <li className="flex items-start gap-3 group border-t border-zinc-800 pt-2">
            <div className="mt-1.5 w-1.5 h-1.5 bg-zinc-600 rounded-full"></div>
            <div className="flex-1">
              <span className="block text-sm font-bold text-zinc-400">Q4 Projection Variance</span>
              <span className="block text-[10px] text-zinc-600 font-mono uppercase">Status: Within Tolerance</span>
            </div>
            <span className="text-[10px] text-zinc-600 font-mono">4h ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MitigationChecklist;
