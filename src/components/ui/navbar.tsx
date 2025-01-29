import {
  Container,
  Group,
  Switch,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

import UnderlinedButton from './UnderlinedButton/UnderlinedButton';

function NavBar() {
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true });
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
          <Switch
            checked={!isLightMode}
            onChange={() => setColorScheme(isLightMode ? 'dark' : 'light')}
            size="lg"
            color="slate.7"
            onLabel={
              <IconMoonFilled size={22} color="var(--mantine-color-indigo-4)" />
            }
            offLabel={
              <IconSunFilled size={22} color="var(--mantine-color-red-6)" />
            }
          />{' '}
        </Group>
      </Group>
    </Container>
  );
}

export default NavBar;
