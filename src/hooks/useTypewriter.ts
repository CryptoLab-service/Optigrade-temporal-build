"use client";

import { useEffect, useState } from 'react';

export const useTypewriter = (text: string | any, speed: number = 50) => {
    // If it's not a string (like a React Element), just return it as is or handle it.
    // For simplicity, let's assume we want to type out a plain string.
    // If the user provided a React node, we might just return it to avoid breaking animations.
    if (typeof text !== 'string') return text;

    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
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

    return displayText;
};
