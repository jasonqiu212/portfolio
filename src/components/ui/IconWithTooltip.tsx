import { Image, Tooltip } from '@mantine/core';

interface IconWithTooltipProps {
  label: string;
  iconUrl: string;
}

function IconWithTooltip({ label, iconUrl }: IconWithTooltipProps) {
  return (
    <Tooltip
      label={label}
      position="bottom"
      offset={-7}
      bg="transparent"
      fz="xs"
      fw={500}
      c="gray.6"
      events={{ hover: true, focus: false, touch: true }}
      transitionProps={{ transition: 'slide-down', duration: 300 }}
    >
      <Image w="40px" src={iconUrl} />
    </Tooltip>
  );
}

export default IconWithTooltip;
