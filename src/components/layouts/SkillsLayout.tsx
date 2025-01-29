import { Group, Stack, Text, Title } from '@mantine/core';

import {
  experiencedFrameworksAndTools,
  experiencedLanguages,
  familiarSkills,
} from '../../constants/Skills';
import IconWithTooltip from '../ui/IconWithTooltip';

function SkillsLayout() {
  return (
    <Stack id="skills" pt="100px" gap="36px">
      <Title fz={{ base: 'lg', lg: 'xl' }}>
        <span style={{ paddingRight: '12px' }}>💪</span> skills
      </Title>

      <Stack gap="md">
        <Text fz={{ base: 'sm', lg: 'md' }} fw={500}>
          I am experienced in:
        </Text>
        <Text fz="sm" fw={500} c="gray.6">
          languages
        </Text>
        <Group>
          {experiencedLanguages.map((skill) => (
            <IconWithTooltip
              key={skill.label}
              label={skill.label}
              iconUrl={skill.iconUrl}
            />
          ))}
        </Group>
        <Text fz="sm" fw={500} c="gray.6">
          frameworks & tools
        </Text>
        <Group>
          {experiencedFrameworksAndTools.map((skill) => (
            <IconWithTooltip
              key={skill.label}
              label={skill.label}
              iconUrl={skill.iconUrl}
            />
          ))}
        </Group>
      </Stack>

      <Stack gap="md">
        <Text fz={{ base: 'sm', lg: 'md' }} fw={500}>
          I have played around with:
        </Text>
        <Group>
          {familiarSkills.map((skill) => (
            <IconWithTooltip
              key={skill.label}
              label={skill.label}
              iconUrl={skill.iconUrl}
            />
          ))}
        </Group>
      </Stack>
    </Stack>
  );
}

export default SkillsLayout;
