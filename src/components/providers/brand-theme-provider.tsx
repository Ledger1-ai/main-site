"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { hexToHsl } from '@/lib/utils';

export interface Theme {
    name: string;
    color: string;
    dotColor?: string; // Optional override for node dots (e.g. BasaltHQ uses Orange dots with Blue theme)
    icon: string;
}

const THEMES: Theme[] = [
    { name: 'BasaltHQ', color: '#119dff', dotColor: '#ff6b00', icon: '/BasaltHQShield.png' }, // Blue theme, Orange dots
    { name: 'BasaltCRM', color: '#2bfff8', icon: '/CRM-ERP-CMS.png' },
    { name: 'BasaltSurge', color: '#35ff7c', icon: '/Surge.png' },
    { name: 'BasaltOnyx', color: '#b24dff', icon: '/Onyx.png' },
    { name: 'BasaltEcho', color: '#ffc029', icon: '/Echo.png' },
];

interface BrandThemeContextType {
    currentTheme: Theme;
    themeIndex: number;
}

const BrandThemeContext = createContext<BrandThemeContextType | undefined>(undefined);

export function BrandThemeProvider({ children }: { children: React.ReactNode }) {
    const [themeIndex, setThemeIndex] = useState(0);
    const currentTheme = THEMES[themeIndex];

    useEffect(() => {
        const interval = setInterval(() => {
            setThemeIndex((prev) => (prev + 1) % THEMES.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Update CSS variables for primary color globally
        const root = document.documentElement;
        const hsl = hexToHsl(currentTheme.color);

        // Set --primary and --ring to the new HSL values
        // globals.css defines these with hsl() wrapper included, so we must add it back
        root.style.setProperty('--primary', `hsl(${hsl})`);
        root.style.setProperty('--ring', `hsl(${hsl})`);

        // Also update glow color which is heavily used in the template style
        // We can't easily do hex->rgba with alpha in CSS variables unless we have r,g,b. 
        // But we can approximate or use HSL with alpha if the usage allows `hsl(var(--primary) / 0.3)`.
        // The template uses `--glow-color: rgba(...)`. Let's update it to use hsla.
        root.style.setProperty('--glow-color', `hsla(${hsl.replace(/%/g, '')}, 0.3)`); // basic approximation

        // Basalt cyan vars override if needed, though they might be used specifically for "Cyan" look.
        // Ideally we want the "Brand" color to take over.

    }, [currentTheme]);

    return (
        <BrandThemeContext.Provider value={{ currentTheme, themeIndex }}>
            {children}
        </BrandThemeContext.Provider>
    );
}

export function useBrandTheme() {
    const context = useContext(BrandThemeContext);
    if (context === undefined) {
        throw new Error('useBrandTheme must be used within a BrandThemeProvider');
    }
    return context;
}
