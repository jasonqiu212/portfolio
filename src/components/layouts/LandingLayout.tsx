import {
  ActionIcon,
  Affix,
  Group,
  Stack,
  Text,
  Title,
  Transition,
} from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconChevronUp } from '@tabler/icons-react';

import { contactLinks } from '../../constants/ContactLinks';
import {
  experiencedFrameworksAndTools,
  experiencedLanguages,
  familiarSkills,
} from '../../constants/Skills';
import IconWithTooltip from '../ui/IconWithTooltip';
import NavBar from '../ui/NavBar/NavBar';
import UnderlinedLink from '../ui/UnderlinedLink/UnderlinedLink';
import WavingHandEmoji from '../ui/WavingHandEmoji/WavingHandEmoji';

function LandingLayout() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <NavBar />
      <Stack pt="94px" px={{ base: '6vw', lg: '10vw' }} gap={0}>
        <Stack mt="240px">
          <Title fz={{ base: 'md', lg: 'lg' }}>
            Hey there! <WavingHandEmoji />
          </Title>

          <Title fz={{ base: 'lg', lg: 'xl' }} maw="750px">
            I'm Jason, and I love to build software that helps others.
          </Title>

          <Text fz={{ base: 'sm', lg: 'md' }} fw={500}>
            Currently a final year student @ NUS
          </Text>
        </Stack>
        <Group gap="lg" pt="100px">
          {contactLinks.map((link) => (
            <UnderlinedLink
              key={link.label}
              label={link.label}
              url={link.url}
              fz={{ base: 'sm', lg: 'md' }}
            />
          ))}
        </Group>
        <Stack id="aboutMe" pt="150px">
          <Title fz={{ base: 'lg', lg: 'xl' }}>
            <span style={{ paddingRight: '12px' }}>🤗</span> about me
          </Title>
        </Stack>
        <Stack id="skills" pt="100px" gap="lg">
          <Title fz={{ base: 'lg', lg: 'xl' }}>
            <span style={{ paddingRight: '12px' }}>💪</span> skills
          </Title>

          <Text fz={{ base: 'sm', lg: 'md' }} fw={500}>
            I am experienced in:
          </Text>
          <Stack gap="xs">
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
          </Stack>
          <Stack gap="xs">
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
        <Stack id="experience" pt="100px">
          <Title fz={{ base: 'lg', lg: 'xl' }}>
            <span style={{ paddingRight: '12px' }}>💼</span> experience
          </Title>
        </Stack>
        <Stack id="projects" pt="100px">
          <Title fz={{ base: 'lg', lg: 'xl' }}>
            <span style={{ paddingRight: '12px' }}>💻</span> projects
          </Title>
        </Stack>
        <Group justify="space-between" py="24px">
          <Title fz="md">Jason Qiu</Title>
          <Group gap="lg">
            {contactLinks.map((link) => (
              <UnderlinedLink
                key={link.label}
                label={link.label}
                url={link.url}
                fz={{ base: 'sm', lg: 'md' }}
              />
            ))}
          </Group>
        </Group>
      </Stack>

      <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <ActionIcon
              size={50}
              variant="filled"
              radius="xl"
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              styles={{
                icon: {
                  background: 'var(--mantine-color-text)',
                  color: 'light-dark(#fff, #000)',
                },
              }}
            >
              <IconChevronUp size={30} />
            </ActionIcon>
          )}
        </Transition>
      </Affix>
    </>
  );
}

export default LandingLayout;
