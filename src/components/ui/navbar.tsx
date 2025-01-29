import {
  ActionIcon,
  Container,
  Group,
  Title,
  UnstyledButton,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

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
        <Group>
          <UnstyledButton component="a">about me</UnstyledButton>
          <UnstyledButton component="a">skills</UnstyledButton>
          <UnstyledButton component="a">experience</UnstyledButton>

          <ActionIcon
            variant="default"
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
