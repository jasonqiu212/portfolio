import { Grid, Group, Image, Stack, Text } from '@mantine/core';
import { useState } from 'react';

import IconWithTooltip from '../IconWithTooltip';
import UnderlinedLink from '../UnderlinedLink/UnderlinedLink';
import classes from './Project.module.css';

interface ProjectProps {
  project: {
    name: string;
    url?: string;
    descriptions: string[];
    techStack: { label: string; iconUrl: string }[];
    links: { label: string; url: string }[];
    imageUrl: string;
  };
}

function Project({ project }: ProjectProps) {
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { width, height, left, top } =
      e.currentTarget.getBoundingClientRect();

    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    const rotateX = -(mouseY / height - 0.5) * 15;
    const rotateY = (mouseX / width - 0.5) * 15;

    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  return (
    <Grid gutter="lg" align="center">
      <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 2, lg: 1 }}>
        <Stack gap="xs" align="flex-start">
          {project.url ? (
            <UnderlinedLink
              fz={{ base: 'sm', lg: 'md' }}
              fw={700}
              label={project.name}
              url={project.url}
            />
          ) : (
            <Text fz={{ base: 'sm', lg: 'md' }} fw={700}>
              {project.name}
            </Text>
          )}
          {project.descriptions.map((description, i) => (
            <Text key={i} fz="sm" fw={500}>
              {description}
            </Text>
          ))}
          {project.links.map((link, i) => (
            <UnderlinedLink key={i} label={link.label} url={link.url} fz="sm" />
          ))}
          <Text fz="sm" fw={500} c="gray.6">
            Tech Stack
          </Text>
          <Group>
            {project.techStack.map((tech) => (
              <IconWithTooltip
                key={tech.label}
                label={tech.label}
                iconUrl={tech.iconUrl}
              />
            ))}
          </Group>
        </Stack>
      </Grid.Col>

      <Grid.Col span={{ base: 12, lg: 6 }} order={{ base: 1, lg: 2 }}>
        <Image
          src={project.imageUrl}
          radius="md"
          w="100%"
          h="auto"
          fit="contain"
          className={classes.tiltEffect}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          }}
        />
      </Grid.Col>
    </Grid>
  );
}

export default Project;
