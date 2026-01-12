"use client";

import React from 'react';
import { useBrandTheme } from '@/components/providers/brand-theme-provider';

export function MarketChart() {
    const { currentTheme } = useBrandTheme();

    return (
        <div className="relative w-full max-w-4xl mx-auto p-8">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Visual Chart - Concentric Circles / Radar Style */}
                <div className="relative aspect-square flex items-center justify-center">

                    {/* TAM - Total Addressable Market */}
                    <div className="absolute w-[100%] h-[100%] rounded-full border border-dashed flex items-start justify-center pt-4 transition-all duration-700 hover:scale-[1.02] group"
                        style={{ borderColor: `${currentTheme.color}33`, backgroundColor: `${currentTheme.color}05` }}>
                        <span className="text-xs font-mono font-bold tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">TAM: $8.9T</span>
                    </div>

                    {/* SAM - Serviceable Available Market */}
                    <div className="absolute w-[65%] h-[65%] rounded-full border-2 flex items-start justify-center pt-4 backdrop-blur-sm transition-all duration-700 hover:scale-[1.02] hover:bg-white/5 group shadow-2xl"
                        style={{ borderColor: `${currentTheme.color}66`, boxShadow: `0 0 30px ${currentTheme.color}22` }}>
                        <span className="text-sm font-mono font-bold tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">SAM: $2.4T</span>
                    </div>

                    {/* SOM - Serviceable Obtainable Market */}
                    <div className="absolute w-[30%] h-[30%] rounded-full border-4 flex items-center justify-center bg-black transition-all duration-700 hover:scale-110 group shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                        style={{ borderColor: currentTheme.color, boxShadow: `0 0 50px ${currentTheme.color}66` }}>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-white relative z-10">$450B</div>
                            <div className="text-[10px] font-mono font-bold opacity-80" style={{ color: currentTheme.color }}>SOM</div>
                        </div>

                        {/* Inner Pulse */}
                        <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: currentTheme.color }} />
                    </div>

                    {/* Connecting Lines */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 right-0 w-1/2 h-[1px]" style={{ background: `linear-gradient(90deg, transparent, ${currentTheme.color}44)` }} />
                        <div className="absolute top-1/2 left-0 w-1/2 h-[1px]" style={{ background: `linear-gradient(90deg, ${currentTheme.color}44, transparent)` }} />
                        <div className="absolute left-1/2 top-0 w-[1px] h-1/2" style={{ background: `linear-gradient(180deg, ${currentTheme.color}44, transparent)` }} />
                        <div className="absolute left-1/2 bottom-0 w-[1px] h-1/2" style={{ background: `linear-gradient(0deg, ${currentTheme.color}44, transparent)` }} />
                    </div>

                </div>

                {/* Legend / Details */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 text-white">Market Opportunity</h3>
                        <p className="text-muted-foreground">The "Main Street" economy is undergoing a cognitive transformation. BasaltHQ is positioned to capture the foundational layer of this shift.</p>
                    </div>

                    <div className="space-y-4">
                        <div className="p-4 rounded-xl border bg-card/30 backdrop-blur-sm transition-colors hover:bg-card/50" style={{ borderColor: `${currentTheme.color}22` }}>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-lg">TAM</span>
                                <span className="font-mono opacity-50">$8.9 Trillion</span>
                            </div>
                            <div className="text-sm text-muted-foreground">Global SMB Digital Transformation Spend</div>
                            <div className="h-1 w-full mt-3 rounded-full overflow-hidden bg-white/5">
                                <div className="h-full w-full opacity-30" style={{ backgroundColor: currentTheme.color }} />
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border bg-card/30 backdrop-blur-sm transition-colors hover:bg-card/50" style={{ borderColor: `${currentTheme.color}44` }}>
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-lg">SAM</span>
                                <span className="font-mono opacity-70">$2.4 Trillion</span>
                            </div>
                            <div className="text-sm text-muted-foreground">Serviceable Available Market in target verticals (Retail, Hospitality, Services)</div>
                            <div className="h-1 w-full mt-3 rounded-full overflow-hidden bg-white/5">
                                <div className="h-full w-[65%] opacity-60" style={{ backgroundColor: currentTheme.color }} />
                            </div>
                        </div>

                        <div className="p-4 rounded-xl border bg-card/30 backdrop-blur-sm transition-colors hover:bg-card/50 relative overflow-hidden"
                            style={{ borderColor: currentTheme.color }}>
                            <div className="absolute inset-0 opacity-5" style={{ backgroundColor: currentTheme.color }} />
                            <div className="flex justify-between items-center mb-1 relative z-10">
                                <span className="font-bold text-lg" style={{ color: currentTheme.color }}>SOM</span>
                                <span className="font-mono font-bold">$450 Billion</span>
                            </div>
                            <div className="text-sm text-muted-foreground relative z-10">Immediate capture target via Partner Nodes</div>
                            <div className="h-1 w-full mt-3 rounded-full overflow-hidden bg-white/5 relative z-10">
                                <div className="h-full w-[30%]" style={{ backgroundColor: currentTheme.color }} />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
