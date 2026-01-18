"use client";

import { Flex, Heading, Button, Column } from "@once-ui-system/core";
import Link from "next/link";
import styles from "./GalleryPreview.module.scss";
import Image from "next/image";

interface GalleryPreviewProps {
    images: {
        src: string;
        alt: string;
        orientation?: string;
    }[];
}

export const GalleryPreview = ({ images }: GalleryPreviewProps) => {
    // Duplicate images for infinite scroll
    const galleryImages = images.slice(0, 6); // Take more images for a better scroll
    const items = [...galleryImages, ...galleryImages];

    return (
        <Column fillWidth gap="l" paddingY="32" horizontal="center">
            <Flex fillWidth horizontal="space-between" vertical="center" paddingX="l">
                <Heading variant="display-strong-xs">Gallery Preview</Heading>
                <Button href="/gallery" variant="secondary" arrowIcon>
                    View All
                </Button>
            </Flex>

            <div className={styles.scroller}>
                <div className={styles.inner}>
                    {items.map((img, index) => (
                        <div
                            key={`${index}-${img.src}`}
                            className={styles.item}
                            style={{
                                width: img.orientation === 'vertical' ? '300px' : '400px',
                                aspectRatio: img.orientation === 'vertical' ? '9/16' : '16/9',
                                flexShrink: 0
                            }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                sizes={img.orientation === 'vertical' ? '300px' : '400px'}
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Column>
    );
};
