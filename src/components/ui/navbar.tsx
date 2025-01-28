import { Container, Group, Title, UnstyledButton } from '@mantine/core';

function NavBar() {
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
        </Group>
      </Group>
    </Container>
  );
}

export default NavBar;
