import { Stack, Text, Title } from '@mantine/core';

import NavBar from '../ui/navbar';

function LandingLayout() {
  return (
    <>
      <NavBar />

      <Stack pt="70px" px="10%">
        <Title>
          Hey there! I'm Jason, and I love to build beautiful software
        </Title>
        <Text>
          Ever since my foray into computing, I’ve fallen in love with building
          projects that both look good and do good. I have seen the power of
          technology and how it can greatly better the lives of the less
          privileged. I have thus been dabbling in both coding and design work
          that make a difference.
        </Text>
      </Stack>
    </>
  );
}

export default LandingLayout;
