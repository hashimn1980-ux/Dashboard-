import React from 'react';
import DeploymentNode from '../components/DeploymentNode';
import FinancialTrajectoryChart from '../components/FinancialTrajectoryChart';
import EfficiencyMatrix from '../components/EfficiencyMatrix';

const ImplementationView = () => {
    const deploymentNodes = [
        {
            nodeId: 'NODE_ID: PROP_AI_01',
            title: 'AI Valuation Engine',
            status: 'OPERATIONAL',
            inputs: ['TensorFlow', 'RE Data API', 'PyTorch'],
            metrics: [
                { label: 'Accuracy', value: '98.4%' },
                { label: 'Latency', value: '12ms' },
            ],
        },
        {
            nodeId: 'NODE_ID: CRM_BLOCK_04',
            title: 'Client Portal CRM',
            status: 'WARNING',
            isWarning: true,
            inputs: ['Salesforce', 'AWS Lambda'],
            metrics: [
                { label: 'Uptime', value: '94.2%', isWarning: true },
                { label: 'Load', value: '85%' },
            ],
        },
        {
            nodeId: 'NODE_ID: BLOCKCHAIN_09',
            title: 'Tokenization Layer',
            status: 'QUEUED',
            isQueued: true,
            inputs: [],
            metrics: [],
        },
    ];

  return (
    <div className="bg-background-dark text-white min-h-screen font-display">
      <main className="relative min-h-[calc(100vh-64px)] bg-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/80 to-background-dark pointer-events-none"></div>
        <div className="max-w-[1920px] mx-auto p-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6 border-b border-border-dark pb-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <span className="material-symbols-outlined text-primary text-xl">view_quilt</span>
                <h2 className="text-3xl font-bold uppercase tracking-widest text-white gold-glow-text">Implementation View</h2>
              </div>
              <p className="font-mono text-xs text-primary tracking-wide uppercase pl-8 border-l border-zinc-800 ml-2.5">
                Tactical Execution // Digital Infrastructure Deployment // Phase 4.2
              </p>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-surface-dark border border-primary/20 px-4 py-1.5">
                <span className="w-1.5 h-1.5 bg-signal-emerald animate-pulse"></span>
                <span className="font-mono text-xs text-primary">LIVE DATA STREAM</span>
              </div>
              <button className="bg-primary/90 hover:bg-primary text-black text-xs font-bold uppercase tracking-wider px-6 py-2 transition-all flex items-center gap-2 border border-primary shadow-[0_0_10px_rgba(212,175,55,0.2)]">
                <span className="material-symbols-outlined text-sm font-bold">download</span>
                Export Report
              </button>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-4 xl:col-span-3 flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2 border-l-2 border-primary pl-3 flex justify-between items-center">
                    Active Deployment Nodes
                    <span className="text-[10px] font-mono text-primary/70">3 ONLINE</span>
                </h3>
              {deploymentNodes.map((node, index) => (
                <DeploymentNode key={index} {...node} />
              ))}
            </div>
            <div className="col-span-12 lg:col-span-8 xl:col-span-6 flex flex-col gap-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2 border-l-2 border-signal-emerald pl-3 flex justify-between items-center">
                Financial Trajectory
                <span className="text-[10px] font-mono text-signal-emerald">GROWTH VECTOR: POSITIVE</span>
              </h3>
              <div className="bg-surface-dark border border-zinc-800 p-6 h-[460px] relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-6 relative z-10">
                      <div>
                          <div className="text-4xl font-mono text-white font-bold tracking-tight gold-glow-text">$4.2M <span className="text-base text-signal-emerald ml-2 font-display font-medium align-middle">▲ 124%</span></div>
                          <div className="text-[10px] text-zinc-500 uppercase tracking-[0.2em] mt-1 font-bold">Projected Net Cashflow</div>
                      </div>
                      <div className="flex gap-2">
                          <button className="px-3 py-1 text-[10px] font-mono uppercase bg-primary/20 text-primary border border-primary font-bold hover:bg-primary hover:text-black transition-colors">Q4 2024</button>
                          <button className="px-3 py-1 text-[10px] font-mono uppercase border border-zinc-800 text-zinc-600 hover:text-zinc-300 hover:border-zinc-600 transition-colors">Q1 2025</button>
                      </div>
                  </div>
                  <div className="w-full h-[320px] relative z-10">
                    <FinancialTrajectoryChart />
                  </div>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-3 flex flex-col gap-4">
                <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-2 border-l-2 border-alert-amber pl-3 flex justify-between items-center">
                    Efficiency Matrix
                    <span className="text-[10px] font-mono text-alert-amber">ALERT</span>
                </h3>
              <EfficiencyMatrix />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ImplementationView;
