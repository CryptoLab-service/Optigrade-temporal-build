"use client";

import { Flex, Heading, Grid, Button, Column } from "@once-ui-system/core";
import Link from "next/link";

interface GalleryPreviewProps {
    images: {
        src: string;
        alt: string;
        orientation?: string;
    }[];
}

export const GalleryPreview = ({ images }: GalleryPreviewProps) => {
    // Take first 3-4 images
    const previewImages = images.slice(0, 4);

    return (
        <Column fillWidth gap="l" paddingY="32" horizontal="center">
            <Flex fillWidth horizontal="space-between" vertical="center" paddingX="l">
                <Heading variant="display-strong-xs">Gallery Preview</Heading>
                <Button href="/gallery" variant="secondary" arrowIcon>
                    View All
                </Button>
            </Flex>

            <Flex fillWidth wrap gap="m" paddingX="l" horizontal="center">
                {previewImages.map((img, index) => (
                    <div key={index} style={{ position: 'relative', width: 'calc(50% - var(--static-space-m))', aspectRatio: '16/9', borderRadius: 'var(--radius-m)', overflow: 'hidden' }}>
                        <img
                            src={img.src}
                            alt={img.alt}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                ))}
            </Flex>
        </Column>
    );
};
