import React, { useState } from 'react';
import { scenarioData } from '../data/scenarioData';
import KpiCard from '../components/KpiCard';
import EfficiencyChart from '../components/EfficiencyChart';
import DominanceChart from '../components/DominanceChart';
import WaterfallChart from '../components/WaterfallChart';

const ExecutiveView = () => {
  const [scenario, setScenario] = useState('strategic');

  const handleScenarioChange = (newScenario) => {
    setScenario(newScenario);
  };

  const currentScenarioData = scenarioData[scenario];

  return (
    <div className="bg-background-dark text-white min-h-screen font-display">
      <main className="flex-grow max-w-screen-2xl mx-auto w-full p-4 sm:p-6 lg:p-8 space-y-6">
        <div className="flex justify-end mb-4">
            <div className="hidden lg:flex bg-black/40 p-1.5 rounded-md border border-border-dark/50 backdrop-blur-sm">
                <button
                className={`scenario-btn px-4 py-2 text-xs font-mono uppercase tracking-wider ${scenario === 'conservative' ? 'active' : 'text-text-muted-dark hover:text-white'}`}
                onClick={() => handleScenarioChange('conservative')}
                >
                Conservative
                </button>
                <button
                className={`scenario-btn px-4 py-2 text-xs font-mono uppercase tracking-wider ${scenario === 'strategic' ? 'active' : 'text-text-muted-dark hover:text-white'}`}
                onClick={() => handleScenarioChange('strategic')}
                >
                Strategic
                </button>
                <button
                className={`scenario-btn px-4 py-2 text-xs font-mono uppercase tracking-wider ${scenario === 'aggressive' ? 'active' : 'text-text-muted-dark hover:text-white'}`}
                onClick={() => handleScenarioChange('aggressive')}
                >
                Aggressive
                </button>
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <KpiCard
            title="Total Valuation"
            value={currentScenarioData.kpi.valuation}
            delta={currentScenarioData.kpi.valuationDelta}
            barPercentage={currentScenarioData.kpi.valuationBar}
          />
          <KpiCard
            title="Net Benefit"
            value={currentScenarioData.kpi.benefit}
            delta={currentScenarioData.kpi.benefitDelta}
            barPercentage={currentScenarioData.kpi.benefitBar}
          />
          <KpiCard
            title="ROI"
            value={currentScenarioData.kpi.roi}
            delta={currentScenarioData.kpi.roiDelta}
            barPercentage={currentScenarioData.kpi.roiBar}
          />
          <KpiCard
            title="Operational Eff."
            value={currentScenarioData.kpi.efficiency}
            delta={currentScenarioData.kpi.efficiencyDelta}
            barPercentage={currentScenarioData.kpi.efficiencyBar}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[450px]">
          <div className="lg:col-span-2 bg-surface-dark border border-border-dark p-6 rounded flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-2 border-l-2 border-t-2 border-primary"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-r-2 border-t-2 border-primary"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-l-2 border-b-2 border-primary"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-r-2 border-b-2 border-primary"></div>
            <div className="flex justify-between items-start mb-6 z-10 border-b border-border-dark pb-4">
                <div>
                    <h3 className="text-base font-bold uppercase tracking-[0.15em] text-white">Capital Expenditure vs. Net Impact</h3>
                    <p className="font-mono text-[10px] text-primary mt-1 uppercase tracking-widest">// Financial Composed Chart</p>
                </div>
                <div className="flex gap-2">
                    <div className="px-3 py-1 border border-primary/30 bg-primary/5 text-[10px] font-mono text-primary uppercase tracking-wider backdrop-blur-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary mr-2"></span>
                        Mode: <span className="text-white scenario-label font-bold ml-1">{scenario}</span>
                    </div>
                </div>
            </div>
            <div className="flex-grow chart-container relative w-full z-10">
              <EfficiencyChart data={currentScenarioData.charts} />
            </div>
          </div>
          <div className="bg-surface-dark border border-border-dark p-6 flex flex-col relative overflow-hidden">
            <div className="mb-4 z-10">
              <h3 className="text-base font-bold uppercase tracking-[0.15em] text-white">Market Dominance</h3>
              <p className="font-mono text-[10px] text-text-muted-dark mt-1 uppercase tracking-widest">// Trajectory Analysis</p>
            </div>
            <div className="flex-grow chart-container relative w-full z-10">
              <DominanceChart data={currentScenarioData.charts} />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-border-dark pt-4 z-10">
              <div className="pl-3 border-l-2 border-signal-emerald">
                <p className="font-mono text-[9px] text-text-muted-dark uppercase mb-1 tracking-wider">Current Share</p>
                <p className="text-2xl font-bold text-signal-emerald font-display">{currentScenarioData.charts.share[currentScenarioData.charts.share.length - 1]}%</p>
              </div>
              <div className="pl-3 border-l-2 border-primary">
                <p className="font-mono text-[9px] text-text-muted-dark uppercase mb-1 tracking-wider">Target Reach</p>
                <p className="text-2xl font-bold text-primary font-display">{currentScenarioData.charts.shareProj}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-surface-dark border border-border-dark p-6 lg:col-span-1 relative overflow-hidden">
                <div className="mb-4 relative z-10 flex justify-between items-start">
                    <div>
                        <h3 className="text-base font-bold uppercase tracking-[0.15em] text-white">Value Waterfall</h3>
                        <p className="font-mono text-[10px] text-text-muted-dark mt-1 uppercase tracking-widest">// Component Breakdown</p>
                    </div>
                    <span className="material-symbols-outlined text-border-dark text-xl">waterfall_chart</span>
                </div>
                <div className="chart-container relative z-10" style={{ height: '250px' }}>
                    <WaterfallChart data={currentScenarioData.charts} />
                </div>
            </div>
            <div className="bg-surface-dark border border-border-dark p-0 lg:col-span-2 relative flex flex-col overflow-hidden">
                <div className="p-4 border-b border-border-dark flex justify-between items-center relative z-10 bg-surface-dark/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-lg">radar</span>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-white">Signal Intelligence</h3>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-none bg-signal-emerald animate-pulse"></span>
                        <span className="px-2 py-0.5 text-[9px] font-mono border border-signal-emerald text-signal-emerald bg-signal-emerald/5 tracking-widest">LIVE FEED</span>
                    </div>
                </div>
                <div className="flex-grow overflow-y-auto max-h-[250px] relative z-10 custom-scrollbar">
                    <table className="w-full text-left font-mono text-xs">
                        <thead className="border-b border-border-dark text-text-muted-dark uppercase sticky top-0 bg-surface-dark z-20">
                            <tr>
                                <th className="py-3 pl-4 tracking-wider">St</th>
                                <th className="py-3 tracking-wider">Timestamp</th>
                                <th className="py-3 tracking-wider">Origin</th>
                                <th className="py-3 tracking-wider w-1/3">Event Descriptor</th>
                                <th className="py-3 text-right pr-4 tracking-wider">Impact</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-dark/50">
                            {/* Table rows would be dynamically generated here */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ExecutiveView;
