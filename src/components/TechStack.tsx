"use client";

import { Flex, Text } from "@once-ui-system/core";
import styles from "./TechStack.module.scss";

interface TechStackProps {
    skills: {
        title: string;
        images?: { src: string; alt: string }[];
    }[];
}

export const TechStack = ({ skills }: TechStackProps) => {
    // Duo logic for infinite scroll
    const skillsList = skills || [];
    const items = [...skillsList, ...skillsList];

    return (
        <div className={styles.scroller}>
            <div className={styles.inner}>
                {items.map((skill, index) => (
                    <div key={`${skill.title}-${index}`} className={styles.item}>
                        {/* Use standard img for icon if available */}
                        {skill.images && skill.images[0] && (
                            <img
                                src={skill.images[0].src}
                                alt={skill.images[0].alt}
                                style={{ width: '24px', height: '24px', objectFit: 'contain' }}
                            />
                        )}
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            {skill.title}
                        </Text>
                    </div>
                ))}
            </div>
        </div>
    );
};
