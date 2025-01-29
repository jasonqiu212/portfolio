import { Group, Stack, Text, Title } from '@mantine/core';

import { contactLinks } from '../../constants/ContactLinks';
import NavBar from '../ui/NavBar/NavBar';
import UnderlinedLink from '../ui/UnderlinedLink/UnderlinedLink';

function LandingLayout() {
  return (
    <>
      <NavBar />

      <Stack pt="90px" px={{ base: '6vw', lg: '10vw' }}>
        <Stack mt="240px">
          <Title fz={{ base: 'md', lg: 'lg' }}>Hey there! 👋</Title>

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
        <Text fz={{ base: 'sm', lg: 'md' }} pt="1000px" id="sec">
          Currently a final year student @ NUS
        </Text>
      </Stack>
    </>
  );
}

export default LandingLayout;
