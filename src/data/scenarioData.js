export const scenarioData = {
    conservative: {
        kpi: {
            valuation: "$3.8B", valuationDelta: "4.5%", valuationBar: "60%",
            benefit: "$620M", benefitDelta: "3.2%", benefitBar: "55%",
            roi: "18.2%", roiDelta: "0.0%", roiBar: "70%",
            efficiency: "96.5%", efficiencyDelta: "0.5%", efficiencyBar: "96.5%"
        },
        charts: {
            capex: [35, 40, 38, 45, 42, 48, 45, 50],
            impact: [15, 25, 30, 35, 40, 45, 50, 55],
            share: [15, 18, 20, 24.5],
            shareProj: "28.0%",
            waterfall: [[0, 100], [100, 115], [115, 130], [130, 125], [0, 125]]
        }
    },
    strategic: { // Base Case
        kpi: {
            valuation: "$4.2B", valuationDelta: "12.5%", valuationBar: "75%",
            benefit: "$842M", benefitDelta: "8.2%", benefitBar: "65%",
            roi: "24.5%", roiDelta: "-0.2%", roiBar: "84%",
            efficiency: "94.2%", efficiencyDelta: "1.1%", efficiencyBar: "94.2%"
        },
        charts: {
            capex: [45, 52, 48, 60, 55, 65, 58, 70],
            impact: [20, 35, 45, 42, 60, 75, 80, 95],
            share: [15, 22, 22, 32.4],
            shareProj: "45.0%",
            waterfall: [[0, 100], [100, 130], [130, 160], [160, 150], [0, 150]]
        }
    },
    aggressive: {
        kpi: {
            valuation: "$5.8B", valuationDelta: "24.8%", valuationBar: "95%",
            benefit: "$1.2B", benefitDelta: "18.4%", benefitBar: "92%",
            roi: "38.2%", roiDelta: "5.6%", roiBar: "98%",
            efficiency: "88.5%", efficiencyDelta: "-2.4%", efficiencyBar: "88.5%"
        },
        charts: {
            capex: [60, 75, 80, 95, 100, 120, 110, 140],
            impact: [25, 45, 60, 80, 100, 130, 150, 190],
            share: [15, 28, 35, 48.2],
            shareProj: "62.5%",
            waterfall: [[0, 100], [100, 160], [160, 220], [220, 190], [0, 190]]
        }
    }
};
