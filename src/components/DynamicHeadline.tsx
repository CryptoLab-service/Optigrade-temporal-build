"use client";

import { Heading } from "@once-ui-system/core";
import { useTypewriter } from "@/hooks/useTypewriter";
import { ReactNode } from "react";

export const DynamicHeadline = ({ text }: { text: ReactNode }) => {
    // If it's a ReactNode object (like a fragment), converting to string might be tricky.
    // We'll rely on the simple hook check. If it's complex JSX, it just renders immediately.
    const display = useTypewriter(text, 30);

    return (
        <Heading wrap="balance" variant="display-strong-l">
            {display}
        </Heading>
    );
}
