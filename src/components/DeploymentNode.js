import React from 'react';

const DeploymentNode = ({ nodeId, title, status, inputs, metrics, isWarning, isQueued }) => {
  const getStatusClass = () => {
    if (isWarning) return 'border-alert-amber text-alert-amber';
    if (isQueued) return 'border-zinc-700 text-zinc-400';
    return 'border-signal-emerald text-signal-emerald';
  };
    const getStatusBgClass = () => {
        if (isWarning) return 'bg-alert-amber/10';
        if (isQueued) return 'bg-zinc-800/50';
        return 'bg-signal-emerald/10';
    };


  return (
    <div className={`bg-surface-dark border border-zinc-800 p-0 hover:border-primary transition-all duration-300 group shadow-lg relative overflow-hidden ${isQueued ? 'opacity-75' : ''}`}>
      <div className="p-4 border-b border-zinc-800 flex justify-between items-start bg-zinc-900/50">
        <div>
          <div className={`text-[9px] font-mono mb-1 tracking-wider ${getStatusClass()}`}>{nodeId}</div>
          <h4 className={`text-lg font-bold uppercase text-zinc-100 group-hover:text-primary transition-colors tracking-wide ${isQueued ? 'text-zinc-300' : ''}`}>{title}</h4>
        </div>
        <span className="material-symbols-outlined text-zinc-600 group-hover:text-primary transition-colors">
          {isWarning ? 'dns' : isQueued ? 'lock_clock' : 'memory'}
        </span>
      </div>
      {!isQueued && (
        <div className="p-4 grid grid-cols-2 gap-4">
          <div>
            <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2 border-b border-zinc-800 pb-1">Input Tools</div>
            <ul className="text-xs text-zinc-400 font-mono space-y-1.5">
              {inputs.map((input, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className={`w-1 h-1 ${isWarning ? 'bg-alert-amber' : 'bg-primary'}`}></span> {input}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[9px] font-mono text-zinc-500 uppercase mb-2 border-b border-zinc-800 pb-1">Metrics (Output)</div>
            {metrics.map((metric, index) => (
              <div key={index} className="flex items-center justify-between mb-1.5">
                <span className="text-xs text-zinc-400">{metric.label}</span>
                <span className={`text-xs font-mono font-bold ${metric.isWarning ? 'text-alert-amber' : 'text-signal-emerald'}`}>{metric.value}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      <div className="bg-black/40 px-4 py-2 border-t border-zinc-800 flex justify-between items-center mt-auto">
        <span className="text-[9px] uppercase font-bold text-zinc-600 tracking-wider">Status</span>
        <span className={`text-[9px] font-mono px-2 py-0.5 border flex items-center gap-1 ${getStatusClass()} ${getStatusBgClass()}`}>
            {!isQueued && <span className={`w-1 h-1 rounded-full animate-pulse ${isWarning ? 'bg-alert-amber' : 'bg-signal-emerald'}`}></span>}
            {status}
        </span>
      </div>
    </div>
  );
};

export default DeploymentNode;
