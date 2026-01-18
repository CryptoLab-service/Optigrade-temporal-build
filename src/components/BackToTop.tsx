"use client";

import { useEffect, useState } from 'react';
import { Button } from '@once-ui-system/core';
import { FaArrowUp } from 'react-icons/fa6'; // Assuming react-icons is installed, or using once-ui icon

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 50,
        }}>
            <Button
                onClick={scrollToTop}
                variant="secondary"
                size="m"
                data-border="rounded"
            >
                ↑
            </Button>
        </div>
    );
};
