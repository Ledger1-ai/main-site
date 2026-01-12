"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useBrandTheme } from '@/components/providers/brand-theme-provider';

interface Module {
    id: string;
    name: string;
    color: string;
    icon: string;
    label: string;
    angle: number;
}

export function EcosystemFlywheel() {
    const { currentTheme } = useBrandTheme();

    // Define modules with their specific branding
    const modules: Module[] = [
        { id: 'erp', name: 'BasaltERP', color: '#119dff', icon: '/BasaltERPWide.png', label: 'STRUCTURAL TRUTH', angle: 0 },
        { id: 'crm', name: 'BasaltCRM', color: '#2bfff8', icon: '/BasaltCRMWide.png', label: 'RELATIONAL GRAPH', angle: 60 },
        { id: 'cms', name: 'BasaltCMS', color: '#ff6b00', icon: '/BasaltCMSWide.png', label: 'UNIVERSAL INTEGRATION', angle: 120 },
        { id: 'onyx', name: 'BasaltOnyx', color: '#b24dff', icon: '/BasaltOnyxWide.png', label: 'INTELLIGENCE LAYER', angle: 180 },
        { id: 'echo', name: 'BasaltEcho', color: '#ffc029', icon: '/BasaltEchoWide.png', label: 'SEMANTIC INTERFACE', angle: 240 },
        { id: 'surge', name: 'BasaltSurge', color: '#35ff7c', icon: '/BasaltSurgeWide.png', label: 'TRANSACTION LAYER', angle: 300 },
    ];

    return (
        <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">

            {/* Dynamic Background Glow */}
            <div className="absolute inset-0 rounded-full blur-[100px] opacity-20 animate-pulse-slow"
                style={{ background: `radial-gradient(circle, ${currentTheme.color} 0%, transparent 70%)` }} />

            {/* Central Core - The "Brain" */}
            <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 rounded-full bg-black/80 backdrop-blur-xl border-2 flex items-center justify-center shadow-[0_0_50px_rgba(0,0,0,0.5)]"
                style={{ borderColor: `${currentTheme.color}66` }}>
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                    {/* Using the main Basalt symbol or icon if available, falling back to text if not specific */}
                    {/* Assuming /bssymbol.png exists from layout metadata */}
                    <Image src="/bssymbol.png" alt="Basalt Core" fill className="object-contain" />
                </div>

                {/* Orbiting particles around core */}
                <div className="absolute inset-0 animate-spin-slow">
                    <div className="absolute top-0 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 -translate-y-1/2" style={{ backgroundColor: currentTheme.color, boxShadow: `0 0 10px ${currentTheme.color}` }} />
                    <div className="absolute bottom-0 left-1/2 w-1.5 h-1.5 rounded-full -translate-x-1/2 translate-y-1/2" style={{ backgroundColor: currentTheme.color, boxShadow: `0 0 10px ${currentTheme.color}` }} />
                </div>
            </div>

            {/* Rotating Container (Holds SVG and Modules) */}
            <div className="absolute inset-0 animate-spin-slow-reverse pointer-events-none">

                {/* Connecting Lines (Hexagon) - Rotates with modules */}
                {/* 
                   Based on orbit radius = 180px, Center = 50% 50% (300, 300) in 600x600 container.
                   Points are:
                   0 deg:   300 + 180*cos(0)   = 480, 300
                   60 deg:  300 + 180*cos(60)  = 390, 455.88
                   120 deg: 300 + 180*cos(120) = 210, 455.88
                   180 deg: 300 + 180*cos(180) = 120, 300
                   240 deg: 300 + 180*cos(240) = 210, 144.12
                   300 deg: 300 + 180*cos(300) = 390, 144.12
                */}
                <svg className="absolute inset-0 w-full h-full z-0 opacity-30" viewBox="0 0 600 600">
                    <polygon
                        points="480,300 390,455.88 210,455.88 120,300 210,144.12 390,144.12"
                        fill="none"
                        stroke={currentTheme.color}
                        strokeWidth="2"
                        className="animate-pulse"
                    />
                </svg>

                {/* Modules */}
                {modules.map((mod, i) => {
                    return (
                        <div
                            key={mod.id}
                            className="absolute top-1/2 left-1/2 w-28 h-28 -ml-14 -mt-14 pointer-events-auto z-10"
                            style={{
                                transform: `rotate(${mod.angle}deg) translate(180px) rotate(-${mod.angle}deg)`, // Orbit radius 180px
                            }}
                        >
                            {/* Counter-Rotating Wrapper to keep content upright */}
                            <div className="w-full h-full animate-spin-slow">
                                {/* Module Card */}
                                <div className="group relative w-full h-full flex flex-col items-center justify-center bg-black/90 rounded-2xl border transition-all duration-500 hover:scale-125 hover:z-50 hover:border-opacity-100"
                                    style={{ borderColor: `${mod.color}66`, boxShadow: `0 0 20px ${mod.color}22` }}>

                                    {/* Icon/Logo */}
                                    <div className="relative w-16 h-8 mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                                        <Image src={mod.icon} alt={mod.name} fill className="object-contain" />
                                    </div>

                                    {/* Label */}
                                    <span className="text-[8px] font-mono font-bold tracking-widest text-center px-1" style={{ color: mod.color }}>
                                        {mod.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Flow Arrows Ring */}
            <div className="absolute inset-0 m-auto w-[420px] h-[420px] rounded-full border border-dashed opacity-20 animate-spin-slow pointer-events-none origin-center"
                style={{ borderColor: currentTheme.color }} />

            <style jsx>{`
        .animate-spin-slow { animation: spin 60s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-reverse 60s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
      `}</style>
        </div>
    );
}
