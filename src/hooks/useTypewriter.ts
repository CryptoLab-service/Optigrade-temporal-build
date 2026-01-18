"use client";

import { useEffect, useState } from 'react';

export const useTypewriter = (text: string | any, speed: number = 50) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        if (typeof text !== 'string') return;

        let i = 0;
        const typingInterval = setInterval(() => {
            if (i < text.length) {
                setDisplayText(prev => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, speed);

        return () => {
            clearInterval(typingInterval);
            setDisplayText('');
        };
    }, [text, speed]);

    if (typeof text !== 'string') return text;

    return displayText;
};
