import {
  Anchor,
  Burger,
  Container,
  Group,
  Menu,
  Switch,
  Title,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoonFilled, IconSunFilled } from '@tabler/icons-react';

import { navLinks } from '../../../constants/navLinks';
import UnderlinedButton from '../UnderlinedLink/UnderlinedLink';
import classes from './NavBar.module.css';

function NavBar() {
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true });
  const computedColorScheme = useComputedColorScheme();
  const isLightMode = computedColorScheme === 'light';

  const [isMenuOpened, { toggle: toggleMenu }] = useDisclosure();

  return (
    <Container
      pos="fixed"
      w="100%"
      h="70px"
      px={{ base: '6vw', lg: '10vw' }}
      pt="20px"
      maw="unset"
      style={{
        alignContent: 'center',
        backdropFilter: 'blur(10px)',
        zIndex: 2,
      }}
    >
      <Group justify="space-between">
        <Title fz="md">Jason Qiu</Title>
        <Group gap="lg">
          <Group gap="lg" display={{ base: 'none', lg: 'flex' }}>
            {navLinks.map((link) => (
              <UnderlinedButton
                key={link.label}
                label={link.label}
                url={link.url}
                isSamePage
                hideUnderline
                fz="sm"
              />
            ))}
          </Group>

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
          />

          <Menu
            opened={isMenuOpened}
            onChange={toggleMenu}
            position="bottom-end"
            classNames={{
              dropdown: classes.dropdown,
              item: classes.item,
              itemLabel: classes.itemLabel,
            }}
          >
            <Menu.Target>
              <Burger
                opened={isMenuOpened}
                onClick={toggleMenu}
                display={{ base: 'inline-block', lg: 'none' }}
                aria-label="Toggle menu"
              />
            </Menu.Target>
            <Menu.Dropdown>
              {navLinks.map((link) => (
                <Menu.Item key={link.label}>
                  <Anchor
                    href={link.url}
                    fz="sm"
                    underline="never"
                    style={{ color: 'var(--mantine-text-color)' }}
                  >
                    {link.label}
                  </Anchor>
                </Menu.Item>
              ))}
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Group>
    </Container>
  );
}

export default NavBar;
