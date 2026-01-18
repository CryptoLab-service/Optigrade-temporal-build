import {
  Avatar,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  RevealFx
} from "@once-ui-system/core";
import { baseURL, about, person, social } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(about.title)}`,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    {
      title: about.intro.title,
      display: about.intro.display,
      items: [],
    },
    {
      title: about.work.title,
      display: about.work.display,
      items: about.work.experiences.map((experience) => experience.company),
    },
    {
      title: about.studies.title,
      display: about.studies.display,
      items: about.studies.institutions.map((institution) => institution.name),
    },
    {
      title: about.technical.title,
      display: about.technical.display,
      items: about.technical.skills.map((skill) => skill.title),
    },
  ];

  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={`/api/og/generate?title=${encodeURIComponent(about.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      {/* Removed fixed TableOfContents for cleaner mobile/desktop feel or keep if preferred. keeping it for now but hiding on small */}
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          hide="s"
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}

      <Flex fillWidth mobileDirection="column" horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            position="sticky"
            minWidth="160"
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <Avatar src={person.avatar} size="xl" />
            <Flex gap="8" vertical="center">
              <Icon onBackground="accent-weak" name="globe" />
              {person.location}
            </Flex>
            {person.languages.length > 0 && (
              <Flex wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={language} size="l">
                    {language}
                  </Tag>
                ))}
              </Flex>
            )}
          </Column>
        )}

        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          {/* Header Section */}
          <Column
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <RevealFx translateY="8">
              <Heading className={styles.textAlign} variant="display-strong-xl">
                {person.name}
              </Heading>
            </RevealFx>
            <RevealFx translateY="8" delay={0.1}>
              <Text
                className={styles.textAlign}
                variant="display-default-xs"
                onBackground="neutral-weak"
              >
                {person.role}
              </Text>
            </RevealFx>

            {social.length > 0 && (
              <RevealFx translateY="8" delay={0.2}>
                <Flex className={styles.blockAlign} paddingTop="20" paddingBottom="8" gap="8" wrap horizontal="center" fitWidth>
                  {social.map((item) => item.link && (
                    <IconButton
                      key={item.name}
                      href={item.link}
                      icon={item.icon}
                      variant="secondary"
                      size="l"
                      tooltip={item.name}
                    />
                  ))}
                </Flex>
              </RevealFx>
            )}
          </Column>

          {/* Intro - Simplified */}
          {about.intro.display && (
            <RevealFx translateY="12" delay={0.3}>
              <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                {about.intro.description}
              </Column>
            </RevealFx>
          )}

          {/* Work Experience - Enhanced Visuals */}
          {about.work.display && (
            <>
              <RevealFx translateY="12" delay={0.4}>
                <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                  {about.work.title}
                </Heading>
              </RevealFx>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <RevealFx key={`${experience.company}-${index}`} translateY="8" delay={0.5 + index * 0.1}>
                    <Column fillWidth border="neutral-alpha-medium" padding="l" radius="l" background="neutral-alpha-weak">
                      <Flex fillWidth horizontal="space-between" vertical="end" marginBottom="4">
                        <Text id={experience.company} variant="heading-strong-l">
                          {experience.company}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {experience.timeframe}
                        </Text>
                      </Flex>
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {experience.role}
                      </Text>
                      <Column as="ul" gap="8" paddingLeft="16" style={{ listStyleType: 'disc' }}>
                        {experience.achievements.map((achievement: JSX.Element, i: number) => (
                          <li key={i}>
                            <Text variant="body-default-m">
                              {achievement}
                            </Text>
                          </li>
                        ))}
                      </Column>
                    </Column>
                  </RevealFx>
                ))}
              </Column>
            </>
          )}

          {/* Studies & Certifications - Grid Layout */}
          <Flex fillWidth gap="24" mobileDirection="column" marginBottom="40">
            {about.studies.display && (
              <Column flex={1} gap="m">
                <RevealFx translateY="12" delay={0.6}>
                  <Heading as="h2" id={about.studies.title} variant="display-strong-s">
                    {about.studies.title}
                  </Heading>
                </RevealFx>
                {about.studies.institutions.map((institution, index) => (
                  <RevealFx key={index} translateY="4" delay={0.7}>
                    <Column fillWidth border="neutral-alpha-medium" padding="m" radius="m">
                      <Text variant="heading-strong-m">{institution.name}</Text>
                      <Text variant="body-default-m" onBackground="neutral-weak">{institution.description}</Text>
                    </Column>
                  </RevealFx>
                ))}
              </Column>
            )}

            {about.certification.display && (
              <Column flex={1} gap="m">
                <RevealFx translateY="12" delay={0.6}>
                  <Heading as="h2" id={about.certification.title} variant="display-strong-s">
                    {about.certification.title}
                  </Heading>
                </RevealFx>
                {about.certification.awards.map((award, index) => (
                  <RevealFx key={index} translateY="4" delay={0.7 + index * 0.05}>
                    <Column fillWidth border="neutral-alpha-medium" padding="m" radius="m">
                      <Text variant="heading-strong-m">{award.name}</Text>
                      <Text variant="body-default-s" onBackground="neutral-weak">{award.description}</Text>
                    </Column>
                  </RevealFx>
                ))}
              </Column>
            )}
          </Flex>

          {/* Technical Skills - Masonry/Grid feel */}
          {about.technical.display && (
            <>
              <RevealFx translateY="12">
                <Heading as="h2" id={about.technical.title} variant="display-strong-s" marginBottom="m">
                  {about.technical.title}
                </Heading>
              </RevealFx>
              <Column fillWidth gap="m" marginBottom="40">
                {about.technical.skills.map((skill, index) => (
                  <RevealFx key={index} translateY="8" delay={0.1}>
                    <Column fillWidth border="neutral-alpha-medium" padding="l" radius="l">
                      <Flex gap="16" vertical="center" marginBottom="8">
                        {/* If we had icons here it would be great, using title for now */}
                        <Text variant="heading-strong-l">{skill.title}</Text>
                      </Flex>
                      <Text variant="body-default-m" onBackground="neutral-weak">
                        {skill.description}
                      </Text>
                      {skill.images && skill.images.length > 0 && (
                        <Flex gap="16" marginTop="16" wrap>
                          {skill.images.map((img, i) => (
                            <Flex key={i} border="neutral-medium" radius="m" padding="4" background="neutral-strong">
                              {/* Using smaller icons for cleaner look */}
                              <Media
                                src={img.src}
                                width={32}
                                height={32}
                                alt={img.alt}
                              />
                            </Flex>
                          ))}
                        </Flex>
                      )}
                    </Column>
                  </RevealFx>
                ))}
              </Column>
            </>
          )}

          {/* Consolidated Impact/Research Section */}
          {(about.research.display || about.impact.display) && (
            <Column fillWidth gap="xl" marginBottom="xl">
              <RevealFx translateY="12">
                <Heading as="h2" variant="display-strong-s">Focus Areas</Heading>
              </RevealFx>
              <Flex gap="24" mobileDirection="column">
                {about.research.display && (
                  <Column flex={1} gap="m" border="neutral-alpha-medium" padding="l" radius="l">
                    <Text variant="heading-strong-m">{about.research.title}</Text>
                    <Text variant="body-default-m">{about.research.description}</Text>
                  </Column>
                )}
                {about.impact.display && (
                  <Column flex={1} gap="m" border="neutral-alpha-medium" padding="l" radius="l">
                    <Text variant="heading-strong-m">{about.impact.title}</Text>
                    <Text variant="body-default-m">{about.impact.description}</Text>
                  </Column>
                )}
              </Flex>
            </Column>
          )}

        </Column>
      </Flex>
    </Column>
  );
}
