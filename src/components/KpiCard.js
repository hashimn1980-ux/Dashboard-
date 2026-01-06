import React from 'react';

const KpiCard = ({ title, value, delta, barPercentage }) => {
    const getDeltaHTML = (deltaStr) => {
        const val = parseFloat(deltaStr);
        const isPositive = val > 0;
        const isNegative = val < 0;
        let icon = 'horizontal_rule';
        let colorClass = 'text-text-muted-light dark:text-text-muted-dark';
        if(isPositive) {
            icon = 'arrow_upward';
            colorClass = 'text-signal-emerald';
        } else if(isNegative) {
            icon = 'arrow_downward';
            colorClass = 'text-critical-rose';
        }
        return (
            <span className={`material-symbols-outlined text-[12px] mr-1 ${colorClass}`}>{icon}</span>
        );
    };

  return (
    <div className="kpi-card bg-surface-dark border border-border-dark p-5 rounded group hover:border-primary/50 transition-colors relative overflow-hidden shadow-sm dark:shadow-none">
        <div className="kpi-glow"></div>
        <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
            {/* You can dynamically change this icon based on props if needed */}
            <span className="material-symbols-outlined text-5xl text-primary">account_balance_wallet</span>
        </div>
        <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
                <div className="flex items-center justify-between mb-2">
                    <p className="font-mono text-[10px] text-text-muted-dark uppercase tracking-[0.2em]">{title}</p>
                    <span className="w-2 h-2 rounded-full bg-border-dark group-hover:bg-primary transition-colors"></span>
                </div>
                <h3 className="text-4xl font-bold font-display tracking-tight text-white kpi-value">{value}</h3>
                <div className="mt-2 flex items-center gap-2 font-mono text-xs">
                    <span className="text-signal-emerald flex items-center bg-signal-emerald/10 px-1.5 py-0.5 border border-signal-emerald/20">
                        {getDeltaHTML(delta)} {delta}
                    </span>
                    <span className="text-[10px] text-text-muted-dark uppercase tracking-wider opacity-60">vs Target</span>
                </div>
            </div>
            <div className="mt-6 w-full h-[2px] bg-border-dark relative">
                <div className="absolute top-0 left-0 h-full bg-primary transition-all duration-700 ease-out" style={{ width: barPercentage }}></div>
            </div>
        </div>
    </div>
  );
};

export default KpiCard;
