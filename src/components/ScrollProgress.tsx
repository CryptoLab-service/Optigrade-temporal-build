"use client";

import { useEffect, useRef } from 'react';
import { Flex } from '@once-ui-system/core';

export const ScrollProgress = () => {
    const progressRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let requestRunning = false;

        const handleScroll = () => {
            if (!progressRef.current || requestRunning) return;

            requestRunning = true;
            requestAnimationFrame(() => {
                const totalScroll = document.documentElement.scrollTop;
                const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                const scroll = totalScroll / windowHeight;

                if (progressRef.current) {
                    progressRef.current.style.width = `${Math.min(scroll * 100, 100)}%`;
                }
                requestRunning = false;
            });
        }

        // Passive listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div ref={progressRef} style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '0%',
            height: '4px',
            backgroundColor: 'var(--brand-solid-strong)',
            zIndex: 1000,
            transition: 'width 0.1s ease-out',
            willChange: 'width'
        }} />
    );
};
