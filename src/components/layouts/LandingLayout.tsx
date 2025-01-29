import { Group, Stack, Text, Title } from '@mantine/core';

import NavBar from '../ui/NavBar';

function LandingLayout() {
  return (
    <>
      <NavBar />

      <Stack pt="70px" px="10%">
        <Group mt="200px">
          <Stack>
            <Title maw="700px">
              Hey there! I'm Jason, and I love to build software that helps
              others.
            </Title>
            <Text>Currently studying @ NUS</Text>
          </Stack>
        </Group>
      </Stack>
    </>
  );
}

export default LandingLayout;
