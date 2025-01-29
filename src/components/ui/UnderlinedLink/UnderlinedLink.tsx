import { UnstyledButton } from '@mantine/core';
import '@mantine/core/styles.css';

import classes from './UnderlinedLink.module.css';

interface UnderlinedLinkProps {
  label: string;
  showUnderline: boolean;
  fz?: string | number | Record<string, string | number>;
}

function UnderlinedLink({
  label,
  showUnderline,
  fz = 'md',
}: UnderlinedLinkProps) {
  return (
    <UnstyledButton
      component="a"
      fz={fz}
      className={showUnderline ? classes.underlinedLink : classes.link}
    >
      {label}
    </UnstyledButton>
  );
}

export default UnderlinedLink;
