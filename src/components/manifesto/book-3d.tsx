"use client";

import { cn } from "@/lib/utils";

interface Book3DProps {
    coverImage: string;
    title: string;
    color?: string;
    className?: string;
}

export function Book3D({ coverImage, title, color = "#14b8a6", className }: Book3DProps) {
    // Proven CSS 3D Box Structure
    // Widened to ~1.4 ratio (340px/480px) to prevent cropping and match user request.
    return (
        <div className={cn("perspective-1000 w-[340px] h-[480px] group", className)}>
            <div
                className="relative w-full h-full transform-style-3d transition-transform duration-700 ease-out 
                           rotate-y-[-25deg] rotate-x-[10deg] group-hover:rotate-y-[-10deg] group-hover:rotate-x-[5deg] 
                           animate-[float_6s_ease-in-out_infinite]"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* 1. FRONT FACE (The Cover) - Z translated forward by half thickness (25px) */}
                <div
                    className="absolute inset-0 bg-center rounded-r-md shadow-2xl backface-hidden"
                    style={{
                        backgroundImage: `url('${coverImage}')`,
                        backgroundSize: '100% 100%', // FORCE FIT: Stretches image to exact dimensions, no cropping.
                        transform: 'translateZ(25px)'
                    }}
                >
                    {/* Inner Shadow / Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                    {/* Spine Shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* 2. SPINE (Left Face) - Rotated -90deg Y, translated to left edge */}
                <div
                    className="absolute top-[2px] bottom-[2px] w-[50px] transform origin-right backface-hidden"
                    style={{
                        right: '100%',
                        transform: 'rotateY(-90deg) translateX(25px)', // Pushes it "back" to align with front face's Z-shift
                        backgroundColor: '#fefefe', // White spine base
                        borderLeft: '1px solid #ddd'
                    }}
                >
                    {/* Spine Text or Color */}
                    <div
                        className="w-full h-full opacity-90 flex items-center justify-center"
                        style={{ backgroundColor: color }} // Dynamic color
                    >
                        <span className="text-white/50 text-xs tracking-widest rotate-90 whitespace-nowrap font-mono">{title.substring(0, 20)}...</span>
                    </div>
                </div>

                {/* 3. BACK FACE (The Back Cover) - Rotated 180deg Y, Z translated -25px */}
                <div
                    className="absolute inset-0 bg-[#1a1a1a] rounded-l-md transform backface-hidden"
                    style={{
                        transform: 'rotateY(180deg) translateZ(25px)',
                        boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
                    }}
                >
                    <div className="w-full h-full flex items-center justify-center p-8">
                        <div
                            className="text-center p-4 border border-dashed rounded opacity-30"
                            style={{ borderColor: color, color: color }}
                        >
                            <p className="text-sm font-mono uppercase tracking-widest">{title}</p>
                        </div>
                    </div>
                </div>

                {/* 4. PAGES (Top/Bottom/Right) - Visual Filler */}
                {/* Right Page Edge */}
                <div
                    className="absolute top-[3px] bottom-[3px] w-[46px] bg-[#fff] transform origin-left backface-hidden"
                    style={{
                        left: '100%',
                        transform: 'rotateY(90deg) translateX(-23px)',
                        backgroundImage: 'linear-gradient(to right, #ccc 1px, transparent 1px)',
                        backgroundSize: '2px 100%'
                    }}
                />

            </div>
        </div>
    );
}
