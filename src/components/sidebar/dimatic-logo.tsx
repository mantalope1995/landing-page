'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface DimaticLogoProps {
    size?: number | string;
    className?: string;
    showText?: boolean;
    theme?: 'dark' | 'light' | 'system';
}

export function DimaticLogo({ size = 32, className, showText = false, theme = 'system' }: DimaticLogoProps) {
    const { theme: currentTheme, systemTheme } = useTheme(); // Renamed 'theme' to 'currentTheme' to avoid conflict with prop
    const [mounted, setMounted] = useState(false);

    // After mount, we can access the theme
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div
            className={cn("relative flex items-center justify-center", className)}
            style={{
                width: size,
                height: size,
                minWidth: size,
                minHeight: size
            }}
        ><span className="flex items-center justify-center bg-primary text-primary-foreground rounded-md w-[1.2em] h-[1.2em] text-[0.8em]">D</span>
            {showText && <span className="tracking-tight">Dimatic</span>}
        </div>
    );
}
