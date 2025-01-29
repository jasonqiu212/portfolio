import {
  ActionIcon,
  Container,
  Group,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

import UnderlinedButton from './UnderlinedButton/UnderlinedButton';

function NavBar() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme();
  const isLightMode = computedColorScheme === 'light';

  return (
    <Container
      pos="fixed"
      w="100%"
      h="70px"
      px="10%"
      maw="unset"
      style={{ alignContent: 'center', backdropFilter: 'blur(10px)' }}
    >
      <Group justify="space-between">
        <Title variant="default">Jason Qiu</Title>
        <Group gap="lg">
          <UnderlinedButton label="about me" />
          <UnderlinedButton label="skills" />
          <UnderlinedButton label="experience" />
          <UnderlinedButton label="projects" />

          <ActionIcon
            variant="transparent"
            onClick={() => setColorScheme(isLightMode ? 'dark' : 'light')}
            size="xl"
            aria-label="Toggle color scheme"
          >
            {isLightMode ? <IconMoon stroke={1.5} /> : <IconSun stroke={1.5} />}
          </ActionIcon>
        </Group>
      </Group>
    </Container>
  );
}

export default NavBar;
