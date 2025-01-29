import { Group, List, Stack, Text } from '@mantine/core';

import IconWithTooltip from './IconWithTooltip';
import UnderlinedLink from './UnderlinedLink/UnderlinedLink';

interface ExperienceProps {
  experience: {
    time: string;
    position: string;
    company: { label: string; description?: string; url: string };
    achievements: string[];
    techStack: { label: string; iconUrl: string }[];
  };
}

function Experience({ experience }: ExperienceProps) {
  return (
    <Stack gap="xs">
      <Text fz="sm" fw={500} c="gray.6">
        {experience.time}
      </Text>
      <Text fz={{ base: 'sm', lg: 'md' }} fw={700}>
        {experience.position} @{' '}
        <UnderlinedLink
          fz={{ base: 'sm', lg: 'md' }}
          fw={700}
          label={experience.company.label}
          url={experience.company.url}
        />
      </Text>
      {experience.company.description && (
        <Text fz="sm" fw={500} c="gray.6">
          {experience.company.description}
        </Text>
      )}
      <List>
        {experience.achievements.map((achievement, i) => (
          <List.Item key={i} fz="sm" fw={500}>
            {achievement}
          </List.Item>
        ))}
      </List>
      <Text fz="sm" fw={500} c="gray.6">
        Tech Stack
      </Text>
      <Group>
        {experience.techStack.map((tech) => (
          <IconWithTooltip
            key={tech.label}
            label={tech.label}
            iconUrl={tech.iconUrl}
          />
        ))}
      </Group>
    </Stack>
  );
}

export default Experience;
