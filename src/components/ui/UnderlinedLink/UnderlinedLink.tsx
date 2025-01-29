import { UnstyledButton } from '@mantine/core';
import '@mantine/core/styles.css';

import classes from './UnderlinedLink.module.css';

interface UnderlinedLinkProps {
  label: string;
  showUnderline: boolean;
}

function UnderlinedLink({ label, showUnderline }: UnderlinedLinkProps) {
  return (
    <UnstyledButton
      component="a"
      className={showUnderline ? classes.underlinedLink : classes.link}
    >
      {label}
    </UnstyledButton>
  );
}

export default UnderlinedLink;
