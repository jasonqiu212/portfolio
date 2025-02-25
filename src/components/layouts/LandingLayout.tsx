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
import { experiences } from '../../constants/Experiences';
import { projects } from '../../constants/Projects';
import Experience from '../ui/Experience';
import NavBar from '../ui/NavBar/NavBar';
import Project from '../ui/Project/Project';
import UnderlinedLink from '../ui/UnderlinedLink/UnderlinedLink';
import WavingHandEmoji from '../ui/WavingHandEmoji/WavingHandEmoji';
import SkillsLayout from './SkillsLayout';

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
            Currently a final year CS student @ NUS
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

        <Stack id="aboutMe" pt="150px" gap="lg">
          <Title fz={{ base: 'lg', lg: 'xl' }}>
            <span style={{ paddingRight: '12px' }}>🤗</span> about me
          </Title>
          <Text fz={{ base: 'sm', lg: 'md' }} fw={500}>
            As a developer, I love building beautiful apps that make a
            difference. I'm passionate about blending robust software
            engineering with thoughtful design to solve real-world problems.
          </Text>
          <Text fz={{ base: 'sm', lg: 'md' }} fw={500}>
            When I'm not coding, you'll probably find me playing volleyball,
            tennis, gazing at green spaces, or diving into a good book.
          </Text>
        </Stack>

        <SkillsLayout />

        <Stack id="experience" pt="100px" gap="45px">
          <Title fz={{ base: 'lg', lg: 'xl' }}>
            <span style={{ paddingRight: '12px' }}>💼</span> experience
          </Title>
          {experiences.map((experience, i) => (
            <Experience key={i} experience={experience} />
          ))}
        </Stack>

        <Stack id="projects" pt="100px" gap="45px">
          <Title fz={{ base: 'lg', lg: 'xl' }}>
            <span style={{ paddingRight: '12px' }}>💻</span> projects
          </Title>
          {projects.map((project, i) => (
            <Project key={i} project={project} />
          ))}
        </Stack>

        <Group justify="space-between" pt="100px" pb="48px">
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
              bd={0}
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
