"use client";

import { useEffect, useState } from 'react';
import { Flex } from '@once-ui-system/core';

export const ScrollProgress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = `${totalScroll / windowHeight}`;
            setScroll(Number(scroll));
        }

        // Passive listener for better performance
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: `${scroll * 100}%`,
            height: '4px',
            backgroundColor: 'var(--brand-solid-strong)',
            zIndex: 1000,
            transition: 'width 0.1s ease-out'
        }} />
    );
};
