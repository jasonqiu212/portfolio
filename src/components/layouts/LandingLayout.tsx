import { Group, Stack, Text, Title } from '@mantine/core';

import { contactLinks } from '../../constants/ContactLinks';
import NavBar from '../ui/NavBar/NavBar';
import UnderlinedLink from '../ui/UnderlinedLink/UnderlinedLink';
import WavingHandEmoji from '../ui/WavingHandEmoji/WavingHandEmoji';

function LandingLayout() {
  return (
    <>
      <NavBar />

      <Stack pt="94px" px={{ base: '6vw', lg: '10vw' }}>
        <Stack mt="240px">
          <Title fz={{ base: 'md', lg: 'lg' }}>
            Hey there! <WavingHandEmoji />
          </Title>

          <Title fz={{ base: 'lg', lg: 'xl' }} maw="750px">
            I'm Jason, and I love to build software that helps others.
          </Title>

          <Text fz={{ base: 'sm', lg: 'md' }}>
            Currently a final year student @ NUS
          </Text>
        </Stack>

        <Group gap="lg" mt="72px">
          {contactLinks.map((link) => (
            <UnderlinedLink
              key={link.label}
              label={link.label}
              url={link.url}
              fz={{ base: 'sm', lg: 'md' }}
            />
          ))}
        </Group>

        <Stack id="aboutMe" fz={{ base: 'lg', lg: 'xl' }} pt="100px">
          <Title>
            <span style={{ paddingRight: '12px' }}>🤗</span> about me
          </Title>
        </Stack>

        <Stack id="skills" fz={{ base: 'lg', lg: 'xl' }} pt="100px">
          <Title>
            <span style={{ paddingRight: '12px' }}>💪</span> skills
          </Title>
        </Stack>

        <Stack id="experience" fz={{ base: 'lg', lg: 'xl' }} pt="100px">
          <Title>
            <span style={{ paddingRight: '12px' }}>💼</span> experience
          </Title>
        </Stack>

        <Stack id="projects" fz={{ base: 'lg', lg: 'xl' }} pt="100px">
          <Title>
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
    </>
  );
}

export default LandingLayout;
