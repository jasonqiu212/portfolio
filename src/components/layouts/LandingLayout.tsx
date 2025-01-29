import { Group, Stack, Text, Title } from '@mantine/core';

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
          <UnderlinedLink
            label="github"
            showUnderline
            fz={{ base: 'sm', lg: 'md' }}
          />
          <UnderlinedLink
            label="linkedin"
            showUnderline
            fz={{ base: 'sm', lg: 'md' }}
          />
          <UnderlinedLink
            label="email"
            showUnderline
            fz={{ base: 'sm', lg: 'md' }}
          />
        </Group>
      </Stack>
    </>
  );
}

export default LandingLayout;
