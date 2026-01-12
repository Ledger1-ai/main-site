"use client";

import React, { useEffect, useState } from 'react';
import { useBrandTheme } from '@/components/providers/brand-theme-provider';

export function GrowthChart() {
    const { currentTheme } = useBrandTheme();
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    const data = [
        { year: '2024', label: 'Seed', value: 15, nodes: '1.2k' },
        { year: '2025', label: 'Series A', value: 35, nodes: '12k' },
        { year: '2026', label: 'Expansion', value: 65, nodes: '50k' },
        { year: '2027', label: 'Scale', value: 85, nodes: '150k' },
        { year: '2028', label: 'Dominance', value: 100, nodes: '500k+' },
    ];

    return (
        <div className="w-full max-w-5xl mx-auto p-6">
            <div className="relative h-[400px] flex items-end justify-between gap-4 px-4 pb-8 border-b border-white/10">

                {/* Grid Lines */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-between opacity-10 pb-8">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-full h-px bg-white" />
                    ))}
                </div>

                {data.map((item, idx) => {
                    const height = animate ? `${item.value}%` : '0%';
                    return (
                        <div key={item.year} className="relative flex-1 h-full flex items-end group">
                            {/* Bar */}
                            <div
                                className="w-full relative rounded-t-xl transition-all duration-1000 ease-out hover:opacity-90 flex flex-col justify-end overflow-hidden"
                                style={{
                                    height,
                                    background: `linear-gradient(to top, ${currentTheme.color}22, ${currentTheme.color}88)`,
                                    transitionDelay: `${idx * 150}ms`
                                }}
                            >
                                {/* Top highlight line */}
                                <div className="absolute top-0 inset-x-0 h-[2px] shadow-[0_0_10px_currentColor]" style={{ backgroundColor: currentTheme.color }} />

                                {/* Node count inside bar */}
                                <div className="mb-4 text-center">
                                    <div className="text-2xl font-bold text-white drop-shadow-md">{item.nodes}</div>
                                    <div className="text-[10px] uppercase tracking-widest opacity-75 text-white">Nodes</div>
                                </div>
                            </div>

                            {/* Hover Tooltip */}
                            <div className="absolute -top-16 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-black/90 text-white p-3 rounded-lg border border-white/10 shadow-xl whitespace-nowrap z-10 pointer-events-none">
                                <div className="font-bold text-lg">{item.label}</div>
                                <div className="text-xs text-muted-foreground">Projected Network Scale</div>
                            </div>

                            {/* X-Axis Label */}
                            <div className="absolute -bottom-8 left-0 right-0 text-center">
                                <div className="font-mono font-bold text-sm text-muted-foreground">{item.year}</div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    );
}
