import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema, SmartLink } from "@once-ui-system/core";
import { home, about, person, newsletter, baseURL, routes, gallery } from "@/resources";
import { Mailchimp, TechStack, GalleryPreview, DynamicHeadline } from "@/components";
import { Projects } from "@/components/work/Projects";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column maxWidth="m" gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          {home.featured.display && (
            <RevealFx fillWidth horizontal="start" paddingTop="16" paddingBottom="32" paddingLeft="12">
              <Badge background="brand-alpha-weak" paddingX="12" paddingY="4" onBackground="neutral-strong" textVariant="label-default-s" arrow={false}
                href={home.featured.href}>
                <Row paddingY="2">{home.featured.title}</Row>
              </Badge>
            </RevealFx>
          )}
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <DynamicHeadline text={home.headline} />
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="heading-default-xl">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Flex gap="16" vertical="center">
              <Button
                id="about"
                data-border="rounded"
                href={about.path}
                variant="secondary"
                size="m"
                weight="default"
                arrowIcon
              >
                <Flex gap="8" vertical="center" paddingRight="4">
                  {about.avatar.display && (
                    <div style={{ position: 'relative' }}>
                      <Avatar
                        marginRight="8"
                        style={{ marginLeft: "-0.75rem" }}
                        src={person.avatar}
                        size="m"
                      />
                      {/* Status Indicator */}
                      <div style={{
                        position: 'absolute',
                        bottom: '0',
                        right: '8px',
                        width: '10px',
                        height: '10px',
                        backgroundColor: '#2ecc71',
                        borderRadius: '50%',
                        border: '2px solid var(--background)',
                        boxShadow: '0 0 0 2px var(--background)'
                      }} />
                    </div>
                  )}
                  {about.title}
                </Flex>
              </Button>
            </Flex>
          </RevealFx>
        </Column>
      </Column>

      {/* Tech Stack Ticker */}
      <RevealFx translateY="16" delay={0.5}>
        <TechStack skills={about.technical.skills} />
      </RevealFx>

      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]} />
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l" paddingTop="24">
            <Heading as="h2" variant="display-strong-xs" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2" />
          </Flex>
        </Flex>
      )}
      <Projects range={[2]} />

      {/* Gallery Preview */}
      <GalleryPreview images={gallery.images} />

      {newsletter.display && <Mailchimp newsletter={newsletter} />}
    </Column>
  );
}
