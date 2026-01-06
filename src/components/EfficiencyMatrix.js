import React from 'react';

const EfficiencyMatrix = () => {
  const departments = [
    { name: 'Engineering', efficiency: 92, revenue: 1.2, color: 'text-signal-emerald' },
    { name: 'Sales', efficiency: 74, revenue: 2.8, color: 'text-alert-amber' },
    { name: 'Marketing', efficiency: 45, revenue: 0.6, color: 'text-critical-rose' },
    { name: 'Operations', efficiency: 88, revenue: 1.1, color: 'text-zinc-400' },
  ];

  return (
    <div className="bg-surface-dark border border-zinc-800 p-6 h-full flex flex-col relative">
      <div className="mb-8">
        <h4 className="text-sm font-bold uppercase text-white tracking-wider">Departmental Yield</h4>
        <p className="text-[10px] text-zinc-500 font-mono mt-1">Efficiency vs Revenue Delta</p>
      </div>
      <div className="flex-grow flex flex-col justify-center gap-7">
        {departments.map((dept) => (
          <div key={dept.name} className="relative group">
            <div className="flex justify-between text-[10px] font-bold uppercase mb-1.5 items-end">
              <span className="text-zinc-400 font-mono tracking-tight">{dept.name}</span>
              <span className={`${dept.color} font-mono`}>{dept.efficiency}%</span>
            </div>
            <div className="w-full bg-zinc-900 border border-zinc-800 h-3 mb-1 relative">
              <div
                className="bg-zinc-600 h-full relative transition-all duration-1000 group-hover:bg-primary"
                style={{ width: `${dept.efficiency}%` }}
              >
                <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-white shadow-[0_0_8px_white]"></div>
              </div>
            </div>
            <div className="flex justify-end text-[9px] font-mono text-primary/70">REV: ${dept.revenue}M</div>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-4 border-t border-zinc-800/80 border-dashed">
        <div className="flex items-center gap-2 text-[10px] text-zinc-500 font-mono">
          <span className="material-symbols-outlined text-[10px] text-primary">warning</span>
          <span className="uppercase tracking-wider">Threshold: 80% Efficiency Required</span>
        </div>
      </div>
    </div>
  );
};

export default EfficiencyMatrix;
